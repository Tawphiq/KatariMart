from django.db import models
from django.contrib.auth.models import User


    
class Product(models.Model):
    name = models.CharField(max_length = 200)
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    image = models.ImageField(upload_to = 'products/')
    category = models.CharField(max_length = 200)
    stock = models.PositiveIntegerField(default = 0)
    quantity = models.PositiveIntegerField(default = 1)
    
    def __str__(self):
        return self.name
    
class Order(models.Model):
    products = models.ManyToManyField(Product)
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Order {self.pk}'

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.quantity} x {self.product.name}'
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField()
