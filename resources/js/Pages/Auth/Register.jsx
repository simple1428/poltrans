import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import { FcGoogle } from "react-icons/fc";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        NIK: "",
        email: "",
        phoneNumber: "",
        password: "",
        password_confirmation: "",
        agree: false,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <HomeLayout>
            <Head title="Register" />

            <form
                onSubmit={submit}
                className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md my-5"
            >
                <h1 className="text-xl font-bold mb-4">Register</h1>

                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Full Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel
                        htmlFor="nik"
                        value="Nomor Induk Kependudukan (NIK)"
                    />
                    <TextInput
                        id="NIK"
                        name="NIK"
                        type="number"
                        value={data.NIK}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("NIK", e.target.value)}
                        required
                    />
                    <InputError message={errors.NIK} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="phoneNumber" value="Phone Number" />
                    <TextInput
                        id="phoneNumber"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("phoneNumber", e.target.value)}
                        required
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="mb-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        id="agree"
                        type="checkbox"
                        name="agree"
                        checked={data.agree}
                        onChange={(e) => setData("agree", e.target.checked)}
                        className="mr-2"
                        required
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                        I agree with{" "}
                        <a href="#" className="text-blue-500">
                            Terms & Condition
                        </a>
                    </label>
                    <InputError message={errors.agree} className="mt-2" />
                </div>

                <div className="mb-4">
                    <PrimaryButton
                        className={`w-full flex justify-center items-center ${
                            data.agree == true
                                ? "bg-secondary hover:bg-secondary/80 hover:text-white"
                                : "bg-gray-200"
                        } `}
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>

                <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-500">OR</span>
                </div>

                <div className="mb-4">
                    <button
                        type="button"
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 gap-1"
                    >
                        <FcGoogle size={20} />
                        Continue With Google
                    </button>
                </div>

                <div className="flex items-center justify-center">
                    <Link
                        href={route("login")}
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Already Have Account?{" "}
                        <span className="text-blue-500">Log In</span>
                    </Link>
                </div>
            </form>
        </HomeLayout>
    );
}
