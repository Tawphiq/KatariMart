from django.contrib import admin
from .models import Product, Order, CartItem

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(CartItem)

