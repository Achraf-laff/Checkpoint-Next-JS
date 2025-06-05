export async function getServerSideProps() {
    // Simulated fetch (could be from API or database)
    const projects = [
        { id: 1, title: 'FIFA Card App', tech: 'React, CSS' },
        { id: 2, title: 'Sneaker Shop', tech: 'HTML, Bootstrap' },
        { id: 3, title: 'Todo App with Redux', tech: 'Redux, JS' },
    ];

    return {
        props: { projects },
    };
}

export default function Projects({ projects }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>My Projects</h1>
            <ul>
                {projects.map((proj) => (
                    <li key={proj.id}>
                        <strong>{proj.title}</strong> – {proj.tech}
                    </li>
                ))}
            </ul>
        </div>
    );
}
