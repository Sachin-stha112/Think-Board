# ThinkBoard - Project Context

## Overview
A MERN stack notes application (MongoDB, Express, React, Node.js). Currently only the Express backend is set up. Frontend folder exists but is empty.

## Tech Stack
- **Runtime:** Node.js v24.18.0
- **Framework:** Express 4.18.2
- **Module System:** ES Modules (`"type": "module"` in package.json)
- **Dev Tool:** Nodemon 3.1.14

## Project Structure
```
ThinkBoard/
  backend/
    src/
      server.js
      routes/
        notesRoutes.js
      controllers/
        notesController.js
    package.json
    node_modules/
  frontend/          (empty)
```

## File Contents

### package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
  "type": "module",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

### src/server.js
```js
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/notes", notesRoutes);
app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
```

### src/routes/notesRoutes.js
```js
import express from "express";
import { getAllNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", (req, res) => {
    res.status(201).json({ message: "Note created successfully!" });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: "Note updated successfully!" });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Note deleted successfully!" });
});

export default router;
```

### src/controllers/notesController.js
```js
export function getAllNotes(req, res) {
    res.status(200).send("You just fetched the notes");
}
export function createNote(req, res) {
    res.status(201).json({ message: "Note created Successfully!" });
}
export function updateNote(req, res) {
    res.status(200).json({ message: "Note updated successfully" });
}
export function deleteNote(req, res) {
    res.status(200).json({ message: "Note deleted successfully" });
}
```

## API Routes
| Method | Endpoint | Description | Status |
|--------|------------|------------------------|----------------|
| GET | /api/notes | Fetch all notes | Stub (no DB) |
| POST | /api/notes | Create a note | Stub (no DB) |
| PUT | /api/notes/:id | Update a note | Stub (no DB) |
| DELETE | /api/notes/:id | Delete a note | Stub (no DB) |

## Issues Fixed So Far
1. **Duplicate `"type"` field in package.json** — had both `"module"` and `"commonjs"`, causing `SyntaxError: Cannot use import statement outside a module`.
2. **Typo running server** — `node sever.js` instead of `node server.js`.
3. **Missing import in server.js** — `notesRoutes` was used but never imported, causing a crash.

## Current State
- Backend runs on port 5001 via `npm run dev`
- Routes are defined but return hardcoded responses (no database connected yet)
- MongoDB/Mongoose is not yet set up
- Frontend is not started yet
- Controller functions `createNote`, `updateNote`, `deleteNote` are exported but not wired up in routes (routes use inline handlers instead)
