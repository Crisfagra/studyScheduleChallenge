# Technical documentation for sort courses api

Service implementation that can create a study schedule that lists courses in an order that JSON input.

# Functionalities

**Create Schedule**: order a course list from a JSON input.

# Requirements

- Node.js >= 14.x
- PostgreSQL >= 12.x
- NPM >= 6.x
- Docker desktop

# Instalation

1. Clone

   ```bash
   git clone https://github.com/crisfagra/studyScheduleChallenge
   cd studyScheduleChallenge

   ```

2. Install dependencies

   ```bash
   npm install

   ```
   
3. Env variables

   ```bash
   Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=usuario_base_de_datos
    DB_PASSWORD=contraseña_base_de_datos
    DB_NAME=nombre_base_de_datos
    JWT_SECRET=jwt_secret

   ```
4. Docker init
   ```bash
   docker-compose up
   ```
5. Correr migraciones
   ```bash
   npm run migration:run
   ```
6. Iniciar el servidor
   ```bash
   npm start
   ```

# How to do a petition

Do petitions from Postman o Curl a http://localhost:3000/api/schedule with a json like this
   ```bash
   {
    "userId": "30ecc27b-9df7-4dd3-b52f-d001e79bd035",
    "courses": [
        {
            "desiredCourse": "PortfolioConstruction",
            "requiredCourse": "PortfolioTheories"
        },
        {
            "desiredCourse": "InvestmentManagement",
            "requiredCourse": "Investment"
        },
        {
            "desiredCourse": "Investment",
            "requiredCourse": "Finance"
        },
        {
            "desiredCourse": "PortfolioTheories",
            "requiredCourse": "Investment"
        },
        {
            "desiredCourse": "InvestmentStyle",
            "requiredCourse": "InvestmentManagement"
        }
      ]
   }
   ```
