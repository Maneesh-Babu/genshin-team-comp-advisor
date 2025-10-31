import os
from openai import AzureOpenAI
from dotenv import load_dotenv
from .retrievers.fandom_scraper import get_fandom_character_data
from .retrievers.game8_scraper import get_spiral_abyss_data

load_dotenv()

def generate_team_advice(characters: list, preferred_dps: list = None) -> str:
    """
    Core RAG function: fetches real-time data + queries AI for team comps.
    """
    abyss_data = get_spiral_abyss_data()
    fandom_data = [get_fandom_character_data(c) for c in characters]

    context = f"""
    Latest Spiral Abyss Data:
    {abyss_data.get('content', '')}

    Character Info:
    {fandom_data}
    """

    client = AzureOpenAI(
        api_key=os.getenv("AZURE_OPENAI_KEY"),
        azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
        api_version="2024-05-01-preview"
    )

    user_prompt = f"""
    You are a Genshin Impact team-building assistant.
    The player owns these characters: {', '.join(characters)}.
    Preferred DPS: {', '.join(preferred_dps or [])}.
    Based on the latest Abyss info and characters' roles, suggest 3 optimized team compositions.
    """

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an expert Genshin Impact strategist."},
                {"role": "user", "content": context + "\n" + user_prompt},
            ],
            temperature=0.7,
        )

        return completion.choices[0].message.content.strip()

    except Exception as e:
        return f"Error generating response: {e}"
