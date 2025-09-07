export default function Skills() {
    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "FastAPI",
        "Python",
        "PostgreSQL/SQL",
        "C#",
        "Java",
        "C/C++",
        "Unity",
        "TailwindCSS",
        "Docker",
    ];

    return (
        <div className="mt-12 w-full">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 hover:border-teal-500 hover:scale-105 transition cursor-default"
                    >
                        <p className="text-lg font-semibold text-center text-slate-200">{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
