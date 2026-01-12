import { createContext, useContext, useState } from 'react';

const VolunteerContext = createContext();

export const useVolunteer = () => {
    const context = useContext(VolunteerContext);
    if (!context) {
        throw new Error('useVolunteer must be used within VolunteerProvider');
    }
    return context;
};

export const VolunteerProvider = ({ children }) => {
    const [user] = useState({
        name: 'Harsh Kushwaha',
        email: 'harshkushwaha4151@gmail.com',
        role: 'Web Development',
        joinedDate: '2026-01-10',
        avatar: 'HK',
        contributionHours: 42,
        projectsCompleted: 3,
        tasksCompleted: 18,
    });

    const [projects] = useState([
        {
            id: 1,
            name: 'Website Redesign',
            status: 'in-progress',
            progress: 65,
            deadline: '2026-01-20',
            description: 'Modernizing the TMS Foundation website with React',
            volunteers: 4,
        },
        {
            id: 2,
            name: 'Volunteer Portal',
            status: 'in-progress',
            progress: 40,
            deadline: '2026-01-30',
            description: 'Building a dashboard for volunteer management',
            volunteers: 3,
        },
        {
            id: 3,
            name: 'Mobile App Development',
            status: 'upcoming',
            progress: 0,
            deadline: '2026-02-15',
            description: 'Creating a mobile app for community engagement',
            volunteers: 2,
        },
    ]);

    const [tasks] = useState([
        {
            id: 1,
            title: 'Implement Dashboard UI',
            project: 'Volunteer Portal',
            status: 'completed',
            priority: 'high',
            dueDate: '2026-01-20',
        },
        {
            id: 2,
            title: 'Setup CORS Configuration',
            project: 'Website Redesign',
            status: 'in-progress',
            priority: 'high',
            dueDate: '2026-01-12',
        },
        {
            id: 3,
            title: 'Integrate Context API',
            project: 'Volunteer Portal',
            status: 'in-progress',
            priority: 'medium',
            dueDate: '2026-01-14',
        },
        {
            id: 4,
            title: 'Write Documentation',
            project: 'Website Redesign',
            status: 'pending',
            priority: 'low',
            dueDate: '2026-01-16',
        },
    ]);

    const [notifications] = useState([
        {
            id: 1,
            type: 'success',
            message: 'Task "Implement Dashboard UI" completed successfully!',
            time: '2 minutes ago',
            read: false,
        },
        {
            id: 2,
            type: 'info',
            message: 'New project "Mobile App Development" assigned to you',
            time: '1 hour ago',
            read: false,
        },
        {
            id: 3,
            type: 'warning',
            message: 'Deadline approaching for "Setup CORS Configuration"',
            time: '3 hours ago',
            read: true,
        },
        {
            id: 4,
            type: 'info',
            message: 'Project meeting scheduled for tomorrow at 10 AM',
            time: '1 day ago',
            read: true,
        },
    ]);

    const value = {
        user,
        projects,
        tasks,
        notifications,
    };

    return (
        <VolunteerContext.Provider value={value}>
            {children}
        </VolunteerContext.Provider>
    );
};
