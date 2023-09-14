from . import views
from django.urls import path

urlpatterns = [
    path('userprofiles/', views.UserProfileList.as_view()),
    path('userprofiles/<int:pk>/', views.UserProfileDetail.as_view()),
]