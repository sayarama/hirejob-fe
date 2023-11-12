import {React} from 'react'

function Searchbar() {
  return (
    <div className="flex items-center p-3 shadow-md rounded-md gap-3 bg-white">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Search for any talent"
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
  )
}

export default Searchbar