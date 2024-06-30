import React from "react";
import { Link } from "@inertiajs/react";
import Section from "../Section";

const Navbar = () => {
    return (
        <nav className="bg-primary sticky  top-0 z-[990]  ">
            <Section className="    p-4 text-white flex justify-between items-center">
                <Link
                    href={route("home")}
                    className="text-xl font-bold font-jockey-one"
                >
                    Poltekun Trans
                </Link>
                <div className="flex space-x-4 text-sm">
                    <Link
                        href="#tentang-kami"
                        className="hover:text-secondary duration-300 transition"
                    >
                        Tentang Kami
                    </Link>
                    <Link
                        href="#our-services"
                        className="hover:text-secondary duration-300 transition"
                    >
                        Our Services
                    </Link>
                    <Link
                        href="#cara-pemesanan"
                        className="hover:text-secondary duration-300 transition"
                    >
                        Cara Pemesanan
                    </Link>
                </div>
                <div className="flex space-x-2">
                    <Link
                        href={route("login")}
                        className="bg-secondary text-black px-4 py-1 rounded-[10px] hover:bg-secondary/80 hover:text-white transition duration-300 text-sm"
                    >
                        Masuk
                    </Link>
                    <Link
                        href={route("register")}
                        className="border border-white px-4 py-1 rounded-[10px] hover:bg-white hover:text-black transition duration-300 text-sm"
                    >
                        Daftar
                    </Link>
                </div>
            </Section>
        </nav>
    );
};

export default Navbar;
