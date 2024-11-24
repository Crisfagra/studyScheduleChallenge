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
   Make a file .env in the project root with following:
      DB_HOST=localhost
      DB_PORT=5432
      DB_USERNAME=data_base_user
      DB_PASSWORD=data_base_password
      DB_NAME=data_base_name
      JWT_SECRET=jwt_secret

   ```
4. Copy file serviceAccountKey.json inside ./src/config/
5. Compile
   ```bash
   npm run build
   ```
6. Docker init
   ```bash
   docker-compose up
   ```
7. Correr migraciones
   ```bash
   npm run migration:run
   ```
8. Iniciar el servidor
   ```bash
   npm start
   ```

# How to do a request

1. Generate custom token
   ```bash
   node generateCustomToken.js
   ```
2. Make a POST request with the previous token generated in the body like a json.
   ```bash
      curl --location 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=YOUR_FIREBASE_API_KEY' \
      --header 'Content-Type: application/json' \
      --data '{
         "token": "generateCustomToken": true
      }'
   ```

3. Do POST request from Postman o Curl to http://localhost:3000/api/schedule with an authentication Bearer
   ```bash
      curl --location 'http://localhost:3000/api/schedule' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer YourTokenFromPreviousRequest' \
      --data '{
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
      }'
   ```
# How to run unit test
   ```bash
   npm run test
   ```
