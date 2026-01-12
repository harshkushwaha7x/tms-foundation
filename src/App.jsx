import { VolunteerProvider, useVolunteer } from './context/VolunteerContext';
import Navbar from './components/Navbar';
import StatsCards from './components/StatsCards';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Notifications from './components/Notifications';
import './App.css';

function DashboardContent() {
    const { user, projects, tasks, notifications } = useVolunteer();

    return (
        <div className="app">
            <Navbar user={user} />

            <main className="main-content">
                <div className="container">
                    <div className="welcome-section">
                        <h1 className="welcome-title">
                            Welcome back, <span className="gradient-text">{user.name.split(' ')[0]}</span>! 👋
                        </h1>
                        <p className="welcome-subtitle">
                            Here's what's happening with your volunteer work today
                        </p>
                    </div>

                    <StatsCards user={user} />

                    <div className="dashboard-grid">
                        <div className="main-section">
                            <Projects projects={projects} />
                            <Tasks tasks={tasks} />
                        </div>

                        <aside className="sidebar">
                            <Notifications notifications={notifications} />
                        </aside>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2026 TMS Foundation. Volunteer Dashboard</p>
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <VolunteerProvider>
            <DashboardContent />
        </VolunteerProvider>
    );
}

export default App;
