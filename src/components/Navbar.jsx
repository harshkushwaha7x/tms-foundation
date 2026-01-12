import './Navbar.css';

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-brand">
                    <div className="logo">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                            <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                                    <stop offset="0%" stopColor="#0891b2" />
                                    <stop offset="100%" stopColor="#f59e0b" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="brand-text">
                        <h1>TMS Foundation</h1>
                        <p>Volunteer Dashboard</p>
                    </div>
                </div>

                <div className="navbar-actions">
                    <button className="btn btn-ghost notification-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        <span className="notification-badge">3</span>
                    </button>

                    <div className="user-profile">
                        <div className="avatar">{user.avatar}</div>
                        <div className="user-info">
                            <span className="user-name">{user.name}</span>
                            <span className="user-role">{user.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
