import './Projects.css';

const Projects = ({ projects }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'in-progress':
                return 'info';
            case 'completed':
                return 'success';
            case 'upcoming':
                return 'warning';
            default:
                return 'info';
        }
    };

    return (
        <div className="projects-section">
            <div className="section-header">
                <h2>Active Projects</h2>
                <button className="btn btn-ghost">View All</button>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={project.id} className="project-card animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="project-header">
                            <div>
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                            <span className={`badge badge-${getStatusColor(project.status)}`}>
                                {project.status.replace('-', ' ')}
                            </span>
                        </div>

                        <div className="project-progress">
                            <div className="progress-info">
                                <span className="progress-label">Progress</span>
                                <span className="progress-value">{project.progress}%</span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: `${project.progress}%`,
                                        background: project.status === 'in-progress'
                                            ? 'linear-gradient(90deg, var(--info), var(--primary))'
                                            : 'linear-gradient(90deg, var(--success), #34d399)'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="project-footer">
                            <div className="project-meta">
                                <div className="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span>{new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                </div>
                                <div className="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span>{project.volunteers} volunteers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
