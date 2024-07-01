import PrimaryButton from "@/Components/PrimaryButton";
import Section from "@/Components/Section";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function About({ fleets, driver }) {
    return (
        <>
            <Head title="Tentang Kami" />
            <HomeLayout>
                <div className="bg-primary h-72">
                    <Section className={"text-white pt-10 px-5"}>
                        <h1 className="text-xl font-bold">
                            Tentang Poltekun Trans
                        </h1>
                        <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione inventore distinctio magnam cumque
                            impedit. Voluptatum amet porro delectus est,
                            accusantium eligendi, aspernatur cupiditate commodi
                            laboriosam, libero perferendis eveniet nulla ea.
                            Itaque, architecto, ipsum sed adipisci distinctio
                            quibusdam beatae nobis sint earum exercitationem
                            blanditiis voluptate velit repellat! Dolorem laborum
                            vero, facere, repudiandae iure quod iste illum
                            voluptate optio velit necessitatibus ducimus
                            repellendus corporis a maiores eum quis ipsa illo
                            alias? Voluptatum consequatur esse maxime modi sequi
                            quasi maiores quaerat officiis, ratione obcaecati
                            nemo excepturi sint error natus eveniet soluta
                            aliquam facilis nobis delectus! Sint ipsa iste,
                            nulla molestias ipsum nobis corrupti!
                        </p>
                    </Section>
                </div>
                <div className="">
                    <Section
                        className={"flex items-center justify-center py-5"}
                    >
                        <h1 className="border-b w-fit text-xl font-bold border-black">
                            Service
                        </h1>
                    </Section>
                </div>
                <div className="bg-primary  py-5">
                    <Section className={" pt-10 px-5"}>
                        <h1 className="text-xl font-bold text-white">
                            Poltekun Bus
                        </h1>
                        <div className="grid grid-cols-4 gap-2">
                            {fleets
                                .filter((item) => item.fleet_type == "bus")
                                .map((fleet, i) => {
                                    return (
                                        <div
                                            className="h-72 bg-white rounded-lg p-2"
                                            key={i}
                                        >
                                            <div className="h-44 w-full border bg-black/10"></div>
                                            <div className="flex items-center flex-col justify-center">
                                                <h1 className="font-bold uppercase  ">
                                                    {fleet.fleet_name}
                                                </h1>
                                                <p className="text-gray-400">
                                                    Kode Armada{" "}
                                                    {fleet.fleet_number}
                                                </p>
                                                <PrimaryButton className="bg-secondary hover:bg-secondary/60">
                                                    Cek
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </Section>
                </div>
                <div className="bg-primary  py-5 mt-5">
                    <Section className={" pt-10 px-5"}>
                        <h1 className="text-xl font-bold text-white">
                            Poltekun Travel
                        </h1>
                        <div className="grid grid-cols-4 gap-2">
                            {fleets
                                .filter((item) => item.fleet_type == "travel")
                                .map((fleet, i) => {
                                    return (
                                        <div
                                            className="h-72 bg-white rounded-lg p-2"
                                            key={i}
                                        >
                                            <div className="h-44 w-full border bg-black/10"></div>
                                            <div className="flex items-center flex-col justify-center">
                                                <h1 className="font-bold uppercase  ">
                                                    {fleet.fleet_name}
                                                </h1>
                                                <p className="text-gray-400">
                                                    Kode Armada{" "}
                                                    {fleet.fleet_number}
                                                </p>
                                                <PrimaryButton className="bg-secondary hover:bg-secondary/60">
                                                    Cek
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </Section>
                </div>

                <div className="">
                    <Section
                        className={"flex items-center justify-center py-5"}
                    >
                        <h1 className="border-b w-fit text-xl font-bold border-black">
                            Driver
                        </h1>
                    </Section>
                </div>
                <div className="bg-primary  py-5 mt-5">
                    <Section className={" pt-10 px-5"}>
                        <div className="grid grid-cols-4 gap-2">
                            {driver.slice(0, 4).map((item, i) => {
                                return (
                                    <div
                                        className="h-72 bg-white rounded-lg p-2 flex flex-col justify-between "
                                        key={i}
                                    >
                                        <div className="h-44 w-full border bg-black/10"></div>
                                        <div className="flex items-center flex-col justify-center">
                                            {item.full_name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Section>
                </div>
            </HomeLayout>
        </>
    );
}
