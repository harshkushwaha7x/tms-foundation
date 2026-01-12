# TMS Foundation - Volunteer Dashboard

A modern, responsive volunteer dashboard built with React for tracking volunteer activities, projects, and tasks.

**🔗 Live Demo:** https://tms-foundation-j070u4qyg-harshkushwaha7xs-projects.vercel.app/

---

## ✨ Features

### 📊 Dashboard Overview
- **Personal Stats**: Track contribution hours, completed projects, and tasks
- **Trend Indicators**: Visual badges showing progress and growth
- **Activity Timeline**: Days active as a volunteer

### 📁 Project Management
- **Active Projects**: View all ongoing projects with progress tracking
- **Progress Bars**: Visual representation of project completion
- **Status Badges**: Real-time project status (In Progress, Upcoming, Completed)
- **Team Size**: See how many volunteers are on each project

### ✅ Task Tracking
- **Priority Levels**: Tasks organized by High, Medium, and Low priority
- **Due Dates**: Built-in deadline tracking
- **Status Management**: Mark tasks as completed, in-progress, or pending
- **Project Association**: Link tasks to specific projects

### 🔔 Notifications
- **Real-time Updates**: Stay informed about task completions and new assignments
- **Read/Unread States**: Visual indicators with pulsing animations
- **Type-based Icons**: Different icons for success, info, and warning notifications
- **Toast Messages**: Interactive feedback for user actions

### 🎨 Design & UX
- **Modern UI**: Clean, professional interface with teal and amber color scheme
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Smooth Animations**: Hover effects, progress bar animations, and transitions
- **Dark Theme**: Eye-friendly dark color palette

---

## 🛠️ Technology Stack

- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Context API** - State management for global data
- **CSS3** - Custom styling with CSS variables
- **SVG Icons** - Scalable vector graphics
- **Google Fonts (Inter)** - Professional typography

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshkushwaha7x/tms-foundation.git
   cd tms-foundation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📂 Project Structure

```
tms-foundation/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css        # Navigation with user profile
│   │   ├── StatsCards.jsx/css    # Volunteer statistics
│   │   ├── Projects.jsx/css      # Project tracking cards
│   │   ├── Tasks.jsx/css         # Task management list
│   │   └── Notifications.jsx/css # Notification feed
│   ├── context/
│   │   └── VolunteerContext.jsx  # Context API state management
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # App-level styles
│   ├── index.css                 # Global styles & design system
│   └── main.jsx                  # React entry point
├── dashboard-standalone.html     # Standalone demo (no build needed)
├── index.html                    # HTML template
├── package.json                  # Dependencies & scripts
└── vite.config.js               # Vite configuration
```

---

## 🎯 Key Architectural Decisions

### Component Organization
Each component has its own CSS file for better modularity and maintainability.

### State Management
Context API is used for centralized state management, providing global access to:
- User profile data
- Projects list
- Tasks list
- Notifications

### Design System
CSS variables ensure consistent theming throughout the application:
- Primary: Teal (#0891b2)
- Secondary: Amber (#f59e0b)
- Success: Green (#10b981)
- Info: Blue (#3b82f6)

### Responsive Design
Built with a mobile-first approach using Flexbox and CSS Grid for adaptive layouts.

---

## 🔄 Future Enhancements

- [ ] Django REST API integration
- [ ] User authentication system
- [ ] Database persistence
- [ ] Real-time WebSocket updates
- [ ] Advanced filtering and search
- [ ] Data visualization with charts
- [ ] Export reports functionality
- [ ] Email notifications

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard](https://via.placeholder.com/800x450?text=Dashboard+Screenshot)

### Mobile View
![Mobile](https://via.placeholder.com/375x667?text=Mobile+View)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Harsh Kushwaha**
- Email: harshkushwaha4151@gmail.com
- GitHub: [@harshkushwaha7x](https://github.com/harshkushwaha7x)

---

## 🙏 Acknowledgments

- Built for TMS Foundation
- Inspired by modern volunteer management platforms
- UI design influenced by contemporary dashboard trends

---

**⭐ If you find this project useful, please consider giving it a star on GitHub!**
