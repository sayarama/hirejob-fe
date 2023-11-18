import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { getCookie } from "cookies-next";

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [company, setCompany] = useState("")
    const [job_title, setJobTitle] = useState("")
    const [phone, setPhoneNumber] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState(null)

    const handleRegister = () => {
        setIsLoading(true);
        setErrMsg(null);

        axios.post("https://hire-job.onrender.com/v1/auth/register", {
            email,
            password,
            fullname,
            company,
            job_title,
            phone
        })
            .then(() => {
                setIsSuccess(true)
            })
            .catch((err) => {
                const { email, password, fullname, company, job_title, phone } = err?.response?.data?.messages ?? {};

                setErrMsg(
                    email?.message ??
                    password?.message ??
                    fullname?.message ??
                    company?.message ??
                    job_title?.message ??
                    phone?.message ??
                    err?.response?.data?.messages ??
                    "Something wrong in our server, try again later"
                );
            })
            .finally(() => setIsLoading(false));
    }
    // Untuk konfirmasi kata sandi buat di frontend menggunakan verifikasi, kalau kata sandi belum sama maka error dan kalau sudah sama maka berhasil
    return (
        <main id="auth-login" className="h-screen px-20 pt-12">
            <div className="flex-col md:flex md:flex-row items-center gap-16">
                <div className="w-full relative">
                    <img
                        className="bg-red absolute left-10 top-10 z-10 hidden md:block"
                        src="/images/peworld-white.png"
                    />
                    <div className="flex justify-center relative">
                        <h1 className=" absolute left-10 top-72 text-6xl text-white font-medium z-10 hidden md:block">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                    </div>
                    <div className='before:content-[" "] before:absolute before:inset-0 before:block relative hidden md:block before:opacity-75 before:bg-[#5E50A1] bg-blue-900 bg-cover bg-no-repeat bg-center bg-[url("/images/auth.png")] h-[90vh]' />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-5xl font-medium">Halo, Pewpeople</h1>
                    <p className="text-[18px] mt-[16px] mb-[52px]">
                        Daftar untuk menikmati fitur lengkap!
                    </p>
                    {isSuccess ? (
                        <div className="bg-[#d1e7dd] text-[#0f5132] p-4 rounded-lg w-[90%] mb-[30px]">
                            <p>{isSuccess}</p>
                        </div>
                    ) : null}

                    {errMsg ? (
                        <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg w-[95%]">
                            {errMsg}
                        </div>
                    ) : null}
                    <div className="flex h-[40vh] overflow-x-hidden overflow-scroll flex-col gap-8 mb-[24px]">
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
                            <label htmlFor="fullname" className="block text-sm text-gray-400">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Masukkan Nama Lengkap"
                                className="w-full border-2 p-3"
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="perusahaan" className="block text-sm text-gray-400">
                                Perusahaan
                            </label>
                            <input
                                type="text"
                                id="perusahaan"
                                name="perusahaan"
                                placeholder="Masukkan Nama Perusahaan"
                                className="w-full border-2 p-3"
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="jabatan" className="block text-sm text-gray-400">
                                Jabatan
                            </label>
                            <input
                                type="text"
                                id="jabatan"
                                name="jabatan"
                                placeholder="Posisi di perusahaan anda"
                                className="w-full border-2 p-3"
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="nohp" className="block text-sm text-gray-400">
                                No Handphone
                            </label>
                            <input
                                type="text"
                                id="nohp"
                                name="nohp"
                                placeholder="Masukkan no handphone"
                                className="w-full border-2 p-3"
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-400">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Konfirmasi Password"
                                className="w-full border-2 p-3"
                            />
                        </div>

                    </div>
                    <button onClick={handleRegister} className="p-3 rounded-md bg-[#FBB017] font-bold text-white mb-[28px]">
                        Daftar
                    </button>
                    <Link href="/login">
                        <p className="text-center">
                            Sudah Punya Akun?
                            <span className="text-[#FBB017]">Login disini</span>
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
}



export async function getServerSideProps({ req, res }) {
    const user = getCookie("user", { req, res });
    const token = getCookie("token", { req, res })

    if (user && token) {
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

export default Register;
