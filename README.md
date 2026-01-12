<div align="center">

# TMS FOUNDATION - VOLUNTEER DASHBOARD 🤝

**Volunteer Dashboard** is a modern volunteer management platform built with **React.js**, **Context API**, and **CSS3**. It enables **efficient volunteer tracking**, **project management**, and **real-time notifications** — designed for non-profit organizations and community engagement.

• [Live Demo](https://tms-foundation-j070u4qyg-harshkushwaha7xs-projects.vercel.app/) • [Portfolio](https://portfolio-harsh7x.vercel.app/) • [GitHub](https://github.com/harshkushwaha7x)

</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0-61dafb?style=flat-square&logo=react" alt="react">
  <img src="https://img.shields.io/badge/Vite-5.4.21-646cff?style=flat-square&logo=vite" alt="vite">
  <img src="https://img.shields.io/badge/Context_API-State_Management-61dafb?style=flat-square" alt="context">
  <img src="https://img.shields.io/badge/version-1.0.0-success?style=flat-square" alt="version" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license" />
</p>

---

## � Overview

**TMS Foundation Volunteer Dashboard** is a comprehensive volunteer management platform enabling organizations to track contributions, manage projects, and engage volunteers efficiently with real-time updates and modern UI.

Built using **React.js**, **Context API**, and **CSS3**, it delivers a fast, responsive, and scalable volunteer management experience.

Core highlights:

* 📊 **Personal Stats**: Track contribution hours, projects, and tasks
* 📁 **Project Management**: Visual progress tracking with deadlines
* ✅ **Task Organization**: Priority-based task management system
* 🔔 **Real-Time Notifications**: Instant updates for assignments and deadlines
* 🌓 **Dark Theme**: Professional dark mode design
* 📱 **Fully Responsive**: Optimized for all devices

---

## � Key Features

### 📊 Dashboard Overview

* Personal contribution statistics with trend indicators
* Visual badges showing progress and growth
* Days active tracking for volunteers
* Color-coded metrics (Teal primary, Amber secondary)

### 📁 Project Management

* Active project cards with progress bars
* Real-time status badges (In Progress, Upcoming, Completed)
* Deadline tracking and team size display
* Animated progress indicators
* "View All" functionality with toast notifications

### ✅ Task Tracking

* Priority-based task organization (High, Medium, Low)
* Interactive checkboxes with status icons
* Due date management and project associations
* Completed, In-Progress, and Pending states
* Task filtering capabilities

### 🔔 Notifications System

* Type-based icons (Success, Warning, Info)
* Read/unread indicators with pulsing animations
* Timestamp tracking for all notifications
* "Mark all read" functionality
* Toast notifications for user feedback

### 🎨 User Interface

* Modern teal and amber color palette
* Glassmorphism effects and smooth animations
* Google Fonts (Inter) professional typography
* Dark theme optimized for eye comfort
* Hover effects and micro-interactions

---

## ⚙️ Tech Stack

### Frontend

* React 18.0 with Hooks
* Context API for State Management
* Vite 5.4.21 (Build Tool)
* CSS3 with CSS Variables
* SVG Icons (Inline)
* Google Fonts (Inter)

### State Management

* Context API Provider/Consumer pattern
* Centralized volunteer data store
* Mock data structure ready for API integration
* Global state for user, projects, tasks, notifications

### Design System

* CSS Variables for theming
* Teal Primary (#0891b2)
* Amber Secondary (#f59e0b)
* Consistent spacing and typography
* Mobile-first responsive design

---

## 🧩 Architecture

```text
tms-foundation/
├── src/
│   ├── components/             # React Components
│   │   ├── Navbar.jsx/css      # Navigation with user profile
│   │   ├── StatsCards.jsx/css  # Volunteer statistics
│   │   ├── Projects.jsx/css    # Project tracking cards
│   │   ├── Tasks.jsx/css       # Task management list
│   │   └── Notifications.jsx/css # Notification feed
│   ├── context/                # State Management
│   │   └── VolunteerContext.jsx # Context API provider
│   ├── App.jsx                 # Main Component
│   ├── App.css                 # App Styles
│   ├── index.css               # Global Design System
│   └── main.jsx                # React Entry Point
│
├── dashboard-standalone.html   # Standalone Demo
├── index.html                  # HTML Template
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧰 Getting Started

### Prerequisites

* Node.js v16+
* npm or yarn

### Installation

```bash
git clone https://github.com/harshkushwaha7x/tms-foundation.git
cd tms-foundation
```

#### Install Dependencies

```bash
npm install
```

#### Run Development Server

```bash
npm run dev

# App runs at: http://localhost:5173
```

#### Build for Production

```bash
npm run build
npm run preview
```

### Quick Demo (No Build Required)

Simply open `dashboard-standalone.html` in your browser for an instant demo without any installation!

---

## 💡 Usage Guide

### Dashboard Navigation

* View personal stats on the main dashboard
* Monitor contribution hours and completed projects
* Track active days as a volunteer
* Access all sections from the navigation bar

### Project Management

* View all active projects with progress bars
* Click "View All" to see complete project list
* Monitor project deadlines and team sizes
* Track project status with visual badges

### Task Management

* View assigned tasks with priority levels
* Mark tasks as completed using checkboxes
* Filter tasks by status (Completed, In-Progress, Pending)
* Track due dates and project associations

### Notifications

* Receive real-time updates for new assignments
* Get deadline reminders and meeting notifications
* Mark notifications as read/unread
* Click "Mark all read" to clear notification badge

### Interactive Features

* Hover over cards for visual feedback
* Click action buttons for toast notifications
* Smooth animations throughout the interface
* Responsive design adapts to your screen size

---

## 🎨 Design Features

* **Color Palette**: Professional teal (#0891b2) and amber (#f59e0b)
* **Typography**: Inter font family for modern readability
* **Animations**: Smooth transitions and hover effects
* **Icons**: Custom SVG icons for all actions
* **Layout**: CSS Grid and Flexbox for responsive design

---

## 📱 Responsive Design

* Mobile (375px+) — Stacked layout, touch-optimized
* Tablet (768px+) — Balanced grid layout
* Desktop (1440px+) — Full dashboard with sidebar

---

## ⚡ Performance

* Vite for lightning-fast development
* Component-based architecture for reusability
* CSS variables for instant theme updates
* Optimized bundle size for production
* Lazy loading ready for API integration

---

## � Future Enhancements

* [ ] Django REST API integration
* [ ] User authentication system
* [ ] Database persistence (PostgreSQL)
* [ ] Real-time WebSocket updates
* [ ] Advanced filtering and search
* [ ] Data visualization with charts
* [ ] Email notification system
* [ ] Export reports functionality

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push & open a Pull Request

---

## 🪪 License

This project is licensed under the **MIT License**.

---

## � Contact

**Harsh Kushwaha** — Developer & Maintainer

* Portfolio: [https://portfolio-harsh7x.vercel.app/](https://portfolio-harsh7x.vercel.app/)
* GitHub: [https://github.com/harshkushwaha7x](https://github.com/harshkushwaha7x)
* LinkedIn: [https://www.linkedin.com/in/harsh-kushwaha-7x/](https://www.linkedin.com/in/harsh-kushwaha-7x/)
* Email: [harshkushwaha4151@gmail.com](mailto:harshkushwaha4151@gmail.com)

---

<div align="center">

**TMS FOUNDATION** – Empowering Volunteers. Building Communities.

Built by **Harsh Kushwaha**

**⭐ If you find this project useful, please consider giving it a star on GitHub!**

</div>

---
