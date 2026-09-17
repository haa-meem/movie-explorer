# 🎬 Movie Explorer

Movie Explorer is a simple movie and TV show browsing application built with React. It uses the TVMaze API to display shows, search for movies and TV shows, and view detailed information about each show.

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://movie-explorer-rho-topaz.vercel.app/)

## 📂 GitHub Repository

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge)](https://github.com/haa-meem/movie-explorer)

## ✨ Features

- Responsive navigation bar
- Home page with movie-themed hero section
- Browse movies and TV shows
- Search for movies and TV shows
- Clear search results
- Movie cards with:
  - Poster
  - Title
  - Release date
  - Rating

- Movie details modal
- Movie summary, genres, status, rating, and release date
- Missing image fallback
- Loading state
- Error handling
- Responsive design for mobile, tablet, and desktop

## 🛠️ Technologies Used

- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI
- JavaScript
- TVMaze API
- Vercel

## 🔗 API

This project uses the [TVMaze API](https://www.tvmaze.com/api).

### All Shows

`https://api.tvmaze.com/shows`

### Search Shows

`https://api.tvmaze.com/search/shows?q=:query`

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project folder

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Loading.jsx
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   └── Error.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## 📱 Responsive Design

The application is designed to work across different screen sizes.

- Mobile: 1-column movie grid
- Tablet: 2-column movie grid
- Desktop: 3–4 column movie grid

## 👨‍💻 Author

**Haa-meem Al Hamra**
