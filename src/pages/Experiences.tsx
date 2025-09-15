import itron from "../icons/itron.jpg"
import nvidia from "../icons/nvidia.jpg"
import siemens from "../icons/siemens.jpg"

export default function Experiences() {
    const experiences = [
        {
            title: "Capstone Software Engineer",
            company: "NVIDIA",
            logo: nvidia,
            date: "Aug 2025 – Present",
            location: "Clemson, SC",
            bullets: [
                "Industry-sponsored capstone project focused on fine-tuning and evaluating LLM/SLMs for agentic workflows"
            ],
        },
        {
            title: "Software Engineer Co-op",
            company: "Itron, Inc.",
            logo: itron,
            date: "Aug 2024 – Dec 2024",
            location: "Oconee County, SC",
            bullets: [
                "Created a website for engineers and manufacturing staff to view component specs and configuration metadata for meter builds, reducing lookup time on the factory floor",
                "Redesigned backend API search functionality, standardizing hardware classification lookups by product and item number, which improved accuracy and consistency across teams",
                "Debugged 10+ front-end issues using Azure devops to rapidly iterate",
            ],
        },
        {
            title: "Software Engineer Intern",
            company: "Siemens Healthineers",
            logo: siemens,
            date: "Jun 2024 - Aug 2024",
            location: "Tarrytown, NY",
            bullets: [
                "Automated lab test ratio balancing, reducing manual calculation time and improving accuracy of workflow scheduling",
                "Collaborated with cross-functional teams to build a 10 page dashboard, analyzing site-level throughput, module performance, and system bottlenecks",
            ],
        },
        {
            title: "Software Engineer Co-op",
            company: "Itron, Inc.",
            logo: itron,
            date: "Jan 2024 – May 2024",
            location: "Oconee County, SC",
            bullets: [
                "Automated nightly sync of 50k+ meter spec records across 12 databases, ensuring the backend catalog stayed up-to-date, reducing risk of field failures",
                "Developed a dynamic prefix generator that automated customer meter labeling in the internal ordering system, improving scalability and workflow efficiency",
            ],
        },
    ];

    return (
        <section id="experience" className="min-h-screen py-20 bg-slate-900 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-5xl font-bold text-indigo-400 text-center mb-16">
                    Experience
                </h2>

                <div className="flex flex-col gap-8 w-full">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800 p-6 rounded-xl border-l-4 border-teal-500 hover:scale-[1.02] hover:border-indigo-400 transition flex flex-col md:flex-row md:items-center md:gap-6"
                        >
                            <img
                                src={exp.logo}
                                alt={exp.company}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-md mb-4 md:mb-0"
                            />

                            <div className="flex-1 flex flex-col">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <h3 className="text-2xl font-semibold text-indigo-300">
                                        {exp.title} – {exp.company}
                                    </h3>
                                    
                                    <span className="text-slate-400 text-lg mt-2 md:mt-0">
                                        {exp.date} | {exp.location}
                                    </span>
                                </div>

                                <ul className="list-disc list-inside text-slate-300 space-y-2">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx}>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
