import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function hire() {
    return (
        <div>
            <Navbar />
            <main className="py-10 px-20 bg-[#F6F7F8]">
                <div className="flex container gap-20 mx-auto">
                    <div className="w-2/4 h-fit bg-white shadow-lg p-10">
                        <div className="flex justify-center mb-10">
                            <img className="rounded-full" src="https://i.pravatar.cc/200" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-medium mb-5">Luois Tomlinson</h1>
                            <p className="mb-3">Lorem ipsum dolor sit amet, cosectetur adipicing elit. Vestibulum erat orci.</p>
                            <div className="flex gap-8 text-gray-400 mb-5">
                                <img src="/images/map.svg" />
                                <p>Purwokerto, Jawa Tengah</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>

                        <div>
                            <h1 className="text-3xl font-medium mb-5">Skill</h1>
                            <div className="flex w-[300px] flex-wrap gap-5">
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
                    <div className="w-full h-screen bg-red-900"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default hire;
