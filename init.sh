#!/bin/bash

# Install dependencies
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env file. Please update it with your database credentials."
fi

# Initialize Prisma
npx prisma generate
npx prisma db push

# Build the project
npm run build

echo "Setup complete! You can now run 'npm run dev' to start the development server." 