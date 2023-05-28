from django.urls import path
from .views import *
urlpatterns = [
    path('<id>',testimonial, name='testimonial')
]