from django.urls import path

from .views import api_list_sales, api_list_salespeople, api_list_customers


urlpatterns = [
    path("sales/", api_list_sales, name="api_list_sales"),
    path("salesperson/<int:salesperson_id>/sales/",
         api_list_sales, name="api_list_sales"),
    path("salespeople/", api_list_salespeople, name="api_list_salespersons"),
    path("customers/", api_list_customers, name="api_list_customers"),

]
