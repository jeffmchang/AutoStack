# CarCar

The project is CarCar, an application for managing aspects of an automobile dealership, specifically its inventory, service center, and sales.

Team:

* Sofia Uribe - Service Microservice
* Jeff Chang - Sales Microservice


# Getting Started:


1. Make sure your Docker app is running
2. Clone this repository to your local computer (please replace “the repo” with the actual repository link)

```jsx
$ git clone <the repo>
```

1. **Make sure you are in the project directory**, then run these commands **one by one** in your terminal:

```jsx
docker volume create beta-data
docker-compose build
docker-compose up
```

When running `docker-compose up` on macOS, a warning about a missing environment variable named `OS` may appear. **You can safely ignore this warning!**

<aside>
Once everything loads, you can make your way to http://localhost:3000/ to check out the front end!

</aside>

---
![My image](excalidraw.png)

---


# Overview of the microservices


<details>
    <summary><h2>Inventory</h2></summary>
    Our inventory will contain three different types of models to use as databases: Automobile, VehicleModel, and Manufacturer. Automobile will serve as the core database for our VO (value object) models in both Sales and Service. It will provide VIN, color, year, and model information. VehicleModel will include the model name and a picture URL, as well as the manufacturer (which is pulled from the Manufacturer database). Manufacturer will have a standalone attribute for just the name, which is a straightforward property to supply our VehicleModel. The purpose of this inventory is to gather and organize information into our respective microservices. By doing so, we can ensure that all databases are kept up to speed when presenting information on the webpage.

</details>


<details>
    <summary><h2>Service</h2></summary>
    The service microservice keeps track of service appointments for automobiles and their owners. More specifically, it enables customers to schedule service appointments, view appointment details, and review appointment history once an appointment is marked as "finished". The service history page includes a search function, allowing customers to easily find their vehicle by its VIN. This microservice polls the VIN data from the Inventory through a value object (named AutomobileVO here) to check if the vehicle qualifies for “VIP treatment”. Our dealership offers VIP treatment to customers who have purchased a vehicle from us. The customer can also create a technician. This is visible when creating a new service appointment, as you select a technician in the form. By utilizing states in the components, the database always contains the most up-to-date information for the objects; for example, when they are created, deleted, or updated.
</details>


<details>
    <summary><h2>Sale</h2></summary>
    The sales microservice is a powerful tool that makes all 'sales' related functions easily accessible to users. It offers a wide range of functions such as creating a new customer, listing all customers, listing all sales, listing all sales made by a specific salesperson, creating a sale, creating a salesperson, and listing all salespeople. To ensure that the microservice stays updated, it utilizes the Automobile model in the Inventory directory and polls information from that file. This information is then used to offer the most accurate data when presenting information on the webpage. One of the most impressive features of the sales microservice is the built-in functionality of the 'Create a Sale Form'. This functionality ensures that the automobiles that show up in the automobiles drop-down list are only cars that have not yet been sold. By doing this, the microservice prevents any selling of duplicate cars (which have unique VINs). Overall, the sales microservice is a crucial component of the system that makes the selling process more efficient and streamlined. Its functions ensure that all relevant data is kept up to speed and that the information presented on the webpage is accurate and consistent.
</details>

## RestFUL APIs

### Inventory APIs:

| Action | Method | Url |
| --- | --- | --- |
| List manufacturers | GET | ```http://localhost:8100/api/manufacturers/``` |
| Details of a manufacturer | GET | ```http://localhost:8100/api/manufacturers/<:id>/``` |
| Create a manufacturer | POST | ```http://localhost:8100/api/manufacturers/``` |
| Update a manufacturer | PUT | ```http://localhost:8100/api/manufacturers/<:id>/``` |
| Delete a manufacturer | DELETE | ```http://localhost:8100/api/manufacturers/<:id>/``` |
| ————————————————— | ——————— | ————————————————————————— |
| List Automobiles | GET | ```http://localhost:8080/api/automobiles/``` |
| Details of an Automobile | GET | ```http://localhost:8080/api/automobiles/<:vin>/``` |
| Create an Automobile | POST | ```http://localhost:8080/api/automobiles/``` |
| Update an Automobile | PUT | ```http://localhost:8080/api/automobiles/<:vin>/``` |
| Delete an Automobile | DELETE | ```http://localhost:8080/api/automobiles/<:vin>/``` |
| ————————————————— | ——————— | ————————————————————————— |
| List Models | GET | ```http://localhost:8080/api/models/``` |
| Details of an Model | GET | ```http://localhost:8080/api/models/<:id>/``` |
| Create a Model | POST | ```http://localhost:8080/api/models/``` |
| Update a Model | PUT | ```http://localhost:8080/api/models/<:id>/``` |
| Delete a Model | DELETE | ```http://localhost:8080/api/models/<:id>/``` |
| ————————————————— | ——————— | ————————————————————————— |

<details>
<summary><h2>Inventory GET Requests</h2></summary>


**Manufacturer list**

```jsx
{
  "manufacturers": [
    {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  ]
}
```

**Vehicle Model List**

```jsx
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```

**Automobile List**

```jsx
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```
</details>
<details>
<summary><h2>Inventory POST Requests</h2></summary>


**Manufacturer Create Input Example:**

```jsx
{
  "name": "Chrysler"
}
```

**Manufacturer Create Output Example:**

```jsx
{
"href": "/api/manufacturers/1/",
"id": 1,
"name": "Chrysler"
}
```

**Vehicle Model Create Input Example:**

```jsx
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}
```

**Vehicle Model Create Output Example:**

```jsx
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```

**Automobile Create Input Example:**

```jsx
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}
```

**Automobile Create Output Example:**

```jsx
{
  "href": "/api/automobiles/1C3CC5FB2AN120174/",
  "id": 1,
  "color": "yellow",
  "year": 2013,
  "vin": "1C3CC5FB2AN120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  }
}
```

</details>

---


### Service APIs:

| Action | Method | Url |
| --- | --- | --- |
| List technicians | GET | ```http://localhost:8080/api/technicians/``` |
| Details of a technician | GET | ```http://localhost:8080/api/technicians/<:id>/``` |
| Create a technician | POST | ```http://localhost:8080/api/technicians/``` |
| Update a technician | PUT | ```http://localhost:8080/api/technicians/<:id>/``` |
| Delete a technician | DELETE | ```http://localhost:8080/api/technicians/<:id>/``` |
| ————————————————— | ——————— | ————————————————————————— |
| List Appointments | GET | ```http://localhost:8080/api/appointments/``` |
| Details of an appointment | GET | ```http://localhost:8080/api/appointments/<:id>/``` |
| Create an appointment | POST | ```http://localhost:8080/api/appointments/``` |
| Update an appointment | PUT | ```http://localhost:8080/api/appointments/<:id>/``` |
| Delete an appointment | DELETE | ```http://localhost:8080/api/appointments/<:id>/``` |
| ————————————————— | ——————— | ————————————————————————— |
<details>
<summary><h2>Services GET Requests</h2></summary>


**Technician List**

```jsx
{
	"technicians": [
		{
			"href": "/api/technician/1/",
			"name": "Cole",
			"employee_number": 1,
			"id": 1
		},
	]
}
```

 ****

**Service List**

```jsx
{
	"appointments": [
		{
			"href": "/api/appointment/1/",
			"vin": "33333333333333335",
			"customer_name": "Sofia Uribe",
			"date": "2023-03-08T22:15:00+00:00",
			"reason": "Oil Change",
			"vip": true,
			"technician": {
				"href": "/api/technician/2/",
				"name": "Carlos",
				"employee_number": 2,
				"id": 2
			},
			"finished": true,
			"id": 2
		},
    ]
}
```

</details>
<details>
<summary><h2>Services POST Requests</h2></summary>


**Technician Creation Example Input:**

```jsx
{
	"name": "Melissa",
	"employee_number": 11
}
```

**Technician Creation Example output:**

```jsx
{
	"href": "/api/technician/11/",
	"name": "Melissa",
	"employee_number": 11,
	"id": 11
}
```

**Service Appointment Creation Example input:**

```jsx
{
	"vin": 11111111111111178,
	"customer_name": "Sofia",
	"date": "2023-03-12",
	"reason": "flat tire",
	"vip": "False",
	"finished": "False",
	"technician": 2
}
```

**Service Appointment Creation Example output:**

```jsx
{
	"href": "/api/appointment/30/",
	"vin": 11111111111111178,
	"customer_name": "Sofia",
	"date": "2023-03-12",
	"reason": "flat tire",
	"vip": false,
	"technician": {
		"href": "/api/technician/2/",
		"name": "Carlos",
		"employee_number": 2,
		"id": 2
	},
	"finished": "False",
	"id": 3
}
```
</details>

---

### Sales APIs:

| Action | Method | Url |
| --- | --- | --- |
| List Salespeople | GET | ```http://localhost:8090/api/salespeople/``` |
| Create a Salesperson | POST | ```http://localhost:8090/api/salespeople/``` |
| ————————————————— | ——————— | ————————————————————————— |
| List Customer | GET | ```http://localhost:8090/api/customers/``` |
| Create an Customer | POST | ```http://localhost:8090/api/customers/``` |
| ————————————————— | ——————— | ————————————————————————— |
| List All Sales | GET | ```http://localhost:8090/api/sales/``` |
| Salesperson History | GET | ```http://localhost:8090/api/salesperson/<:id>/sales``` |
| Create a Sale | POST | ```http://localhost:8090/api/sales/``` |
| ————————————————— | ——————— | ————————————————————————— |


<details>
<summary><h2>Sales POST Requests</h2></summary>

**New Sales Record input**

```python
{
	"sale_price": 28000,
	"vin": "5YJ3E1EA5LF807996",
	"salesperson": 2,
	"customer": 1
}
```

**New Sales Record response**

```python
{
	"salesperson": "Sal Callord",
	"customer": "Kevin Lu",
	"vin": "5YJ3E1EA5LF807996",
	"sale_price": 28000,
	"id": 1,
	"employee_number": 3213
}
```

---

**New Customer input**

```python
{
	"name": "Joey Tribbiani",
	"address": "123 Hope St, Lane, 12325",
	"phone_number": 1231231424
}
```

**New Customer response**

```python
{
	"salesperson": "Sal Callord",
	"customer": "Kevin Lu",
	"vin": "5YJ3E1EA5LF807996",
	"sale_price": 28000,
	"id": 1,
	"employee_number": 3213
}
```

---

**New Salesperson input**

```python
{
	"name": "Jimmy John",
	"employee_number": 1
}
```

**New Salesperson response**

```python
{
	"name": "Jimmy John",
	"employee_number": 1
}
```

---

</details>
<details>
<summary><h2>Sales GET Requests</h2></summary>


**All Sales return**

```python
{
	"sales": [
		{
			"salesperson": "Jimmy John",
			"customer": "Joey Tribbiani",
			"vin": "AKSJDHF0101278389",
			"sale_price": 400001,
			"id": 24,
			"employee_number": 1
		},
		{
			"salesperson": "Wang Junior",
			"customer": "Jake Seer",
			"vin": "5YJ3E1EA5LF807996",
			"sale_price": 400001,
			"id": 25,
			"employee_number": 2
		}
  ]
}
```

**Specific Salespeople return**

```python
[
	{
		"salesperson": "Sal Callord",
		"customer": "Jeff Chong",
		"vin": "A98SDHF908YH928H3",
		"sale_price": 213122,
		"id": 28,
		"employee_number": 4123
	},
	{
		"salesperson": "Sal Callord",
		"customer": "Jeff Chong",
		"vin": "OJASD98FJH283YH9H",
		"sale_price": 4123,
		"id": 29,
		"employee_number": 4123
	}
]
```

**All Salespeople return**

```python
{
	"salespersons": [
		{
			"name": "Sal Callord",
			"employee_number": 4123,
			"id": 5
		},
		{
			"name": "Larry Freemen",
			"employee_number": 4123,
			"id": 6
		},
		{
			"name": "Ronald Gordon",
			"employee_number": 2213,
			"id": 7
		}
	]
}
```

---

**All Customers**

```python
[
	{
		"name": "Jeff Chang",
		"address": "123 Main St, Pocoway, CA, 1234",
		"phone_number": 1231231233,
		"id": 7
	},
	{
		"name": "Jimmy Johnson",
		"address": "123 Main St, Pocoway, CA, 1234",
		"phone_number": 1412312314,
		"id": 8
	}
]
```


</details>
