import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function hire() {
    return (
        <div>
            <Navbar />
            <main className="py-10 px-8 md:px-20 mt-10 bg-[#F6F7F8]">
                <div className="flex flex-col lg:flex-row container gap-20 mx-auto">
                    {/* left */}
                    <div className="w-full lg:w-2/4 h-fit bg-white shadow-xl p-10">
                        <div className="flex justify-center mb-10">
                            <img className="rounded-full" src="https://i.pravatar.cc/200" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-medium mb-5">Luois Tomlinson</h1>
                            <p className="mb-3">Lorem ipsum dolor sit amet, cosectetur adipicing elit. Vestibulum erat orci.</p>
                            <div className="flex gap-3 md:gap-8 text-gray-400 mb-5">
                                <img src="/images/map.svg" />
                                <p>Purwokerto, Jawa Tengah</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>

                        <div>
                            <h1 className="text-3xl font-medium mb-5">Skill</h1>
                            <div className="flex w-[200px] sm:w-[300px] flex-wrap gap-5">
                                {["Phyton", "Laravel", "GO", "C++", 
                                "Kotlin", "Javascript", "Flutter"].map((item, key) => (
                                    <div
                                        className="bg-[#FBB01799] border-2 border-[#FBB017] py-1 px-5 rounded"
                                        key={key}
                                    >
                                        <p className="text-[#fff] text-[12px]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-full h-screen">
                        <div>
                            <h1 className="text-3xl font-medium mb-3">Hubungi Louis Tomlinson</h1>
                            <p>Lorem ipsum dolor sit amet, cosetectur adipiscing lit. in euismod ipsum et dui rhonucs acutor</p>
                        </div>
                        <div className="mt-5">
                            {/* Input */}
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-sm text-gray-400">
                                Tujuan Tentang Pesan Ini
                            </label>
                            <input
                                type="text"
                                id="projel"
                                name="projek"
                                placeholder="Masukkan Alamat Email"
                                className="w-full border-2 p-3"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="nama" className="block text-sm text-gray-400">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                placeholder="Masukkan Nama Lengkap"
                                className="w-full border-2 p-3"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Masukkan Email"
                                className="w-full border-2 p-3"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="phone" className="block text-sm text-gray-400">
                                No Handphone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Masukkan no handphone"
                                className="w-full border-2 p-3"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="desc" className="block text-sm text-gray-400">
                                Deskripsi
                            </label>
                            <input
                                type="text"
                                id="desc"
                                name="desc"
                                placeholder="Deskripsikan/jelaskan lebih detail"
                                className="w-full border-2 p-3 pb-3 md:pb-60"
                            />
                        </div>
                        {/* Input end */}
                        <button className="p-3 rounded-md w-full bg-[#FBB017] font-bold text-white mb-[28px]">
                        Masuk
                    </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default hire;
