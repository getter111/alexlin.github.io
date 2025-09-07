export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center min-h-screen py-20 px-6 mx-auto bg-slate-800"
        >
            <h2 className="text-5xl font-bold text-indigo-400 mb-10">
                About Me
            </h2>

            <div className="flex flex-col items-center gap-8">
                <div className="text-2xl text-slate-300 leading-relaxed max-w-3xl">
                    Hello! My name is Alex, and I'm a full-stack engineer who likes building
                    cool applications and bringing ideas to conception. 
                </div>
                
                <div className="text-2xl text-slate-300 leading-relaxed max-w-3xl">
                    I'm graduating from Clemson University with a Bachelor's Degree in December 2025.
                    Outside of computer science, my interests include editing, body-building, and learning Mandarin Chinese. 
                </div>
            </div>
        </section>
    );
}

