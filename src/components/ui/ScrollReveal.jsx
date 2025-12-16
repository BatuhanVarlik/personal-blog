import { motion as Motion } from "framer-motion";

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }) => {
    // Yön ayarlamaları
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            scale: 0.96
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <Motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }} // once: true ile sadece bir kez tetiklenir
            className={className}
        >
            {children}
        </Motion.div>
    );
};

export default ScrollReveal;