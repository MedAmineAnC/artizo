from django.urls import path
from . import views

app_name = 'store'

urlpatterns = [
    path('', views.index, name='index'),
    path('catalog/', views.product_list, name='catalog'),
    path('catalog/<slug:category_slug>/', views.product_list, name='catalog_by_category'),
    path('catalog/<int:id>/<slug:slug>', views.product_detail, name='product_detail'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]