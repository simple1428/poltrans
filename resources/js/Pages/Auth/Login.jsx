import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <HomeLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="container mx-auto mt-10 max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-6">Login</h1>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block my-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>
                    <div className="mb-6">
                        <PrimaryButton
                            className="w-full bg-secondary text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 flex justify-center items-center "
                            disabled={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </div>
                    <div className="text-center mb-4">OR</div>
                    <div className="mb-6">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center bg-gray-100 text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                        >
                            <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                alt="Google"
                                className="h-5 mr-2"
                            />
                            Continue With Google
                        </button>
                    </div>
                    <div className="text-center text-sm">
                        <span>Already Have Account? </span>
                        <Link
                            href={route("register")}
                            className="text-secondary hover:underline"
                        >
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </HomeLayout>
    );
}
