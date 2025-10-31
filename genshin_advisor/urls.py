from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

def home_redirect(request):
    return redirect('/api/')

urlpatterns = [
    path('', home_redirect),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
