import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Home() {
  
  return (
    <div id="page-home" className={poppins.className}>
      <Head>
        <title>Peworld | Home</title>
      </Head>
      {/* Header */}
      <Navbar />

      {/* Section 1 */}
      <section className="container mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">
            Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
          </h1>
          <p className="mt-10 mb-10">
          Dengan keahlian terbaik talent kami, kita siap <br/> untuk memimpin revolusi 4.0 menuju perubahan yang positif.
          </p>
          <Link href="/detail">
          <button className="bg-[#5E50A1] px-5 py-3 rounded text-white">
            Mulai Dari Sekarang
          </button>
          </Link>
        </div>

        <div className="order-first md:order-last">
          <Image src="/images/img-3.png" width={600} height={600} alt="hero-image" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <Image src="/images/img-1.png" width={600} height={600} alt="hero-image" />
        </div>

        <div>
          <h1 className="text-4xl md:text-start text-center md:text-5xl mb-10">
            Kenapa harus mencari tallent <br /> di peworld
          </h1>

          {[
            "Berbagai macam bakat.",
            "Jangkauan yang global dan lengkap.",
            "Penyaringan talent yang ketat.",
            "Pengalaman pengguna yang efisien dan baik.",
          ]?.map((item, id) => (
            <div className="flex items-center w-3/4 mx-auto gap-5 mb-5 justify-left md:justify-start">
              <Image
                className="bg-[#5E50A1] p-1 rounded-full"
                src="/images/Vectorlayers-1.png"
                alt="logo"
                width={20}
                height={20}
                key={id}
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="container mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10 p-5">
        <div>
          <h1 className="text-5xl mb-5">Skill Tallent</h1>
          <p className="text-lg text-center md:text-start mb-5">Skill para talent memungkinkan setiap individu untuk <br/> menonjolkan beragam keterampilan yang mereka miliki dan <br/> tentunya bisa memenuhi keinginan klien.</p>
          <div className="grid grid-cols-2">
            <div>
            {[
            "Java",
            "Kotlin",
            "PHP",
            "Javascript",
          ]?.map((item, id) => (
            <div className="flex items-center gap-5 mb-5">
              <Image
                width={20}
                height={20}
                alt="icon"
                className="bg-[#5E50A1] p-1 rounded-full"
                src="/images/Vectorlayers-1.png"
                key={id}
              />
              <p>{item}</p>
            </div>
          ))}
            </div>
            <div>
            {[
            "Golang",
            "C++",
            "Ruby",
            "+Dan Lainnya"
          ]?.map((item, id) => (
            <div className="flex items-center gap-5 mb-5">
              <Image
                width={20}
                height={20}
                alt="icon"
                className="bg-[#5E50A1] p-1 rounded-full"
                src="/images/Vectorlayers-1.png"
                key={id}
              />
              <p>{item}</p>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div className="order-first md:order-last">
          <Image src="/images/img-2.png" width={600} height={600} alt="hero-image"/>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#5E50A1] mt-10 mb-20 w-2/3 p-5 md:p-11 mx-auto rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl text-center md:flex md:justify-between md:items-center">
        <h1 className="text-2xl mb-10 md:mb-0 md:3xl text-white">Tunggu apa lagi?<br/> Cari talent favoritmu!! </h1>
        <div>
        <Link href="/detail">
        <button className="bg-slate-100 text-[#5E50A1] md:p-3 p-2 rounded-md">
          Mulai Dari Sekarang
        </button>
        </Link>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
