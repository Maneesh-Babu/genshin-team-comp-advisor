from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('analyze_team/', views.analyze_team, name='analyze_team'),
]
