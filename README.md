# Marcode-AI

---

## What is Marcode-AI?

**Marcode-AI** is an AI-powered platform that enables users to generate, preview, and manage full-stack web applications by simply describing what they want to build. The platform leverages advanced AI, live sandboxed previews, and a modern dashboard to streamline the process of creating and exploring code projects!

---

## Tech Stack

**Frontend:**
- **Next.js (App + Routing)** - React framework for pages and routing
- **TypeScript** - Type-safe JavaScript for better DX and maintainability
- **Tailwind CSS** - Utility-first CSS framework for rapid UI styling

**Backend:**
- **Next.js API Routes** - Serverless functions for backend logic
- **Prisma (PostgreSQL ORM)** - Database access and modeling layer
- **tRPC** - Type-safe API layer for seamless client-server integration
- **Inngest** - Background jobs and async workflows
- **OpenAI API** - AI code generation from user prompts
- **E2B** - Secure sandbox for live code previews
- **Neon** - Hosted PostgreSQL database

**Authentication:**
- **Clerk** - Authentication and user management

**Deployment:**
- **Vercel** - Hosting and serverless deployment platform

---

## Features

- **AI-powered project creation:** Describe your app, and Marcode-AI generates the code
- **Live sandboxed previews:** Instantly preview generated apps in a secure iframe
- **Project management:** View, organize, and revisit all your generated projects
- **Authentication:** Secure sign-in/sign-up with Clerk
- **Usage tracking:** Free and Pro credit system for AI usage
- **Responsive UI/UX:** Modern, accessible, and dark/light mode

---

## How to Use?

1. **Visit the app:** [https://marcode-ai.vercel.app/](https://marcode-ai.vercel.app/)
2. **Sign up or log in** with Clerk
3. **Describe your project** in the prompt ("Build me a Netflix clone")
4. **Wait for the AI to generate your app**
5. **Preview, copy, or open the generated code** in a live sandbox
6. **Manage your projects** from the dashboard

---

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/marcode-ai.git
cd marcode-ai/marcode
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
DATABASE_URL=...
NEXT_PUBLIC_API_URL="http://localhost:3000"
OPENAI_API_KEY=...
E2B_API_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"
```

### 4. Set up the database
```bash
npx prisma migrate deploy
npx prisma generate
```

### 5. Run the development server
```bash
npm run dev
```

### 6. Run a local inngest server
```bash
npx inngest-cli@latest dev
```

---

## Architecture Highlights

- **AI Handling:** Uses Inngest to coordinate multi-step AI agent workflows for code generation and project setup
- **Sandboxed Execution:** E2B sandboxes run generated code securely and provide live previews via HTTPS
- **Type Safety:** End-to-end type safety with TypeScript, Prisma, and TRPC
- **Modern UI:** Built with shadcn/ui and Tailwind for a polished, accessible experience
- **Usage Limits:** Implements free and pro usage tiers with credit tracking and rate limiting
- **Authentication:** Clerk provides secure, production-ready auth flows

---

## Contributing?

- Pull requests are welcomed! For major changes, please open an issue first to discuss what you would like to change or possible add onto this application.

---

## Contact

For questions or support, open an issue or contact [marcpon8@gmail.com]