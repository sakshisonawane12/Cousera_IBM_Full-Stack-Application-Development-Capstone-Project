# Uncomment the following imports before adding the Model code

from django.db import models
from django.utils.timezone import now
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.

class CarMake(models.Model):
    name = models.CharField(max_length=100) # Name of Car Make
    description = models.TextField() # Text description of Car Make


    def __str__(self): # Method to print a car make object
        return self.name # String representation of the CarMake object


class CarModel(models.Model):
    # Many to one relationhip with CarMake
    car_make = models.ForeignKey('CarMake', on_delete=models.CASCADE, related_name='models')

    # Basic fields
    name = models.CharField(max_length=100) # Name of car model
    dealer_id = models.PositiveIntegerField() # ID of the dealer from the Cloudant database

    # Car Type Choices
    CAR_TYPES = [
        ('SEDAN', 'Sedan'),
        ('SUV', 'SUV'),
        ('HATCHBACK', 'Hatchback'),
        ('COUPE', 'Coupe'),
        ('MINIVAN', 'Minivan'),
        ('CONVERTIBLE', 'Convertible'),
        ('PICKUP', 'Pickup')
    ]
    car_type = models.CharField(
        max_length = 12,
        choices = CAR_TYPES,
        default = 'SEDAN',
    )

    # Year field with Validation
    year = models.IntegerField(
        validators= [
            MaxValueValidator(2025), # Cannot exceed the current year
            MinValueValidator(2015), # Minimum year for cars
        ]
    )

    # Additional fields
    mileage = models.PositiveIntegerField()

    # String representation
    def __str__(self):
        return f"{self.car_make.name} {self.name} ({self.year})"
