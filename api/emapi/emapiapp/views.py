from django.shortcuts import render

# Create your views here.
from .serializers import ApiSerializer
from .models import Api
from rest_framework import serializers, viewsets

class Apiview(viewsets.ModelViewSet):
    serializer_class=ApiSerializer
    queryset=Api.objects.all()    