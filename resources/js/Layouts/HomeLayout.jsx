import Footer from "@/Components/Layout/Footer";
import Navbar from "@/Components/Layout/Navbar";
import React from "react";

export default function HomeLayout({ children }) {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
        </div>
    );
}
