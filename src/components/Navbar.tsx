import { FaBars, FaTimes } from "react-icons/fa";

type NavbarProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
};

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
];

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
    return(
        <nav className="fixed top-0 left-0 w-full bg-slate-800 shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-400">
                    <a href="#hero" className="hover:text-teal-400 transition">Alex Lin </a>
                </h1>

                <ul className="hidden md:flex gap-6 text-lg font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-teal-400 transition"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 汉堡包 */}
                <button
                    className="md:hidden text-2xl text-indigo-400 focus:outline-none cursor-pointer hover:text-teal-400 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
                <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-teal-400 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </nav>
    )
}
