# Chat with PDF using OpenAI SaaS Application

This repository contains the code for a SaaS application that allows users to chat with PDFs using OpenAI's GPT. The application leverages Next.js for the frontend, Pinecone and Langchain for embedding and indexing, Stripe for payment processing, and Clerk for authentication.

## Features

- **Chat with PDFs**: Upload PDFs and chat with the content using OpenAI's GPT.
- **User Authentication**: Secure user authentication using Clerk.
- **Payment Processing**: Integrated payment system using Stripe.
- **Efficient Searching**: Fast and efficient PDF content searching using Pinecone and Langchain.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **AI/ML**: [OpenAI GPT](https://openai.com/)
- **Embedding and Indexing**: [Pinecone](https://www.pinecone.io/), [Langchain](https://www.langchain.com/)
- **Payment Processing**: [Stripe](https://stripe.com/)
- **Backend**: [Firebase](https://firebase.google.com/)
- **Authentication**: [Clerk](https://clerk.dev/)

## Getting Started

### Add .env

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

CLERK_SECRET_KEY

PINECONE_API_KEY

OPENAI_API

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

STRIPE_API_KEY

STRIPE_WEBHOOK_SECRET

FIREBASE_STORAGE_BUCKET

NEXT_PUBLIC_URL
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aaqifshafi/chat-with-pdf.git
   cd chat-with-pdf
   ```

   ```
   npm i
   npm run dev
   ```
