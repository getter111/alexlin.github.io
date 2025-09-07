import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

export default function Hero() {

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-slate-900"
        >
            <h1 className="text-5xl md:text-7xl font-bold text-indigo-400 mb-6">
                Alex Lin
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl">
                Software Engineer • Full-Stack Developer • Computer Science Student
            </p>

            <div className="mt-8 flex gap-6">
                <a
                    href="https://github.com/getter111"
                    target="_blank"
                    className="text-slate-200 hover:text-teal-400 transition text-5xl"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/alexylin/"
                    target="_blank"
                    className="text-slate-200 hover:text-teal-400 transition text-5xl"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="mailto:alexlin7211@gmail.com"
                    target="_blank"
                    className="text-slate-200 hover:text-teal-400 transition text-5xl"
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    )
}
