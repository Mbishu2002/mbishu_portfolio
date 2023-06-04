from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Project
from rest_framework.permissions import AllowAny
from .serializers import ProjectSerializer


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
