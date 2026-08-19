# ThinkBoard

A full-stack note-taking application built with the MERN stack. Create, edit, and manage your notes with a clean, modern UI.

**Live Demo:** [https://think-board-lyart.vercel.app/](https://think-board-lyart.vercel.app/)

![ThinkBoard Preview](https://img.shields.io/badge/ThinkBoard-Notes_app-00FF9D?style=for-the-badge&labelColor=000&color=00FF9D)

---

## Features

- User authentication (Signup / Login) with JWT
- Create, read, update, and delete notes
- Each user sees only their own notes
- Rate limiting with Upstash Redis
- Responsive design with Tailwind CSS + DaisyUI
- Toast notifications for user feedback
- Loading states and error handling

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React, Vite, Tailwind CSS, DaisyUI  |
| Backend  | Node.js, Express, Mongoose          |
| Database | MongoDB Atlas                       |
| Auth     | JWT, bcryptjs                       |
| Hosting  | Vercel (Frontend), Render (Backend) |
| Rate Limit | Upstash Redis                     |

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Upstash Redis account (for rate limiting)

### Installation

```bash
# Clone the repo
git clone https://github.com/Sachin-stha112/Think-Board.git
cd Think-Board

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```
MONGO_URL=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### Run Locally

```bash
# Start backend (from backend/)
npm run dev

# Start frontend (from frontend/)
npm run dev
```

Frontend runs on `http://localhost:5173` and backend on `http://localhost:5001`.

## Project Structure

```
Think-Board/
├── backend/
│   ├── models/
│   │   ├── Note.js
│   │   └── User.js
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   ├── notesController.js
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── rateLimiter.js
│   │   ├── routes/
│   │   │   ├── notesRoutes.js
│   │   │   └── authRoutes.js
│   │   └── server.js
│   └── .env
└── frontend/
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── NoteCard.jsx
        │   ├── NotesNotFound.jsx
        │   └── RateLimitedUI.jsx
        ├── contexts/
        │   └── AuthContext.jsx
        ├── lib/
        │   └── axios.js
        └── pages/
            ├── HomePage.jsx
            ├── CreatePage.jsx
            ├── NoteDetailPage.jsx
            ├── LoginPage.jsx
            └── SignUpPage.jsx
```

## API Endpoints

### Auth

| Method | Endpoint           | Description         | Auth |
| ------ | ------------------ | ------------------- | ---- |
| POST   | `/api/auth/signup` | Register a new user | No   |
| POST   | `/api/auth/login`  | Login               | No   |
| GET    | `/api/auth/me`     | Get current user    | Yes  |

### Notes

| Method | Endpoint           | Description     | Auth |
| ------ | ------------------ | --------------- | ---- |
| GET    | `/api/notes`       | Get all notes   | Yes  |
| GET    | `/api/notes/:id`   | Get a note      | Yes  |
| POST   | `/api/notes`       | Create a note   | Yes  |
| PUT    | `/api/notes/:id`   | Update a note   | Yes  |
| DELETE | `/api/notes/:id`   | Delete a note   | Yes  |

---

Made by [Sachin](https://github.com/Sachin-stha112)
