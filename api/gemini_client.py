import google.generativeai as genai
import os

genai.configure(api_key="AIzaSyAhX3ZcPAJF66WzbCIREVH_gfMX5zn9NvY")

def ask_gemini(prompt):
    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    
    # Make sure we extract the plain text
    if hasattr(response, "text") and response.text:
        return response.text.strip()
    elif isinstance(response, dict) and "candidates" in response:
        return response["candidates"][0]["content"]["parts"][0]["text"].strip()
    else:
        return "⚠️ Could not parse AI response"
