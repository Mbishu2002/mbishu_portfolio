from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Testimonial
from .serializers import TestimonialSerializer

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def testimonial_list(request):
    if request.method == 'GET':
        testimonials = Testimonial.objects.all()
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)