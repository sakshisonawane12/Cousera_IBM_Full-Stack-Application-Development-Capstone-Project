from django.contrib import admin
from .models import CarMake, CarModel


# Register your models here.

# CarModelInline class
class CarModelInline(admin.StackedInline):
    model = CarModel
    extra = 1 # Number of empty forms to display by default
    fields = ['name', 'car_type', 'year', 'mileage'] # Fields displayed in the inline form

# CarModelAdmin class
class CarModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'car_make', 'car_type', 'year', 'mileage') # Display these fields in the list view
    search_fields = ['name', 'car_make__name'] # Enable search by car model name and car make name
    list_filter = ['car_type', 'year'] # Allow filtering by car type and year
    list_per_page = 20 # Show 20 items per page

# CarMakeAdmin class with CarModelInline
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description') # Display name and description of CarMake in the list view
    search_fields = ['name'] # Enable search by car make name
    inlines = [CarModelInline] # Add Car Model as an inline form in the CarMake admin

# Register models here
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)