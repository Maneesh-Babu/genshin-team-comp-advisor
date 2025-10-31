from ddgs import DDGS  # updated import
from bs4 import BeautifulSoup
import requests

def fetch_live_data(query):
    """
    Fetches only relevant Genshin data from trusted sites.
    """
    print(f"🔍 Searching live data for: {query}")
    search_query = (
        f"{query} site:game8.co OR site:genshin-impact.fandom.com "
        f"OR site:honeyhunterworld.com OR site:gamewith.net"
    )

    combined_text = ""
    with DDGS() as ddgs:
        results = [r for r in ddgs.text(search_query, max_results=5)]

    for r in results:
        try:
            url = r["href"]
            print(f"📘 Fetching: {url}")
            headers = {"User-Agent": "Mozilla/5.0"}
            page = requests.get(url, timeout=10, headers=headers)
            page.encoding = "utf-8"
            soup = BeautifulSoup(page.text, "html.parser")
            paragraphs = [p.get_text() for p in soup.find_all("p")]
            combined_text += " ".join(paragraphs)[:8000]  # limit to 8k chars per site
        except Exception as e:
            print(f"⚠️ Failed to fetch {r.get('href')}: {e}")
            continue

    if not combined_text:
        return "No valid data retrieved from Genshin sources."
    return combined_text
