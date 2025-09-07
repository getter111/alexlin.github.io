import readmando from "../icons/readmando.png"
import vrescape from "../icons/vrescape.png";
import matchgoats from "../icons/matchgoats.png";
import sentimentanalysis from "../icons/sentimentanalysis.png";

export default function Projects() {
    const projects = [
        {
            title: "ReadMando",
            summary: "AI-powered Mandarin learning app with customizable stories, vocab lookup, and personalized flashcards.",
            img: readmando,
            link: "https://readmando.netlify.app/",
        },
        {
            title: "VR-Escape-Room",
            summary: "CPSC 4110 VR escape room game built with Unity and C#.",
            img: vrescape,
            link: "https://github.com/getter111/VR-Escape-Room",
        },
        {
            title: "Sentiment Paper Trader",
            summary: "LPL Hackathon project that analyzes the sentiment of a stock ticker from any rWallstreet subreddit.",
            img: sentimentanalysis,
            link: "https://github.com/getter111/sentiment-paper-trader",
        },
        {
            title: "Match Goats",
            summary: "Flashcard matching game.",
            img: matchgoats,
            link: "https://getter111.github.io/MatchGoats/",
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-6 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-indigo-400 text-center mb-12">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 rounded-xl shadow-md border-t-4 border-indigo-400 hover:scale-105 hover:border-teal-500 transition flex flex-col overflow-hidden"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                className="group"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-40 object-cover"
                                />

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-start items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-indigo-300 group-hover:text-teal-500">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-300">{project.summary}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
