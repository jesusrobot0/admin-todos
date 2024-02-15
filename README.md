# admin-todos

## Description

## How to Run

Follow these steps to run the project in your local environment:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nextjs-example-project.git
   ```

2. **Install Dependencies:**

   ```bash
   cd nextjs-example-project
   npm install
   ```

3. **Docker Database Lift**

```bash
docker compose up -d
```

4. **Start the Application:**

   ```bash
   npm run dev
   ```

5. Configure the .env.template file
   First, change the name to `.env` and then update the database connection string with the valid credentials.

6. Run the [/api/seed](http://localhost:3000/api/seed) endpoint to populate the local database.

7. **Access the Application:**
   Open your browser and visit [http://localhost:3000](http://localhost:3000).

Done! You should now see the application running in your local environment.

## Prisma commands

```bash
pnpm dlx prisma init
pnpm dlx prisma migrate <name>
pnpm dlx prisma generate
pnpm dlx prisma studio

```
