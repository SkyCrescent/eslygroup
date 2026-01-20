"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../public/logo.jpeg";
import { useRouter } from "next/navigation";

export default function Home() {
    const [show, setShow] = useState(false);
    const router = useRouter();

    // Apparition progressive
    useEffect(() => {
        const t = setTimeout(() => setShow(true), 400);
        return () => clearTimeout(t);
    }, []);

    // Spinner 10 secondes puis redirection
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/home");
        }, 5000); // 10 secondes

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="relative min-h-screen bg-[url('/étapes_de_conception.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/80 to-black/70" />

            {/* Ligne décorative */}
            <div className="absolute left-8 top-0 h-full w-[3px] bg-sky-400 animate-pulse hidden md:block" />

            {/* Contenu */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center text-white">

                {/* Logo */}
                <div
                    className={`transition-all duration-1000 ${
                        show ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                >
                    <Image
                        src={logo}
                        alt="Logo entreprise"
                        priority
                        className="w-40 sm:w-48 md:w-60 mx-auto"
                    />
                </div>

                {/* Titre */}
                <h1
                    className={`mt-8 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-wide text-sky-400 transition-all duration-1000 delay-300 ${
                        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    BÂTIR L’AVENIR
                </h1>

                {/* Slogan */}
                <p
                    className={`mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-300 transition-all duration-1000 delay-500 ${
                        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    Construction • Génie civil • Rénovation • Expertise technique
                </p>

                {/* Spinner */}
                <div className="relative mt-12 h-20 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                        }}
                        className="w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-sky-400 rounded-full"
                    />
                </div>

                {/* Texte loading (optionnel mais propre) */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400 tracking-wide">
                    Chargement…
                </p>
            </div>
        </div>
    );
}
