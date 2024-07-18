# bookings/views.py

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Fruit, Booking
from .serializers import FruitSerializer, BookingSerializer
from django.core.exceptions import ValidationError

class FruitListCreate(generics.ListCreateAPIView):
    queryset = Fruit.objects.all()
    serializer_class = FruitSerializer

class BookingListCreate(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            self.perform_create(serializer)
        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()
