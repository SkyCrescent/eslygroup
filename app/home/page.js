"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Building2,
    Briefcase,
    Layers,
    Mail,
    Phone,
    MapPin
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../public/logo.jpeg";
import equip1 from "../../public/chantier-photo.jpg";
import equip2 from "../../public/chargeur.jpg";
import equip4 from "../../public/1752251352.jpg";

import inves from "../../public/1PC_BG-Secteur-dintervention.jpeg";

import real1 from "../../public/WhatsApp Image 2026-01-12 at 02.57.19.jpeg";
import real2 from "../../public/WhatsApp Image 2026-01-12 at 02.57.20.jpeg";
import real3 from "../../public/WhatsApp Image 2026-01-12 at 02.59.00.jpeg";
import real4 from "../../public/WhatsApp Image 2026-01-12 at 02.59.31.jpeg";
import real5 from "../../public/WhatsApp Image 2026-01-12 at 02.59.58.jpeg";
import real6 from "../../public/WhatsApp Image 2026-01-12 at 03.05.09.jpeg";



import humainImg from "../../public/1752251352.jpg";
import techniqueImg from "../../public/Memoire-technique-batiment-1-scaled.jpg";
import logistiqueImg from "../../public/carrieres-logistique.jpg";

export default function Home() {
    const [showHero, setShowHero] = useState(false);
    const [notConnection,SetNotConnection ] = useState(false)
    useEffect(() => {
        setTimeout(() => setShowHero(true), 300);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Regex : lettres, chiffres, espace, @ . , ;
        const regex = /^[a-zA-Z0-9@.,; ]*$/;
        if (regex.test(value)) {
            setForm({ ...form, [name]: value });
        }
    };


    const handleSubmit = async () => {
        // Reset erreurs
        setErrors({ name: false, email: false, subject: false, message: false, offline: false });

        // Vérifier connexion Internet
        if (!navigator.onLine) {
            setErrors(prev => ({ ...prev, offline: true }));
            return;
        }

        // Validation frontend
        if (!form.name || !form.email || !form.subject || !form.message) {
            setErrors(prev => ({
                ...prev,
                name: !form.name,
                email: !form.email,
                subject: !form.subject,
                message: !form.message,
            }));
            return;
        }

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Erreur serveur :", data);
                return;
            }

            // succès
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("Erreur réseau :", err);
            setErrors(prev => ({ ...prev, offline: true }));
        }
    };


    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
        offline: false, // <-- nouvelle propriété
    });


    return (
        <div className="bg-slate-950 text-white scroll-smooth">

            {/* ================= NAVBAR ================= */}
            <nav className="fixed top-0 z-50 w-full bg-slate-900/80 backdrop-blur border-b border-sky-400/30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="Logo" className="w-10"/>
                        <span className="font-bold text-sky-400 hidden md:block">
              ESLY GROUP
            </span>
                    </div>

                    <ul className="hidden md:flex gap-6 text-sm font-semibold">
                        <li><a href="#presentation">Présentation</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#realisations">Réalisations</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <ul className="flex md:hidden gap-5 text-sky-400">
                        <a href="#presentation"><Building2 size={20}/></a>
                        <a href="#services"><Briefcase size={20}/></a>
                        <a href="#realisations"><Layers size={20}/></a>
                        <a href="#contact"><Mail size={20}/></a>
                    </ul>
                </div>
            </nav>

            {/* ================= HERO ================= */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{backgroundImage: "url('../../étapes_de_conception.jpg')"}}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/80 to-black/70"/>

                {/* Ligne structure BTP */}
                <div className="absolute left-8 top-0 h-full w-[3px] bg-sky-400 animate-pulse hidden md:block"/>

                {/*<div className="absolute inset-0 bg-black/70"/>*/}

                <motion.div
                    initial="hidden"
                    animate={showHero ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="relative z-10 text-center px-6"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-sky-400">
                        BÂTIR L’AVENIR
                    </h1>
                    <p className="mt-4  text-white">
                        Télécom • Génie civil • Maintenance • Ingénierie
                    </p>
                </motion.div>
            </section>

            {/* ================= ZONE STICKY ================= */}
            <section className="scroll-mt-15 mt-15 relative h-auto">
                <div className=" top-0 h-screen flex items-center bg-slate-950">
                    <motion.section
                        id="presentation"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}
                        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
                    >
                        <Image src={logo} alt="Logo" className="w-72 mx-auto"/>
                        <div>
                            <h2 className="text-3xl font-bold text-sky-400 mb-6">
                                Présentation de l’entreprise
                            </h2>
                            <p className="text-slate-300 leading-relaxed">
                                <strong className="text-blue-400"> ESLY GROUP</strong> répond aux besoins croissant en
                                matiere des installations,fourniture
                                d'équipement et prestation de services,d'exploitation et de maintenance des reseaux
                                télécom,informatique en transmission faisceaux hertzienne,radio communication .
                                <br/>
                                <strong className="text-blue-400"> ESLY GROUP</strong> est leader dans la mise en place
                                et la maintenance des nouceaux systems de
                                détection incendie.
                            </p>
                        </div>


                        <div
                            className="w-full md:w-[120%] lg:w-[150%] mx-0 md:mx-20 lg:mx-40 max-w-7xl min-h-[220px] md:min-h-[360px]">
                            {/*<h2 className="text-3xl font-bold text-sky-400 mb-6">*/}
                            {/*    Travaux en hauteurs*/}
                            {/*</h2>*/}

                            <p className="text-slate-300 leading-relaxed mb-4">
                                Son bureau d'etudes integre et son equipe d'ingenieurs
                                lui permettent de proposer a ses clients une offre clé
                                en main,innovante et sur-mesure.

                            </p>

                            <p className="text-slate-300 leading-relaxed mb-4">
                                Son bureau d'etudes integre et son equipe d'ingenieurs lui permettnet de proposer a ses
                                clients
                                une offre clé en main,innovante et sur-mesure.

                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                <strong className="text-blue-400"> ESLY GROUP</strong> est avant tout specialise dans la
                                maintenance industreille telecom GSM tranmission
                                et electronique .

                            </p>
                        </div>

                    </motion.section>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <motion.section
                id="services"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                // className="scroll-mt-20 py-24 px-6 w-6xl mx-auto grid gap-12 md:grid-cols-2"
                className="scroll-mt-15 py-16 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"

            >
                <div>
                    <h2 className="text-3xl font-bold  text-sky-400 mb-6">
                        Nos techniciens effectuent
                    </h2>
                    <ul className="space-y-3 text-slate-300 ">
                        <li>Mise en service des matériels télécom</li>
                        <li>Maintenance préventive</li>
                        <li>Maintenance corrective</li>
                        <li>Des études de rétro fit</li>
                        <li>De la conception,fabrication et mise en route d'installations électrique avec schéma</li>
                        {/*<li>Maintenance corrective</li>*/}
                        <li>Génie civil (construction CIB & métalliques)</li>
                        <li>Montage pylône</li>
                        <li>Pont et chaussé</li>
                    </ul>
                </div>

                <div className="rounded-xl w-full h-full object-cover"
                >
                    <Image
                        src={equip4}
                        alt="Équipement terrain"
                        width={460}
                        height={280}
                        className="rounded-xl h-full w-full object-cover"
                    />
                </div>
            </motion.section>


            {/* ================= SECTEURS ================= */}
            {/*<section id="secteurs" className="py-24 px-6 max-w-7xl mx-auto">*/}
            <motion.section
                id="secteurs"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                className="relative scroll-mt-15 py-24 px-6   bg-slate-900"
            >
                <div
                    //    className="grid md:grid-cols-2 gap-12 mx-auto w-6xl items-center"
                    className="scroll-mt-20 py-16 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"

                >
                    {/* Image gauche */}
                    <div className="h-86 bg-slate-800 rounded-xl flex items-center justify-center">
                        <Image
                            src={inves}
                            alt="Équipement terrain"
                            width={660}
                            height={480}
                            className="rounded-xl h-full w-full object-cover"
                        />
                    </div>

                    {/* Texte droite */}
                    <div>
                        <h2 className="text-3xl font-bold text-sky-400 mb-6">
                            Nos secteurs d’intervention
                        </h2>
                        <ul className="grid grid-cols-2 gap-3 text-slate-300">
                            <li>Télécom & Infrastructure</li>
                            <li>Informatique & NTIC</li>
                            <li>Optimisation</li>
                            <li>Génie civil</li>
                            <li>Topographie</li>
                            <li>Architecture</li>
                            <li>Électricité industriel et bâtiment</li>
                            <li>Vidéo surveillance</li>
                            <li>Environnement</li>
                            <li>Énergies & ressources naturelles</li>
                            <li>Education : enseignement technologique</li>
                        </ul>
                    </div>
                </div>
            </motion.section>


            {/* ================= EQUIPEMENTS ================= */}
            <motion.section
                id="equipements"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                //  className="py-24 px-6 w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
                className=" scroll-mt-15 py-16 mt-12  md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"

            >
                {/* TEXTE */}
                <div>
                    <h2 className="text-3xl font-bold text-sky-400 mb-6">
                        Nos équipements
                    </h2>

                    <p className="text-slate-300 leading-relaxed mb-4">
                        ESY GROUP s'est doté d'instruments de laboratoire de maintenance avec un bon banc d'essai très
                        performant et des appareils de mesures et analyse perfectionnées aux normes internationales.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        ESY GROUP dispose d’équipements modernes et performants
                        permettant d’assurer l’installation, la maintenance et
                        l’exploitation des infrastructures télécoms et de génie civil.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        ESLY GROUP effectue des maintenances préventives en electromécanique,électronique,mécanique.Dans
                        ce cadres ,elle assure les msies en conformité.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Nos matériels respectent les normes de sécurité et garantissent
                        une exécution fiable, rapide et durable sur le terrain.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Sur une demande spécifique d'un client: programmation d'un automate,realisation d'une armoire
                        électrique et mise ne service sur site.
                    </p>
                </div>

                {/* PILE D'IMAGES */}
                <div className="relative h-80 flex items-center justify-center">

                    {/* Image arrière */}
                    <div className="absolute -rotate-6 shadow-lg">
                        <Image
                            src={equip1}
                            alt="Équipement terrain"
                            width={520}
                            height={330}
                            className="rounded-xl h-full  object-cover"
                        />
                    </div>

                    {/* Image avant */}
                    <div className="absolute rotate-6 shadow-xl">
                        <Image
                            src={equip2}
                            alt="Équipement technique"
                            width={520}
                            height={330}
                            className="rounded-xl object-cover"
                        />
                    </div>

                </div>

            </motion.section>

            {/* ================= NOS MOYENS ================= */}
            <motion.section
                id="moyens"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 text-center mb-10 md:mb-16">
                        Nos moyens
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

                        {/* MOYEN HUMAIN */}
                        <motion.div
                            whileHover={{scale: 1.05}}
                            className=" relative rounded-2xl overflow-hidden border border-sky-400/30 cursor-pointer min-h-[260px] md:aspect-square"
                        >
                            <Image
                                src={humainImg}
                                alt="Moyens humains"
                                fill
                                className="object-cover rounded-2xl"
                            />

                            <div
                                className=" absolute inset-0  bg-white/40 md:bg-white/30 flex flex-col justify-center items-center p-4 text-center "
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                                    Moyens humains
                                </h3>
                                <p className="text-black text-sm sm:text-base">
                                    Tous les techniciens sont formés et habilités selon la norme NFC18-510.
                                </p>
                            </div>
                        </motion.div>

                        {/* MOYEN TECHNIQUE */}
                        <motion.div
                            whileHover={{scale: 1.05}}
                            className=" relative rounded-2xl overflow-hidden border border-sky-400/30 cursor-pointer min-h-[260px] md:aspect-square "
                        >
                            <Image
                                src={techniqueImg}
                                alt="Moyens techniques"
                                fill
                                className="object-cover rounded-2xl"
                            />

                            <div
                                className="absolute inset-0 bg-white/40 md:bg-white/30 flex flex-col justify-center items-center p-4 text-center "
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-4">
                                    Moyens techniques
                                </h3>
                                <p className="text-black text-sm sm:text-base">
                                    Parc de matériels de mesure et de contrôle permettant d’anticiper et diagnostiquer
                                    toute défaillance.
                                </p>
                            </div>
                        </motion.div>

                        {/* MOYEN LOGISTIQUE */}
                        <motion.div
                            whileHover={{scale: 1.05}}
                            className="relative rounded-2xl  overflow-hidden border border-sky-400/30 cursor-pointer min-h-[260px] md:aspect-square "
                        >
                            <Image
                                src={logistiqueImg}
                                alt="Moyens logistiques"
                                fill
                                className="object-cover rounded-2xl"
                            />

                            <div
                                className="absolute inset-0 bg-white/40 md:bg-white/30 flex flex-col justify-center items-center p-4 text-center "
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                                    Moyens logistiques
                                </h3>
                                <p className="text-black text-sm sm:text-base">
                                    Parc automobile, élévateurs mobiles et camions équipés de grue arrière.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.section>


            {/*<div className="relative w-[50%] mx-auto mt-6 mb-6">*/}
            <div className="relative w-[90%] md:w-[50%] lg:w-[80%] mx-auto px-6">

                <h2 className="text-3xl font-bold text-sky-400 mb-6">
                    Travaux en hauteurs
                </h2>

                <p className="text-slate-300 leading-relaxed mb-4">
                    ESLY GROUP est capable d'intervenir au niveau national et international grace à l'excellente
                    couverture
                    territorial via sa charroie automobile.
                </p>

                <p className="text-slate-300 leading-relaxed">
                    Nos techniciens sont dotés d'équipements de sécurite pour tout type de travail en hauteur,selon la
                    norme internationale de sécurité protection individuelpour minimiser les accidents à zéro pourcent
                    (0%).
                </p>
            </div>

            {/* ================= REALISATIONS ================= */}
            <motion.section
                id="realisations"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                className="py-16 md:py-24 bg-slate-900 overflow-hidden"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 text-center mb-10 md:mb-12">
                    Nos réalisations
                </h2>

                <div
                    className="
      px-4 sm:px-6
      max-w-7xl mx-auto
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      gap-6
      md:skew-y-[-6deg]
    "
                >
                    {[real2, real3, real4, real5, real6].map((img, i) => (
                        <motion.div
                            key={i}
                            whileHover={{scale: 1.05}}
                            className="
          h-56 sm:h-64 md:h-72
          rounded-xl
          overflow-hidden
          md:skew-y-[6deg]
          transition-transform
        "
                        >
                            <Image
                                src={img}
                                alt={`Réalisation ${i + 1}`}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            {/* ================= CONTACT ================= */}

            <motion.section
                id="contact"
                // className="py-4 "
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                className="scroll-mt-15 py-24 px-6"
            >
                <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">

                    {/* LEFT SIDE CONTACT INFO */}
                    <div className="space-y-6">
                        {/*<h2 className="text-3xl font-bold">Nos contacts</h2>*/}
                        <h2 className="text-3xl font-bold text-sky-400">Nos contacts </h2>
                        {/* Adresse */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            whileHover={{y: -8, scale: 1.05}}
                            transition={{type: "spring", stiffness: 200}}
                            className="rounded-2xl shadow-lg p-8 text-center border border-sky-400 cursor-pointer"
                        >
                            <MapPin className="mx-auto text-red-600 mb-4 w-6 h-6"/>
                            <p className="font-semibold">Adresse</p>
                            <p className="text-sm">Ouenzé 77,Rue Moussana</p>
                        </motion.div>

                        {/* Téléphone & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.2}}
                                whileHover={{y: -8, scale: 1.05}}
                                transition={{type: "spring", stiffness: 200}}
                                className="rounded-2xl shadow-lg p-8 text-center border border-sky-400 cursor-pointer"
                            >
                                <Phone className="mx-auto text-red-600 mb-4 w-6 h-6"/>
                                <p className="font-semibold">Téléphone</p>
                                <p className="text-sm">06 953 33 22 / 06 457 30 10 </p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.2}}
                                whileHover={{y: -8, scale: 1.05}}
                                transition={{type: "spring", stiffness: 200}}
                                className="rounded-2xl shadow-lg p-8 text-center border border-sky-400 cursor-pointer"
                            >
                                <Mail className="mx-auto text-red-600 mb-4 w-6 h-6"/>
                                <p className="font-semibold">Email</p>
                                <p className="text-sm">eslygroup@gmail.com</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div
                        //   className="bg-white p-8 rounded-2xl shadow space-y-4"
                        className="rounded-2xl space-y-4 shadow-lg p-8 text-center  cursor-pointer"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/*<input*/}
                            {/*    name="name"*/}
                            {/*    value={form.name}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    className="border p-3 rounded"*/}
                            {/*    placeholder="Votre nom"*/}
                            {/*    required*/}
                            {/*/>*/}
                            <input
                                name="name"
                                value={form.name}
                                //   onChange={(e) => setForm({...form, name: e.target.value})}
                                onChange={handleChange}
                                className={`border rounded-xl p-3 rounded w-full outline-none transition
    ${errors.name ? "border-red-600" : "border-zinc-300 focus:border-blue-600"}`}
                                placeholder="Votre nom"
                            />


                            {/*<input*/}
                            {/*    name="email"*/}
                            {/*    value={form.email}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    className="border p-3 rounded"*/}
                            {/*    placeholder="Votre email"*/}
                            {/*    type="email"*/}
                            {/*    required*/}
                            {/*/>*/}


                            <input
                                name="email"
                                value={form.email}
                                // onChange={(e) => setForm({...form, email: e.target.value})}
                                onChange={handleChange}
                                className={`border rounded-xl p-3 rounded w-full outline-none transition
    ${errors.email ? "border-red-600" : "border-zinc-300 focus:border-blue-600"}`}
                                placeholder="Votre email"
                            />


                        </div>
                        {/*<input*/}
                        {/*    name="subject"*/}
                        {/*    value={form.subject}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    className="border p-3 rounded w-full"*/}
                        {/*    placeholder="Sujet"*/}
                        {/*    required*/}
                        {/*/>*/}
                        <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            //   onChange={(e) => setForm({...form, subject: e.target.value})}
                            className={`border rounded-xl p-3 rounded w-full outline-none transition
    ${errors.subject ? "border-red-600" : "border-zinc-300 focus:border-blue-600"}`}
                            placeholder="Sujet"
                        />


                        {/*<textarea*/}
                        {/*    name="message"*/}
                        {/*    value={form.message}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    className="border p-3 rounded w-full h-32"*/}
                        {/*    placeholder="Message"*/}
                        {/*    required*/}
                        {/*/>*/}
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            //    onChange={(e) => setForm({...form, message: e.target.value})}
                            className={`border rounded-md p-3 rounded w-full h-32 outline-none transition
    ${errors.message ? "border-red-600" : "border-zinc-300 focus:border-blue-600"}`}
                            placeholder="Message"
                        />

                        {errors.name && <p className="text-red-600 text-xs mt-1">Champ obligatoire</p>}
                        {errors.email && <p className="text-red-600 text-xs mt-1">Champ obligatoire</p>}
                        {errors.subject && <p className="text-red-600 text-xs mt-1">Champ obligatoire</p>}
                        {errors.message && <p className="text-red-600 text-xs mt-1">Champ obligatoire</p>}
                        {errors.offline && <p className="text-red-600 text-xs mt-1">Pas de connexion Internet</p>}


                        {/*<motion.button*/}
                        {/*    onClick={(e) => {*/}
                        {/*        handleSubmit(e)*/}
                        {/*    }}*/}
                        {/*    whileHover={{scale: 1.08, boxShadow: "0px 12px 30px rgba(220,38,38,0.35)"}}*/}
                        {/*    whileTap={{scale: 0.95}}*/}
                        {/*    transition={{type: "spring", stiffness: 260, damping: 16}}*/}
                        {/*    className="bg-blue-600 text-white px-8 py-3 rounded-full cursor-pointer"*/}
                        {/*>*/}
                        {/*    Envoyer un message*/}
                        {/*</motion.button>*/}

                        <div className="flex">
                            <motion.button
                                onClick={(e) => {
                                    handleSubmit(e)
                                }}
                                whileHover={{scale: 1.08}}
                                whileTap={{scale: 0.95}}
                                transition={{type: "spring", stiffness: 260, damping: 16}}
                                className="bg-sky-400 text-black px-6 py-3 rounded-full font-bold mr-auto cursor-pointer"
                            >
                                Envoyer
                            </motion.button>
                            {/*(<span className="text-lg">Ecrivez nous</span>)*/}
                        </div>
                    </div>
                </div>
            </motion.section>

            <footer className="py-8 text-center text-slate-400 border-t">
                © {new Date().getFullYear()} ESLY GROUP — Tous droits réservés
            </footer>
        </div>
    );
}
