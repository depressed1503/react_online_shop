from rest_framework import generics, permissions, viewsets, status, views, decorators
from django.contrib.auth import get_user_model
from .serializers import *

class CustomUserCreateAPIView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

