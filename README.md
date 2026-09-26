# 💪 FitLog

FitLog is a dark, responsive workout library and daily training log built for the B14-A6 assignment.

## ✨ Description

Browse workouts from the FitLog API, open a detailed workout page, add lifts to today's plan, save workouts for later, and track the total exercises, minutes, and calories in your plan.

## 🛠️ Technologies

- Next.js 16
- React 19
- App Router
- Tailwind CSS
- JavaScript
- Lucide React
- React Hot Toast
- LocalStorage
- FitLog REST API

## 🚀 Features

1. Responsive workout library for mobile, tablet, and desktop.
2. Dynamic workout details pages with instructions and workout specifications.
3. Today's Plan with a five-workout limit.
4. Saved workouts with persistent LocalStorage data.
5. Live Plan and Saved counters in the navbar.
6. Sort workouts by duration, calories, or rating.
7. Search workouts by name or muscle group.
8. Mark planned workouts as done and remove them.
9. Loading state and custom 404 page.
10. Toast notifications for workout actions.

## 🔗 API

All workouts:

`https://api.abcz.workers.dev/api/fitlog`

Single workout:

`https://api.abcz.workers.dev/api/fitlog/:id`

## ▶️ Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 🏗️ Production build

```bash
npm run build
npm start
```

## 📦 Assets

Add these files to `src/assets/`:

- `banner.png`
- `footer-logo.png`
- `logo.png`
- `save.png`

The current implementation uses `banner.png`, `logo.png`, and `footer-logo.png`. `save.png` is kept available for the assignment asset set.

## 🚀 Deployment

The project can be deployed to Vercel, Netlify, Cloudflare Pages, or another Next.js-compatible hosting platform.

## 📬 Submission

- Live Link: Add after deployment
- GitHub Repository Link: Add after creating the repository
