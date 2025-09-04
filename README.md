# Student Management System

A **Full-Stack Student Management Application** built with **Angular (Frontend)** and **Spring Boot (Backend)**.  
This project demonstrates CRUD operations (Create, Read, Update, Delete) on student records with a modern UI and REST API integration.
### Frontend (Angular)
- Angular 16
- TypeScript
- HTML / CSS / Bootstrap
- REST API integration

### Backend (Spring Boot)
- Java 17+
- Spring Boot
- Spring Data JPA / Hibernate
- MySQL Database (or H2 for testing)
- Maven


## 📂 Project Structure
Student-Management-System/
│
├── Backend (Spring Boot)/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/StudentManagemant/
│   │   │   │       ├── ProjectOfStudentManagementBackendApplication.java
│   │   │   │       ├── controller/
│   │   │   │       │   └── StudentController.java
│   │   │   │       ├── service/
│   │   │   │       │   └── StudentService.java
│   │   │   │       ├── dao/
│   │   │   │       │   └── StudentDao.java
│   │   │   │       ├── entity/
│   │   │   │       │   └── Student.java
│   │   │   │       └── model/
│   │   │   │           └── StudentDTO.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── Frontend (Angular)/
│   ├── src/
│   │   ├── app/
│   │   │   ├── student.service.ts
│   │   │   ├── showstudents/
│   │   │   │   ├── showstudents.component.ts
│   │   │   │   ├── showstudents.component.html
│   │   │   │   └── showstudents.component.css
│   │   │   ├── addstudent/
│   │   │   │   ├── addstudent.component.ts
│   │   │   │   ├── addstudent.component.html
│   │   │   │   └── addstudent.component.css
│   │   │   ├── editstudent/
│   │   │   │   ├── editstudent.component.ts
│   │   │   │   ├── editstudent.component.html
│   │   │   │   └── editstudent.component.css
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.css
│   │   │   ├── app.module.ts
│   │   │   └── app-routing.module.ts
│   │   ├── assets/
│   │   ├── environments/
│   │   └── index.html
│   ├── package.json
│   └── angular.json
│
└── README.md              



