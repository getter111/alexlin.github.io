import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Footer } from "../components/Footer";
import { UpArrow } from "../components/UpArrow";
import Experiences from "./Experiences";
import Projects from "../components/Projects";
// import Skills from "../components/Skills";

export default function Portfolio() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            document.documentElement.style.scrollBehavior = "auto";
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="font-sans bg-slate-900 text-slate-200">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <UpArrow scrollToTop={scrollToTop} showScrollTop={showScrollTop} />
            <Footer />
        </div>
    );
}
