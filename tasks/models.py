from django.db import models

# Create your models here.

class Task (models.Model):
    vegetable_name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.vegetable_name