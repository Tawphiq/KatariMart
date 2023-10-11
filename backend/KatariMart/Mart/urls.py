from . import views
from django.urls import path

urlpatterns = [
    path('products', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('orders/', views.OrderList.as_view()),
    path('orders/<int:pk>/', views.OrderDetail.as_view()),
    path('cartitems/', views.CartItemList.as_view()),
    path('cartitems/<int:pk>/', views.CartItemDetail.as_view()),
    path('contact/', views.ContactCreateView.as_view()),
    ]