from django.db import models

# Create your models here.

class testimonial(models.Model):
    id = models.BigIntegerField(primary_key=True)
    Title = models.TextField()
    client = models.CharField(max_length = 255)
    image = models.FileField(upload_to='media')