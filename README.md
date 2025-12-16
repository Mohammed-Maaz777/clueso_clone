# Clueso.io Clone – Full Stack Internship Assignment

This project is a functional clone of **Clueso.io**, built as part of a technical internship assignment.  
The goal was to replicate Clueso’s **core workflows and product experience**, focusing on functionality, system design, and clean engineering practices rather than pixel-perfect UI.

---

## 🚀 Features Implemented

### 1. User Authentication & Onboarding
- User registration and login
- Password hashing using bcrypt
- JWT-based session handling
- Protected dashboard routes
- Logout functionality

### 2. Dashboard Experience
- Centralized dashboard for logged-in users
- Clean and structured UI with clear sections
- Seamless navigation and session handling

### 3. Feedback Collection
- Submit product feedback with title and description
- Store and retrieve feedback entries
- Display all submitted feedback with timestamps

### 4. AI-Powered Insights (Mock Implementation)
- AI summary generated from collected feedback
- Key themes extracted and displayed
- Insights automatically update when new feedback is submitted

> Note: AI insights are implemented as a **mock service**, as permitted in the assignment, to demonstrate system integration and product thinking.

---

## 🧱 Architecture Overview

Frontend (Next.js + Tailwind CSS)
|
| REST APIs
|
Backend (Node.js + Express)


### Frontend
- Built with **Next.js (App Router)**
- Styled using **Tailwind CSS**
- Handles authentication UI, dashboard, feedback submission, and insights display

### Backend
- Built with **Node.js and Express**
- REST APIs for authentication, feedback management, and AI insights
- JWT used for session management

---

## 🗂️ Data Management Approach

- User data and feedback are stored **in memory**
- This was a deliberate choice to:
  - Keep the implementation simple and beginner-friendly
  - Focus on system design and workflows
- In a production setup, this can be easily replaced with a database (MongoDB/PostgreSQL)

This trade-off is documented as part of the assignment’s allowance for partial implementations.

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

---

### Backend Setup
```bash
cd backend
npm install
node index.js

Backend will run on:
http://localhost:5000

Frontend Setup
cd frontend
npm install
npm run dev

Frontend will run on:
http://localhost:3000

Complete User Flow

1. Register a new user
2. Login with credentials
3. Access protected dashboard
4. Submit feedback
5. View all feedback
6. See AI-generated insights
7. Logout

---
Demo Video ( https://youtu.be/HOY8BZfppqM)
A complete demo video showcasing:
End-to-end user flow
Core features
Technical explanation
---

Assumptions & Design Decisions
Feedback and user data stored in memory for simplicity
AI insights mocked to demonstrate integration
UI focused on clarity and usability over pixel perfection
Emphasis placed on functionality, architecture, and clean code

