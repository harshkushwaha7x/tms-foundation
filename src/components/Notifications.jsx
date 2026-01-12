import './Notifications.css';

const Notifications = ({ notifications }) => {
    const getNotificationIcon = (type) => {
        switch (type) {
            case 'success':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                );
            default:
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                );
        }
    };

    return (
        <div className="notifications-section">
            <div className="section-header">
                <h2>Recent Notifications</h2>
                <button className="btn btn-ghost">Mark all read</button>
            </div>

            <div className="notifications-list">
                {notifications.map((notification, index) => (
                    <div
                        key={notification.id}
                        className={`notification-item notification-${notification.type} ${notification.read ? 'read' : 'unread'} animate-fadeIn`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className={`notification-icon icon-${notification.type}`}>
                            {getNotificationIcon(notification.type)}
                        </div>

                        <div className="notification-content">
                            <p className="notification-message">{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                        </div>

                        {!notification.read && <div className="notification-dot" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
