# 💪 FitLog --- Workout Library

>Live Link: https://jhfitlog.vercel.app/
> A modern workout management web application built with **Next.js** to
> help users discover, save, plan, and track their daily workouts.

## 🌐 Live Demo

-   🚀 **Live Website:** <https://fit-log-six-beta.vercel.app>
-   💻 **GitHub Repository:**
    https://github.com/sabbirhossain-dev/Fit-Log

------------------------------------------------------------------------

## 📖 About The Project

**FitLog** is a responsive workout management web application designed
to provide a simple and focused workout experience.

Users can explore a collection of exercises, view detailed workout
information, save workouts for later, and create a personalized daily
workout plan.

The application uses a clean **dark-themed gym interface** with
responsive layouts for mobile, tablet, and desktop devices.

------------------------------------------------------------------------

## ✨ Features

### 🏋️ 1. Workout Library

-   Browse workouts from the FitLog API.
-   View important workout information including:
    -   Workout image
    -   Workout name
    -   Muscle groups
    -   Equipment
    -   Duration
    -   Calories
    -   Rating
-   Responsive workout grid layout.

### 📋 2. Today's Workout Plan

-   Add workouts to today's workout plan.
-   Maximum **5 workouts** can be added to the plan.
-   View all planned workouts from the **My Plan** page.
-   Remove workouts from the plan.
-   Mark completed workouts as **Done**.
-   Workout statistics update automatically.

### 💾 3. Save Workouts

-   Save favorite workouts for later.
-   View saved workouts from the **Saved** section.
-   Remove workouts from saved items.
-   Saved workout count is displayed in the navbar.

### 🔎 4. Workout Details

Each workout has a dedicated details page containing:

-   Description
-   Muscle groups
-   Equipment
-   Difficulty
-   Sets & reps
-   Duration
-   Calories
-   Rating
-   Step-by-step instructions

Users can also add the workout to their daily plan or save it for later.

### 📊 5. My Plan & Workout Tracking

The **My Plan** page allows users to manage and track their selected
workouts.

Users can:

-   View total exercises
-   Calculate total workout duration
-   Calculate total calories
-   Sort workouts by:
    -   Duration
    -   Calories
    -   Rating
-   Mark workouts as completed
-   Remove workouts from the plan

### 📱 6. Fully Responsive

FitLog is designed to work smoothly across:

-   📱 Mobile
-   📲 Tablet
-   💻 Desktop

Responsive layouts are implemented for the navbar, hero section, workout
cards, details page, and My Plan page.

### 🔔 7. Toast Notifications

Users receive instant feedback for important actions such as:

-   Adding a workout
-   Saving a workout
-   Selecting a duplicate workout
-   Removing a workout
-   Completing a workout

------------------------------------------------------------------------

## 🛠️ Technologies Used

  Technology           Purpose
  -------------------- -----------------------------------------
  **Next.js**          React framework and application routing
  **React**            Building reusable UI components
  **TypeScript**       Type-safe development
  **Tailwind CSS**     Styling and responsive design
  **DaisyUI**          UI components
  **Context API**      Global state management
  **React Icons**      Interface icons
  **React Toastify**   Toast notifications
  **Vercel**           Deployment

------------------------------------------------------------------------

## 🧠 What I Learned

While building FitLog, I worked with several important concepts:

-   Next.js App Router
-   Server and Client Components
-   Dynamic Routes
-   API data fetching
-   TypeScript with React
-   Context API
-   Global state management
-   Local Storage
-   Responsive design with Tailwind CSS
-   DaisyUI components
-   Toast notifications
-   Reusable React components
-   Vercel deployment

------------------------------------------------------------------------

## 📁 Project Folder Structure

```text
Assignment-06
│
├── .next/
├── node_modules/
│
├── src/
│   ├── app/
│   │   ├── exercise/
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   │
│   │   ├── my-plan/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.jsx
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   └── page.jsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── footer/
│   │   │   └── page.jsx
│   │   ├── library/
│   │   │   └── page.jsx
│   │   ├── library-card/
│   │   │   └── page.jsx
│   │   ├── my-plan/
│   │   │   └── page.jsx
│   │   ├── navbar/
│   │   │   └── page.jsx
│   │   ├── plan-card/
│   │   │   └── page.jsx
│   │   ├── toast-provider/
│   │   │   └── page.jsx
│   │   └── workout-actions/
│   │
│   └── context/
│       └── page.jsx
│
├── .gitignore
├── ASSETS-NOTE.md
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md


------------------------------------------------------------------------


## 🎯 Project Goal

The main goal of FitLog is to create a simple workout management
experience where users can:

> **Discover → Explore → Save → Plan → Complete**

This project also helped me practice building a complete **Next.js
application** with API integration, global state management, responsive
UI, and deployment.

------------------------------------------------------------------------

**BY: Junayed Hasan**

-   🎓 CSE Student --- Bangladesh University of Business & Technology
    (BUBT)
-   📞 01789042515
-   📧 <junayedhasan302@gmail.com>
-   🆔 WEB14-0687

