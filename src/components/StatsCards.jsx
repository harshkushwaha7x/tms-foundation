import './StatsCards.css';

const StatsCards = ({ user }) => {
    const stats = [
        {
            label: 'Contribution Hours',
            value: user.contributionHours,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            color: 'primary',
            trend: '+12%',
        },
        {
            label: 'Projects Completed',
            value: user.projectsCompleted,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
            color: 'success',
            trend: '+1',
        },
        {
            label: 'Tasks Completed',
            value: user.tasksCompleted,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            ),
            color: 'info',
            trend: '+5',
        },
        {
            label: 'Days Active',
            value: Math.floor((new Date() - new Date(user.joinedDate)) / (1000 * 60 * 60 * 24)),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            ),
            color: 'warning',
            trend: 'New',
        },
    ];

    return (
        <div className="stats-grid">
            {stats.map((stat, index) => (
                <div key={index} className={`stat-card stat-${stat.color} animate-fadeIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="stat-header">
                        <div className={`stat-icon icon-${stat.color}`}>
                            {stat.icon}
                        </div>
                        <span className={`stat-trend badge badge-${stat.color}`}>
                            {stat.trend}
                        </span>
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-value">{stat.value}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
