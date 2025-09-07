import { FaArrowUp } from "react-icons/fa";

type UpArrowProps = {
    scrollToTop: () => void;
    showScrollTop: boolean;
};

export function UpArrow({ scrollToTop, showScrollTop }: UpArrowProps) { 
    return (
        showScrollTop && (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-indigo-500 text-white p-3 rounded-full hover:bg-teal-500 cursor-pointer transition"
        >
            <FaArrowUp />
        </button>
        )
    );
}
