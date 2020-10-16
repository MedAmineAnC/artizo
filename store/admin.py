from django.contrib import admin
from .models import Category, Origin, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Origin)
class OriginAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'origin', 'slug', 'image']
    list_filter = ['category', 'origin']
    list_editable = ['price']
    prepopulated_fields = {'slug': ('name',)}
