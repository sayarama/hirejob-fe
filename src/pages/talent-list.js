import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function TalentList() {
    return (
        <>
            <header>
                <Navbar />
                <div className="bg-[#5E50A1]">
                    <div className="container mx-auto p-4 text-white">
                        <h2 className="text-2xl">Top Jobs</h2>
                    </div>
                </div>
            </header>
            {/* Section 1 */}
            <main className=" bg-[#ececec]">
                <div className="container mx-auto px-4 py-8">
                    {/* Searchbar */}
                    <div className="flex items-center p-1 shadow-md rounded-md gap-3 bg-white">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Search for any skill"
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
                        {/* List Section */}
                        
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default TalentList;
