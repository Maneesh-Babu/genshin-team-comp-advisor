import requests
from bs4 import BeautifulSoup

def get_fandom_character_data(character_name: str) -> dict:
    """
    Scrapes Genshin Fandom for a character's build and info.
    Example URL: https://genshin-impact.fandom.com/wiki/Furina
    """
    url_name = character_name.replace(" ", "_")
    url = f"https://genshin-impact.fandom.com/wiki/{url_name}"
    try:
        res = requests.get(url, timeout=10)
        if res.status_code != 200:
            return {"error": f"Fandom page not found for {character_name}"}

        soup = BeautifulSoup(res.text, "html.parser")

        # Basic data
        infobox = soup.find("aside", {"class": "portable-infobox"})
        summary = soup.find("div", {"class": "mw-parser-output"}).text[:800] if soup.find("div", {"class": "mw-parser-output"}) else "No summary."

        vision = weapon = rarity = "Unknown"
        if infobox:
            for row in infobox.find_all("section"):
                label = row.find("h3")
                if not label:
                    continue
                if "Vision" in label.text:
                    vision = row.find("div").text.strip()
                elif "Weapon" in label.text:
                    weapon = row.find("div").text.strip()
                elif "Rarity" in label.text:
                    rarity = row.find("div").text.strip()

        return {
            "name": character_name,
            "vision": vision,
            "weapon": weapon,
            "rarity": rarity,
            "summary": summary,
            "source": url,
        }

    except Exception as e:
        return {"error": str(e)}
