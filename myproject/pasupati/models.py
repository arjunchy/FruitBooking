# bookings/models.py

from django.db import models
from django.core.exceptions import ValidationError

class Fruit(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    image = models.ImageField()
    def __str__(self):
        return self.name

class Booking(models.Model):
    fruit = models.ForeignKey(Fruit, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    booking_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} of {self.fruit.name} booked on {self.booking_date}"

    def save(self, *args, **kwargs):
        if self.fruit.quantity < self.quantity:
            raise ValidationError(f"Not enough {self.fruit.name} in stock.")
        self.fruit.quantity -= self.quantity
        self.fruit.save()
        super().save(*args, **kwargs)
