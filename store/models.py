from django.db import models
from django.urls import reverse

# Create your models here.

#Categories: Necklaces, Bracelets, Rings, Earings, Set
class Category(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def get_absolute_url(self):
        return reverse('store:catalog_by_category', args=[self.slug])
    
    def __str__(self):
        return self.name

#Countries of Origine: Italy, Turkey, Thailand
class Origin(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Origin'
        verbose_name_plural = 'Origin'
    
    def __str__(self):
        return self.name

#Products
class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    origin = models.ForeignKey(Origin, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    slug = models.SlugField(max_length=200, unique=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    
    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)

    def get_absolute_url(self):
        return reverse('store:product_detail', args=[self.id, self.slug])

    def __str__(self):
        return self.name
