from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    image = models.URLField()

    def __str__(self):
        return self.name
