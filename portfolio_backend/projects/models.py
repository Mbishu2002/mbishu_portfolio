from django.db import models

# Create your models here.
class projects(models.Model):
    id = models.BigIntegerField(primary_key=True)
    Title = models.CharField(max_length= 255)
    description = models.TextField()
    preview = models.FileField(upload_to='media')
    link = models.CharField(max_length= 255)
    