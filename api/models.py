from django.db import models

# Create your models here.
class Character(models.Model):
    name = models.CharField(max_length=100, unique=True)
    vision = models.CharField(max_length=50, blank=True, null=True)        # Element (e.g., Pyro)
    weapon = models.CharField(max_length=50, blank=True, null=True)
    nation = models.CharField(max_length=50, blank=True, null=True)
    rarity = models.IntegerField(default=0)
    description = models.TextField(blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)
    data = models.JSONField(default=dict)     # raw data if needed

    def __str__(self):
        return self.name