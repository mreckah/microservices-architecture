# Microservices Frontend Application

## 🚀 Application is Running!

### Access the Application

**Main URL:** [http://localhost:4200](http://localhost:4200)

### Available Pages

1. **Customers Page** - [http://localhost:4200/customers](http://localhost:4200/customers)
   - View all customers from the customer-service
   - Displays customer ID, name, and email

2. **Products Page** - [http://localhost:4200/products](http://localhost:4200/products)
   - View all products from the inventory-service
   - Displays product ID, name, price, quantity, and stock status

3. **Bills Page** - [http://localhost:4200/bills](http://localhost:4200/bills)
   - View bill details from the billing-service
   - Enter a Bill ID to load bill information
   - Shows customer details, product items, and total amount

## 🏗️ Architecture

### Backend Services (Spring Boot)
- **Discovery Service** (Eureka) - Port 8761
- **Customer Service** - Port 8081
- **Inventory Service** - Port 8082
- **Billing Service** - Port 8083
- **Gateway Service** - Port 8888

### Frontend (Angular)
- **Angular App** - Port 4200

## 📡 API Endpoints

All API calls go through the Gateway Service at `http://localhost:8888`

### Customer Service
- `GET http://localhost:8888/api/customers` - Get all customers
- `GET http://localhost:8888/api/customers/{id}` - Get customer by ID

### Inventory Service
- `GET http://localhost:8888/api/products` - Get all products
- `GET http://localhost:8888/api/products/{id}` - Get product by ID

### Billing Service
- `GET http://localhost:8888/api/bills/{id}` - Get bill by ID with full details

## 🛠️ Technologies Used

### Frontend
- **Angular 19** - Latest Angular framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **HttpClient** - HTTP communication
- **Router** - Navigation

### Backend
- **Spring Boot 3.5.7** - Main framework
- **Spring Cloud 2025.0.0** - Microservices infrastructure
- **Spring Cloud Netflix Eureka** - Service discovery
- **Spring Cloud Gateway** - API Gateway
- **Spring Cloud OpenFeign** - Inter-service communication
- **Spring Data JPA** - Data persistence
- **Spring Data REST** - REST API exposure
- **H2 Database** - In-memory database

## 📂 Project Structure

```
microservices-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── customers/
│   │   │   ├── products/
│   │   │   └── bills/
│   │   ├── models/
│   │   │   ├── customer.interface.ts
│   │   │   ├── product.interface.ts
│   │   │   ├── bill.interface.ts
│   │   │   └── product-item.interface.ts
│   │   ├── services/
│   │   │   ├── customer.service.ts
│   │   │   ├── product.service.ts
│   │   │   └── bill.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── styles.css
│   └── index.html
└── package.json
```

## 🎨 Features

### Customers Component
- Displays all customers in a responsive grid layout
- Shows customer ID, name, and email
- Loading state and error handling
- Hover effects on cards

### Products Component
- Displays all products in a responsive grid layout
- Shows product ID, name, price, and quantity
- Stock status indicator (In Stock / Out of Stock)
- Color-coded stock status badges
- Loading state and error handling

### Bills Component
- Interactive bill viewer with ID input
- Displays bill header with ID and date
- Shows customer information
- Lists all product items in a table
- Calculates and displays total amount
- Loading state and error handling

## 🔧 Development

### Running the Application

1. **Start Backend Services** (in order):
   ```bash
   # Terminal 1 - Discovery Service
   cd discovery-service
   .\mvnw.cmd spring-boot:run

   # Terminal 2 - Customer Service
   cd customer-service
   .\mvnw.cmd spring-boot:run

   # Terminal 3 - Inventory Service
   cd inventory-service
   .\mvnw.cmd spring-boot:run

   # Terminal 4 - Billing Service
   cd billing-service
   .\mvnw.cmd spring-boot:run

   # Terminal 5 - Gateway Service
   cd gateway-service
   .\mvnw.cmd spring-boot:run
   ```

2. **Start Frontend**:
   ```bash
   cd microservices-frontend
   npm start
   ```

3. **Access the Application**:
   Open your browser and navigate to [http://localhost:4200](http://localhost:4200)

### Building for Production

```bash
cd microservices-frontend
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🐛 Troubleshooting

### Services Not Loading
- Make sure all backend services are running
- Check that Eureka (Discovery Service) is running on port 8761
- Verify Gateway Service is running on port 8888
- Check browser console for CORS or network errors

### CORS Issues
- The Gateway Service should handle CORS
- If issues persist, check Gateway configuration

### Port Already in Use
- Make sure no other applications are using ports 4200, 8761, 8081, 8082, 8083, or 8888
- Kill any existing processes on these ports

## 📝 Notes

- The application uses Spring Data REST which wraps responses in `_embedded` objects
- All services register with Eureka for service discovery
- The Gateway routes requests to appropriate microservices
- The Billing Service uses Feign clients to fetch customer and product data
- All databases are H2 in-memory databases (data is lost on restart)

## 🎯 Sample Data

The services are pre-populated with sample data:

### Customers
- Customer 1: Name and email
- Customer 2: Name and email
- Customer 3: Name and email

### Products
- Multiple products with IDs, names, prices, and quantities

### Bills
- Bill 1: Contains customer and product items
- You can query bills by ID in the Bills page

## 🌐 Useful Links

- **Eureka Dashboard**: [http://localhost:8761](http://localhost:8761)
- **Customer Service**: [http://localhost:8081/customers](http://localhost:8081/customers)
- **Inventory Service**: [http://localhost:8082/products](http://localhost:8082/products)
- **Gateway Service**: [http://localhost:8888](http://localhost:8888)
- **Angular App**: [http://localhost:4200](http://localhost:4200)

---

**Enjoy exploring the Microservices Application! 🎉**

