# Code Snippet Manager

A production-ready Code Snippet Manager built with React, Monaco Editor, Zustand, Tailwind CSS, and Docker. This application allows developers to create, edit, organize, import, export, and manage reusable code snippets efficiently.

---

## Features

### Core Features

- Create new code snippets
- Edit snippets using Monaco Editor (VS Code editor)
- Delete snippets
- Persistent storage using browser localStorage
- Syntax highlighting based on programming language
- Dark and light theme support
- Search snippets by title and content

### GitHub Integration

- Export snippets to GitHub Gist
- Import snippets from GitHub Gist
- Supports GitHub Personal Access Token authentication

### Backup and Restore

- Backup all snippets to JSON file
- Restore snippets from backup file

### Production Features

- Fully containerized with Docker
- Served using Nginx
- Production build optimized
- Environment variable configuration

---

## Tech Stack

### Frontend

- React
- Zustand (state management)
- Monaco Editor
- Tailwind CSS
- Vite

### Backend

- GitHub Gist REST API

### DevOps

- Docker
- Nginx

---

## Project Structure

```text
code-snippet-manager/
│
├── src/
│   ├── components/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
├── .gitignore
└── .env.example
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
VITE_GITHUB_TOKEN=your_github_token
```

This token is used for exporting and importing GitHub Gists.

To generate token:

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Enable scope: `gist`
4. Copy token into `.env`

---

## Running Locally (Development)

### Step 1: Clone repository

```bash
git clone https://github.com/yourusername/code-snippet-manager.git
cd code-snippet-manager
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Run development server

```bash
npm run dev
```

### Step 4: Open browser

```text
http://localhost:5173
```

---

## Production Build (Local)

Build project:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Open:

```text
http://localhost:4173
```

---

## Running with Docker (Recommended)

### Step 1: Install Docker

Download from:

https://www.docker.com/products/docker-desktop/

Verify installation:

```bash
docker --version
```

### Step 2: Build and run container

```bash
docker-compose up --build
```

### Step 3: Access application

Open browser:

```text
http://localhost:3000
```

---

## Docker Commands

Build container:

```bash
docker build -t code-snippet-manager .
```

Run container:

```bash
docker run -p 3000:80 code-snippet-manager
```

Stop container:

```bash
docker stop <container_id>
```

---

## GitHub Gist Usage

### Export snippet

1. Create snippet
2. Select snippet
3. Click Export
4. GitHub Gist opens automatically

### Import snippet

Paste Gist URL like:

```text
https://gist.github.com/username/gistid
```

Click Import.

Snippet appears in sidebar.

---

## Backup and Restore

Backup:

Click Backup button → JSON file downloads.

Restore:

Click Restore → select JSON file.
