# COC Buy and Sell Marketplace

A secure platform for buying and selling Clash of Clans accounts.

## Features

- User authentication and authorization
- Account listings with detailed information
- Secure messaging system between buyers and sellers
- Account verification system
- Search and filter functionality
- Responsive design for mobile and desktop

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Then fill in your environment variables in the `.env` file.

4. Set up the database:
```bash
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14 (React framework)
- Prisma (Database ORM)
- NextAuth.js (Authentication)
- Tailwind CSS (Styling)
- TypeScript
- PostgreSQL (Database)

## Security Notice

This platform is designed to facilitate secure transactions between buyers and sellers. However, please note that:
- We do not store any Supercell account credentials
- All transactions should follow Supercell's Terms of Service
- Users are responsible for verifying account ownership
- Use secure payment methods for transactions 