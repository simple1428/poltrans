import React from "react";
import Section from "../Section";

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-8 ">
            <Section className="   flex  justify-between">
                <div className="">
                    <h2 className="text-2xl font-bold">Poltekun Trans</h2>
                    <div className="mt-4">
                        <p className="text-secondary">24H Call Center</p>
                        <button className="bg-secondary text-primary px-4 py-2 rounded mt-2 flex items-center">
                            <svg
                                className="w-6 h-6 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10h1l2 2-2 2H3v-4zm0 6h1l2 2-2 2H3v-4zm0-12h1l2 2-2 2H3V4zm4 0h1l2 2-2 2H7V4zm0 12h1l2 2-2 2H7v-4zm4-12h1l2 2-2 2h-1V4zm0 12h1l2 2-2 2h-1v-4zm4-12h1l2 2-2 2h-1V4zm0 12h1l2 2-2 2h-1v-4zm4-12h1l2 2-2 2h-1V4zm0 12h1l2 2-2 2h-1v-4z"
                                ></path>
                            </svg>
                            Call Center
                        </button>
                    </div>
                </div>
                <div className="flex space-x-16 text-sm">
                    <div>
                        <h3 className="text-secondary">Poltekun Trans</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#tentang" className="hover:underline">
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cara-pemesanan"
                                    className="hover:underline"
                                >
                                    Cara Pemesanan
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#kelola-pemesanan"
                                    className="hover:underline"
                                >
                                    Kelola Pemesanan
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#call-center"
                                    className="hover:underline"
                                >
                                    Call Center
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-secondary">Our Service</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="#poltekun-bus"
                                    className="hover:underline"
                                >
                                    Poltekun Bus
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#poltekun-trans"
                                    className="hover:underline"
                                >
                                    Poltekun Trans
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-secondary">Connect</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#facebook" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#instagram"
                                    className="hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#twitter" className="hover:underline">
                                    X (Twitter)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>CopyRight 2024 Poltekun Trans. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
