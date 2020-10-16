from django.urls import path
from cart import views

app_name = 'cart'

urlpatterns = [
    path('', views.cart_detail, name='cart_detail'),
    path('add/<int:product_id>/', views.cart_add, name='cart_add'),
    path('add_cart/<int:product_id>/', views.cart_add_button, name='cart_button'),
    path('remove/<int:product_id>/', views.cart_remove, name='delete_item'),
]