import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { getCookie } from "cookies-next";

function hire(props) {
    const { data } = props;
    const [subject, setSubject] = useState("")
    const [senderName, setSenderName] = useState("")
    const [description, setDescription] = useState("")

    const handleSend = () => {
        axios.post("https://hire-job.onrender.com/v1/contact" , {
            subject: subject,
            description : description,
            sender : senderName,
            toName : data?.fullname,
            to: data?.socmed?.email
        })
    }
    return (
        <div className="bg-[#F6F7F8]">
            <Navbar />
            <main className="py-10 px-8 md:px-20 mt-10 ">
                <div className="flex flex-col lg:flex-row container gap-20 mx-auto">
                    {/* left */}
                    <div className="w-full lg:w-2/4 h-fit bg-white shadow-xl p-10">
                        <div className="flex justify-center mb-10">
                            <img className="rounded-full" src="https://i.pravatar.cc/200" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-medium mb-5">{data?.fullname}</h1>
                            <p className="mb-3">{data?.job}</p>
                            <div className="flex gap-3 md:gap-3 text-gray-400 mb-5">
                                <img src="/images/map.svg" />
                                <p>{data?.location}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-5">{data?.desc}</p>

                        <div>
                            <h1 className="text-3xl font-medium mb-5">Skill</h1>
                            <div className="flex w-[200px] sm:w-[300px] flex-wrap gap-5">
                                {data?.skills.map((item, key) => (
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
                            <h1 className="text-3xl font-medium mb-3">Hubungi {data?.fullname}</h1>
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
                                placeholder="Masukkan Tujuan Pesan Ini"
                                className="w-full border-2 p-3"
                                onChange={(e) => setSubject(e.target.value)}
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
                                onChange={(e) => setSenderName(e.target.value)}
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
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        {/* Input end */}
                        <button className="p-3 rounded-md w-full bg-[#FBB017] font-bold text-white mb-[28px]" onClick={handleSend}>
                        Kirim
                    </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export async function getServerSideProps({req, res, params}) {
    const user = getCookie("user", {req, res});
    const token = getCookie("token", {req, res})
    const { id } = params;
  
    const request = await axios.get(
      `${process.env.BE_URL}/api/list-talent?id=${id}`
    );

    
    if(!user && !token) {
        return {
            redirect: {
              permanent: false,
              destination: `/detail/${id}`
            }
        }
    }
  
    return {
      props: request.data,
    };
  }
  

export default hire;
