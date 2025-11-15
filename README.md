# Microservices Billing Application

Application de facturation avec architecture microservices - Spring Boot + Angular

## Technologies

**Backend:** Spring Boot 3.5.7, Spring Cloud 2025.0.0, Eureka, Gateway, OpenFeign, H2, Java 21
**Frontend:** Angular 19, TypeScript, RxJS

## Architecture

![Architecture](screenshots/architecture.png)

## Services

| Service   | Port | Endpoint                            |
| --------- | ---- | ----------------------------------- |
| Angular   | 4200 | http://localhost:4200               |
| Eureka    | 8761 | http://localhost:8761               |
| Gateway   | 8888 | http://localhost:8888               |
| Customer  | 8081 | http://localhost:8081/api/customers |
| Inventory | 8082 | http://localhost:8082/api/products  |
| Billing   | 8083 | http://localhost:8083/bills/{id}    |

## Documentation

### Backend Services

#### Customer Service

![Customer Service](screenshots/customer-service.png)

#### Inventory Service

![Inventory Service](screenshots/inventory-service.png)

#### Billing Service (OpenFeign)

![Billing Service](screenshots/billing-service.png)

#### Eureka Dashboard

![Eureka Dashboard](screenshots/eureka-dashboard.png)

#### Gateway Configuration

![Gateway Config 1](screenshots/gateway-config-1.png)
![Gateway Config 2](screenshots/gateway-config-2.png)

#### OpenFeign Clients

![Feign Clients](screenshots/feign-clients.png)

### Frontend Angular

#### Customers Page

![Angular Customers](screenshots/angular-customers.png)

#### Products Page

![Angular Products](screenshots/angular-products.png)

#### Bills Page

![Angular Bills](screenshots/angular-bills.png)
