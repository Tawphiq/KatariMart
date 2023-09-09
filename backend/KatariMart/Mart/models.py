from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phoneNum = models.CharField(max_length = 30)
    address = models.CharField(max_length = 200)
    
    def __str__(self):
        return self.user.username
    
class Product(models.Model):
    name = models.CharField(max_length = 200)
    description = models.TextField()
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    image = models.ImageField(upload_to = 'products/')
    category = models.CharField(max_length = 200)
    stock = models.PositiveIntegerField(default = 0)
    
    def __str__(self):
        return self.name
    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderItem')
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Order {self.pk} by {self.user.username}'

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.quantity} x {self.product.name}'    
