import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import axios from "axios";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

function Detail(props) {
  const { data } = props;
  return (
    <div id="detail" className={poppins.className}>
      <Head>
        <title></title>
      </Head>
      <header className="container mx-auto pb-5">
        <Navbar />
      </header>

      <main className="min-h-[50vh] bg-[#F6F7F8] py-[40px]">
        <div className="container mx-auto text-center">
          <div className="bg-white drop-shadow-lg">
            <div className="bg-[#5E50A1] h-[200px] rounded-t-lg" />
            <div className="flex justify-center mb-14 mt-[-80px]">
              <img
                src={data?.photo}
                alt="avatar"
                className="w-[150px] h-[150px] rounded-full"
              />
            </div>

            <h1 className="text-3xl font-bold mb-4">{data?.fullname}</h1>
            <p className="mb-4 ">{data?.job}</p>

            <span className=" mb-2 flex gap-2 justify-center">
              <img src="/images/map.svg" />
              <p className="text-[#9EA0A5]">{data?.location}</p>
            </span>

            <p className="w-2/4 mx-auto text-[#9EA0A5] mb-4">
              {data?.desc}
            </p>

            <button className="bg-[#5E50A1] text-white p-3 rounded-md mb-4 w-[300px]">
              Hire
            </button>

            <h2 className="text-2xl font-bold">Skill</h2>
            <div className="flex flex-wrap w-3/4 md:w-1/4 mx-auto mt-4 justify-center gap-[10px]">
              {data?.skills.map((item, key) => (
                <div
                  className="bg-[#FBB01799] border-2 border-[#FBB017] py-1 px-5 rounded"
                  key={key}
                >
                  <p className="text-white text-[12px]">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex mx-auto mt-10 flex-col">
              <div className="flex gap-3 mb-3 justify-center">
                <span>
                  <img src="/images/mail.svg" />
                </span>
                <span>
                  <p>talent@gmail.com</p>
                </span>
              </div>
              <div className="flex gap-3 mb-3 justify-center">
                <span>
                  <img src="/images/instagram.svg" />
                </span>
                <span>
                  <p>@talent12</p>
                </span>
              </div>
              <div className="flex gap-3 mb-3 justify-center">
                <span>
                  <img src="/images/github.svg" />
                </span>
                <span>
                  <p>@talent12</p>
                </span>
              </div>
              <div className="flex gap-3 mb-3 justify-center">
                <span>
                  <img src="/images/gitlab.svg" />
                </span>
                <span>
                  <p>@talent12</p>
                </span>
              </div>
            </div>
            {/* Portofolio */}
            <div className="container mx-auto mt-10 p-8">
              <div className="flex flex-col md:flex-row gap-5">
                <h1 className="text-3xl underline font-bold decoration-[#5E50A1]">Portofolio</h1>
                <h1 className="text-3xl text-[#9EA0A5]">Pengalaman Kerja</h1>
              </div>
              {/* content */}
              <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-8 justify-center md:justify-start mt-10">
              {/* {[...new Array(countData)].map((item, key) =>  */}
              {[...new Array(6)].map((key) => (
                <div className="bg-[#5E50A1] w-[300px] rounded h-[300px] md:w-[300px] md:h-[200px]" key={key}/>
              ))}
              
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export async function getServerSideProps(props) {
  const { id } = props.params;

  const request = await axios.get(
    `http://localhost:3000/api/list-talent?id=${id}`
  );

  return {
    props: request.data,
  };
}

export default Detail;
