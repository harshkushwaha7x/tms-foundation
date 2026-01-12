import './Tasks.css';

const Tasks = ({ tasks }) => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'danger';
            case 'medium':
                return 'warning';
            case 'low':
                return 'info';
            default:
                return 'info';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                );
            case 'in-progress':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                );
            default:
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                );
        }
    };

    return (
        <div className="tasks-section">
            <div className="section-header">
                <h2>My Tasks</h2>
                <button className="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New Task
                </button>
            </div>

            <div className="tasks-list">
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        className={`task-item task-${task.status} animate-fadeIn`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className="task-checkbox">
                            <input
                                type="checkbox"
                                checked={task.status === 'completed'}
                                readOnly
                            />
                            <span className="checkmark">{getStatusIcon(task.status)}</span>
                        </div>

                        <div className="task-content">
                            <h4 className="task-title">{task.title}</h4>
                            <div className="task-meta">
                                <span className="task-project">{task.project}</span>
                                <span className="task-date">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </span>
                            </div>
                        </div>

                        <span className={`badge badge-${getPriorityColor(task.priority)}`}>
                            {task.priority}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
