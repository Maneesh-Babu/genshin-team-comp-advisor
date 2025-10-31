import requests
from bs4 import BeautifulSoup

def get_spiral_abyss_data() -> dict:
    """
    Scrapes the latest Spiral Abyss data from Game8.
    Example: https://game8.co/games/Genshin-Impact/archives/312470
    """
    url = "https://game8.co/games/Genshin-Impact/archives/312470"
    try:
        res = requests.get(url, timeout=10)
        if res.status_code != 200:
            return {"error": "Failed to fetch Spiral Abyss data"}

        soup = BeautifulSoup(res.text, "html.parser")
        title = soup.find("h1").text if soup.find("h1") else "Spiral Abyss Guide"
        paragraphs = [p.text.strip() for p in soup.find_all("p")]
        content = " ".join(paragraphs[:30])  # short summary

        return {
            "title": title,
            "content": content,
            "source": url,
        }

    except Exception as e:
        return {"error": str(e)}
