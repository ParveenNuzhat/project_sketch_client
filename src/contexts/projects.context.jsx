import { createContext, useEffect, useState } from 'react';
import fakeProjects from '../fake-data/projects.json';

export const ProjectsContext = createContext({
    projects: [],
});

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const value = { projects, setProjects };

    useEffect(() => {
        setProjects(fakeProjects);
    }, []);

    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
}