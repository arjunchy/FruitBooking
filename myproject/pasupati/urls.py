# bookings/urls.py

from django.urls import path

from .views import FruitListCreate, BookingListCreate

urlpatterns = [
    path('fruits/', FruitListCreate.as_view(), name='fruit-list-create'),
    path('bookings/', BookingListCreate.as_view(), name='booking-list-create'),
]
