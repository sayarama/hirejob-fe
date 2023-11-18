import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    const handleLogin = () => {
        setIsLoading(true);
        axios
            .post("https://hire-job.onrender.com/v1/auth/login", {
                email,
                password,
            })
            .then((result) => {
                setCookie("token", result?.data?.data?.token, {maxAge: 60 * 6 * 24});
                setCookie("user", JSON.stringify(result?.data?.data?.user, {maxAge: 60 * 6 * 24}));

                window.location.href = "/"
            })
            .catch((err) => {
                const { email, password } = err?.response?.data?.messages ?? {};

                setErrMsg(
                    email?.message ??
                    password?.message ??
                    err?.response?.data?.messages ??
                    "Something wrong in our server, try again later"
                );
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <main id="auth-login" className="h-screen px-20 pt-12">
            <div className="flex-col md:flex md:flex-row items-center gap-16">
                <div className="w-full relative">
                    <img
                        className="bg-red absolute left-10 top-10 z-10 hidden md:block"
                        src="/images/peworld-white.png"
                    />
                    <div className="flex justify-center relative">
                        <h1 className=" absolute left-10 top-72 text-6xl text-white font-medium z-10 hidden md:block">
                            Temukan developer berbakat & terbaik di berbagai bidang keahlian
                        </h1>
                    </div>
                    <div className='before:content-[" "] before:absolute before:inset-0 before:block relative hidden md:block before:opacity-75 before:bg-[#5E50A1] bg-blue-900 bg-cover bg-no-repeat bg-center bg-[url("/images/auth.png")] h-[90vh]' />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-5xl font-medium">Halo, Pewpeople</h1>
                    <p className="text-[18px] mt-[16px] mb-[52px]">
                        Login untuk mulai mencari talent!
                    </p>
                   {errMsg ? (
                     <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg w-[95%]">
                     {errMsg}
                 </div>
                   ) : null}
                    <div className="flex flex-col gap-8 mb-[24px]">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Masukkan Alamat Email"
                                className="w-full border-2 p-3"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-400">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Masukkan Password"
                                className="w-full border-2 p-3"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <p className="place-self-end mb-[24px]">Lupa Kata Sandi?</p>
                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="p-3 rounded-md bg-[#FBB017] font-bold text-white mb-[28px]"
                    >
                        {isLoading ? "Loading..." : "Masuk"}
                    </button>
                    <p className="text-center">
                        Anda belum punya akun?{" "}
                        <Link href="/register">
                            <span className="text-[#FBB017]">Daftar disini</span>
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}


export async function getServerSideProps({req, res}) {
    const user = getCookie("user", {req, res});
    const token = getCookie("token", {req, res})

    if(user && token) {
        return {
            redirect: {
              permanent: false,
              destination: "/"
            }
        }
    }
    
    return {
        props: {},
    };
}

export default Login;
