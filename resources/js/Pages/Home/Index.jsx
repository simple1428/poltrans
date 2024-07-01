import TextInput from "@/Components/TextInput";
import HomeLayout from "@/Layouts/HomeLayout";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Select,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import clsx from "clsx";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Section from "@/Components/Section";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Index({ routes }) {
    return (
        <>
            <Head title="Pemesanan Tiket Transportasi" />
            <HomeLayout>
                <div className="bg-gradient-to-b via-primary from-primary to-white">
                    <Section className={"py-10"}>
                        <h1 className="text-3xl font-bold text-center mb-6 text-white h-44 flex justify-center items-center">
                            Experience Your Journey Safely with First Class
                            Hospitality
                        </h1>
                        <BookingSection routes={routes} />
                        <ServicesSection />
                        <SubscriptionSection />
                    </Section>
                </div>
            </HomeLayout>
        </>
    );
}
const cities = [
    { id: 1, name: "Semarang" },
    { id: 2, name: "Surakarta" },
    { id: 3, name: "Tegal" },
    { id: 4, name: "Pekalongan" },
    { id: 5, name: "Magelang" },
    { id: 6, name: "Salatiga" },
    { id: 7, name: "Purwokerto" },
    { id: 8, name: "Cilacap" },
    { id: 9, name: "Kudus" },
    { id: 10, name: "Pati" },
];

function BookingSection({ routes }) {
    const { data, setData } = useForm({
        departure_city: "",
        arrival_city: "",
        departure_date: "",
        number_of_pasenger: "",
    });

    const [filteredArrivalCities, setFilteredArrivalCities] = useState([]);

    const handleDepartureChange = (city) => {
        const departureCity = city;
        setData("departure_city", departureCity);

        const arrivalCities = routes
            .filter((route) => route.departure_city === departureCity)
            .map((route) => route.arrival_city);

        setFilteredArrivalCities(arrivalCities);
    };

    const handleArrivalChange = (city) => {
        const arrivalCity = city;
        setData("arrival_city", arrivalCity);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const [queryDeparture, setQueryDeparture] = useState("");
    const filteredCities =
        queryDeparture === ""
            ? routes
            : routes.filter((route) => {
                  return route.departure_city
                      .toLowerCase()
                      .includes(queryDeparture.toLowerCase());
              });
    return (
        <TabGroup className="flex flex-col md:flex-row bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <TabList
                className={"flex flex-col bg-secondary text-white p-4 md:w-1/4"}
            >
                <Tab
                    className={
                        "data-[selected]:font-bold data-[selected]:mb-4 data-[selected]:border-r"
                    }
                >
                    Booking
                </Tab>
                <Tab
                    className={
                        "data-[selected]:font-bold data-[selected]:mb-4 data-[selected]:border-r"
                    }
                >
                    Kelola Pesanan
                </Tab>
            </TabList>
            <TabPanels className="p-4 md:w-3/4 h-72">
                <TabPanel>
                    <form className="w-full" onSubmit={handleSearch}>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <h3 className="font-bold text-primary dark:text-green-400 mb-2">
                                    Layanan
                                </h3>
                                <div className="border-b-2 border-sebg-secondary pb-2 mb-4">
                                    <div>
                                        <div className="relative">
                                            <Select
                                                className={clsx(
                                                    "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-secondary",
                                                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                                                    "*:text-black"
                                                )}
                                            >
                                                <option value="1">
                                                    All Service
                                                </option>
                                                <option value="2">
                                                    Poltekun Bus
                                                </option>
                                                <option value="3">
                                                    Poltekun Travel
                                                </option>
                                            </Select>
                                            <ChevronDownIcon
                                                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 mb-4 items-center gap-1">
                                    <div className="">
                                        <Menu>
                                            <MenuButton className=" rounded-md   w-full     text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  cursor-pointer ">
                                                <label className=" gap-1 text-gray-700 mb-2 flex items-center border-b border-secondary pb-2">
                                                    <span className="text-secondary text-xs">
                                                        <FaArrowRight />
                                                    </span>{" "}
                                                    {data.departure_city
                                                        ? data.departure_city
                                                        : "Kota Keberangkatan"}
                                                </label>
                                            </MenuButton>

                                            <MenuItems
                                                transition
                                                anchor="bottom start"
                                                className="w-72  origin-top-left rounded-lg border  shadow-lg bg-white   p-4 text-sm/6   transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-50"
                                            >
                                                <div>
                                                    <TextInput
                                                        className={clsx(
                                                            "mt-3 block w-full rounded-lg border border-black/20 bg-white  py-1.5 px-3 text-sm/6  ",
                                                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 sticky top-0"
                                                        )}
                                                        value={queryDeparture}
                                                        placeholder="Search"
                                                        onChange={(event) =>
                                                            setQueryDeparture(
                                                                event.target
                                                                    .value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <ul className="border-t mt-2 h-72 flex flex-col">
                                                    {filteredCities.map(
                                                        (city, i) => {
                                                            return (
                                                                <MenuItem
                                                                    as="li"
                                                                    onClick={() => {
                                                                        handleDepartureChange(
                                                                            city.departure_city
                                                                        );
                                                                    }}
                                                                    key={i}
                                                                    className="border-b cursor-pointer hover:bg-black/20 py-1 px-2"
                                                                >
                                                                    {
                                                                        city.departure_city
                                                                    }
                                                                </MenuItem>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </MenuItems>
                                        </Menu>
                                    </div>
                                    <div className="">
                                        <Menu>
                                            <MenuButton className=" rounded-md   w-full     text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  cursor-pointer ">
                                                <label className=" gap-1 text-gray-700 mb-2 flex items-center border-b border-secondary pb-2">
                                                    <span className="text-secondary text-xs">
                                                        <FaArrowRight />
                                                    </span>{" "}
                                                    {data.arrival_city
                                                        ? data.arrival_city
                                                        : "Kota Tujuan"}
                                                </label>
                                            </MenuButton>

                                            <MenuItems
                                                transition
                                                anchor="bottom start"
                                                className="w-72  origin-top-left rounded-lg border  shadow-lg bg-white   p-4 text-sm/6   transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-50"
                                            >
                                                <ul className="border-t mt-2 h-72 flex flex-col">
                                                    {filteredArrivalCities.map(
                                                        (city, i) => {
                                                            return (
                                                                <MenuItem
                                                                    as="li"
                                                                    onClick={() => {
                                                                        handleArrivalChange(
                                                                            city
                                                                        );
                                                                    }}
                                                                    key={i}
                                                                    className="border-b cursor-pointer hover:bg-black/20 py-1 px-2"
                                                                >
                                                                    {city}
                                                                </MenuItem>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </MenuItems>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                    *Anak-anak di atas usia 4 tahun wajib
                                    membeli tiket.
                                </div>
                            </div>
                            <div className=" ">
                                <div className="font-bold text-primary dark:text-green-400 mb-2">
                                    Jumlah Penumpang *
                                </div>
                                <div className="border-b-2 border-sebg-secondary pb-2 mb-4">
                                    <div className="relative">
                                        <Select
                                            className={clsx(
                                                "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-secondary",
                                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                                                "*:text-black"
                                            )}
                                            onChange={(e) => {
                                                setData(
                                                    "number_of_pasenger",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Select>
                                        <ChevronDownIcon
                                            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                                <div className="grid gris-cols-2 w-full mb-4 items-center">
                                    <div>
                                        <label className="block font-semibold text-gray-700 mb-2">
                                            Tanggal Keberangkatan
                                        </label>
                                        <TextInput
                                            onChange={(e) => {
                                                setData(
                                                    "departure_date",
                                                    e.target.value
                                                );
                                            }}
                                            value={data.departure_date}
                                            type="date"
                                            className="w-full px-4 py-2 border-b border-0 border-secondary rounded-none focus:outline-none focus:ring focus:border-secondary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <PrimaryButton className="bg-secondary text-white py-2 px-6 rounded-lg">
                                Cari
                            </PrimaryButton>
                        </div>
                    </form>
                </TabPanel>
                <TabPanel>content 2</TabPanel>
            </TabPanels>
        </TabGroup>
    );
}
function SubscriptionSection() {
    return (
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg ">
            <form className="flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full  ">
                    <TextInput
                        type="email"
                        placeholder="Masukkan email Anda"
                        className="w-full px-4 py-2 border-b border-0 rounded-lg focus:outline-none focus:ring focus:border-secondary md:mr-2"
                    />
                    <button className="bg-primary text-white py-2 px-6 mt-4 md:mt-0 rounded-lg">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
}
function ServicesSection() {
    return (
        <div className="my-10">
            <h2 className="text-xl font-bold mb-6   text-white  ">
                Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center text-white">
                    <div className="mx-auto mb-4 h-44 w-44 bg-white rounded-full"></div>
                    <h3 className="text-xl  font-bold">Captain Seat</h3>
                    <p>
                        Poltekun Trans menggunakan Captain Seat di setiap armada
                        untuk menciptakan kenyamanan tamu selama perjalanan.
                    </p>
                </div>
                <div className="text-center text-white">
                    <div className="mx-auto mb-4 h-44 w-44 bg-white rounded-full"></div>
                    <h3 className="text-xl  font-bold">Nomor Kursi</h3>
                    <p>
                        Seluruh armada Poltekun Trans dilengkapi dengan nomor
                        kursi untuk memudahkan tamu dalam menentukan kursi
                        favorit.
                    </p>
                </div>
                <div className="text-center text-white">
                    <div className="mx-auto mb-4 h-44 w-44 bg-white rounded-full"></div>
                    <h3 className="text-xl  font-bold">Seat Belt</h3>
                    <p>
                        Poltekun Trans berkomitmen dengan keselamatan setiap
                        tamu, setiap kursi dilengkapi dengan seat belt untuk
                        kenyamanan dan keamanan tamu.
                    </p>
                </div>
                <div className="text-center text-white">
                    <div className="mx-auto mb-4 h-44 w-44 bg-white rounded-full"></div>
                    <h3 className="text-xl  font-bold">USB & USB-C Slot</h3>
                    <p>
                        Setiap kursi Poltekun Trans disediakan USB dan USB-C
                        Slot untuk membantu daya gadget tamu.
                    </p>
                </div>
            </div>
        </div>
    );
}
