from django.shortcuts import render, get_object_or_404
from .models import Category, Origin, Product
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from cart.forms import CartAddProductForm
from cart.cart import Cart

def index(request):
    cart = Cart(request)
    return render(request, 'store/index.html', {'cart': cart})

def product_list(request, category_slug=None):
    cart = Cart(request)
    category = None
    categories = Category.objects.all()
    products = Product.objects.all()
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    paginator = Paginator(products, 15)
    page_number = request.GET.get('page')
    prods = paginator.get_page(page_number)

    return render(request, 'store/catalog/list.html', {'prods':prods, 'category': category, 'categories':categories, 'cart': cart})

def product_detail(request, id, slug):
    product = get_object_or_404(Product, id=id, slug=slug)

    return render(request, 'store/catalog/detail.html', {'product':product, 'cart': cart})

def about(request):
    cart = Cart(request)
    return render(request, 'store/about.html', {'cart': cart})

def contact(request):
    cart = Cart(request)
    return render(request, 'store/contact.html', {'cart': cart})