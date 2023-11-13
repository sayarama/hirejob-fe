import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

function TalentList(props) {
    const [listData, setListData] = useState(props?.data?.slice(0, 4));
    const [currentPage, setCurrentPage] = useState(1);
    const countData = Math.round(props?.data?.length / 4);
    const [query, setQuery] = useState("")

    // search func

    useEffect(() => {
        const filteredData = props?.data?.filter(data =>
          data.skills?.some(skill => skill.toLowerCase().includes(query.toLowerCase()))
        );
    
        setListData(filteredData?.slice(0, 4));
      }, [query, props?.data]);

        // pagination func
    const handlePagination = (nextPage) => {
        setCurrentPage(nextPage);

        if (nextPage > 1) {
            setListData(props?.data?.slice(4 * (nextPage - 1), 4 * nextPage));
        } else {
            setListData(props?.data?.slice(0, 4));
        }
    };

    return (
        <div id="talent" className={poppins.className}>
            <Head>
                <title>Peworld | Talent List</title>
            </Head>
            <header>
                <Navbar />
                <div className="bg-[#5E50A1]">
                    <div className="container mx-auto p-4 text-white">
                        <h2 className="text-2xl">List Talent</h2>
                    </div>
                </div>
            </header>
            {/* Section 1 */}
            <main className=" bg-[#ececec]">
                <div className="container mx-auto px-4 py-8">
                    {/* Searchbar */}
                    <div className="flex items-center p-3 shadow-md rounded-md gap-3 bg-white">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Search for any talent"
                            onChange={(e) => setQuery(e.target.value)}
                        ></input>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                stroke="#9EA0A5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M21.0004 20.9999L16.6504 16.6499"
                                stroke="#9EA0A5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <button className="bg-[#5E50A1] rounded-md text-white px-5 py-2">
                            Search
                        </button>
                    </div>
                    {/* List Section */}
                    <div className="container mx-auto bg-white shadow-md rounded-md mt-8">
                        {listData.map((item, key) => (
                            <div key={key}>
                                <div className="flex flex-col py-10 p-3 gap-4 justify-center text-center items-center md:flex-row md:text-start">
                                    <img className="w-28 rounded-full" src={item?.photo} />
                                    <div className="w-full">
                                        <h2 className="mb-3 font-bold">{item?.fullname}</h2>
                                        <p className="mb-2 text-[#9EA0A5]">{item?.job}</p>
                                        <span className=" mb-2 justify-center flex md:justify-normal gap-2">
                                            <Image src="/images/map.svg" width={20} height={10} alt="map" />
                                            <p className="text-[#9EA0A5]">{item?.location}</p>
                                        </span>
                                        <span className="flex justify-center items-center md:justify-normal gap-5">
                                            {item?.skills.slice(0, 3).map((item, key) => (
                                                <div
                                                    className="bg-[#FBB01799] border-2 border-[#FBB017] py-1 px-5 rounded"
                                                    key={key}
                                                >
                                                    <p className="text-white text-[12px]">{item}</p>
                                                </div>
                                            ))}
                                            <p>+And More</p>
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        <Link href={`/detail/${item?.id}`}>
                                            <button className="md:float-right text-white bg-[#5E50A1] px-10 py-3 rounded-md">
                                                Lihat Profile
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center gap-[10] py-8">
                        {/* Previous */}
                        <button className="bg-white border-2 border-[#E2E5ED] w-[48px] h-[48px] rounded flex justify-center items-center">
                            <img src="/images/prev.png" alt="icon" />
                        </button>
                        {/* PageList */}
                        {[...new Array(countData)].map((item, key) => {
                            const increment = ++key;

                            return (
                                <button
                                    className={`w-[48px] h-[48px] rounded flex justify-center items-center ${increment === currentPage
                                            ? "bg-[#5E50A1] text-white text-[18px]"
                                            : "bg-white border-2 border-[#E2E5ED] text-[#9EA0A5] text-[18px]"
                                        }`}
                                    key={increment}
                                    onClick={() => handlePagination(increment)}
                                >
                                    <p>{increment}</p>
                                </button>
                            );
                        })}
                        {/* next */}
                        <button className="bg-white border-2 border-[#E2E5ED] w-[48px] h-[48px] rounded flex justify-center items-center">
                            <img src="/images/next.png" />
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

// Change to ssr
export async function getServerSideProps() {
    const request = await axios.get(`${process.env.BE_URL}/api/list-talent`);

    return {
        props: request.data,
    };
}

export default TalentList;
