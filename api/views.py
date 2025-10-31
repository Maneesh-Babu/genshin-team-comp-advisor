from django.http import JsonResponse
from .gemini_client import ask_gemini
from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .gemini_client import ask_gemini

@csrf_exempt
def analyze_team(request):
    import json
    if request.method == "POST":
        data = json.loads(request.body)
        characters = data.get("characters", [])
        if not characters:
            return JsonResponse({"error": "No characters provided"}, status=400)

        prompt = f"""
        You are a Genshin Impact team advisor.
        Given the user's characters: {', '.join(characters)},
        suggest 2-3 optimal team compositions for Spiral Abyss or endgame content.
        Focus on synergy, elemental reactions, and meta relevance.
        Return clear team names and roles.
        """

        ai_result = ask_gemini(prompt)
        return JsonResponse({"result": ai_result})
        # return HttpResponse(ai_result, content_type="text/plain")



def index(request):
    return render(request, 'api/index.html')
