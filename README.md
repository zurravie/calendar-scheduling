# Calendar Scheduling Platform

A simple calendar scheduling platform built with Next.js, Auth.js, Nylas, and Tailwind CSS.

## Features

- User authentication
- Calendar integration
- Event management
- Meeting scheduling
- Responsive design

## Tech Stack

- Next.js
- Auth.js
- Nylas API
- Tailwind CSS

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   ```
   # .env.local
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   NYLAS_CLIENT_ID=your_nylas_client_id
   NYLAS_CLIENT_SECRET=your_nylas_client_secret
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open http://localhost:3000 in your browser

## Usage

- Sign in to your account
- Connect your calendar
- Start scheduling events

## Deployment

Deploy to Vercel with:
```
vercel deploy
```