import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      {/* Header */}
      <Navbar />

      {/* Section 1 */}
      <section className="container mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <h1 className="text-4xl md:text-6xl">
            Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
          </h1>
          <p className="mt-10 mb-10">
            Lorem ipsum dolor sit ament, cosetectur adipiscing elit. In <br />{" "}
            euismod ipsut et dui rhocus auctor.
          </p>
          <button className="bg-[#5E50A1] px-5 py-3 rounded text-white">
            Mulai Dari Sekarang
          </button>
        </div>

        <div className="order-first md:order-last">
          <img src="/images/img-3.png" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <img src="/images/img-1.png" />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl mb-10">
            Kenapa harus mencari tallent <br /> di peworld
          </h1>

          {[
            "Berbagai macam bakat.",
            "Jangkauan yang global dan lengkap.",
            "Penyaringan talent yang ketat.",
            "Pengalaman pengguna yang efisien dan baik.",
          ]?.map((item, key) => (
            <div className="flex items-center gap-5 mb-5 justify-center md:justify-start">
              <img
                className="bg-[#5E50A1] p-1 rounded-full"
                src="/images/Vectorlayers-1.png"
                key={key}
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
          <p className="text-lg mb-5">Lorem ipsum dolor sit, amet consectetur adipiscing elit. In <br/> euismod ipsum et dui rhoncus auctor.</p>
          <div className="grid grid-cols-2">
            <div>
            {[
            "Java",
            "Kotlin",
            "PHP",
            "Javascript",
          ]?.map((item, key) => (
            <div className="flex items-center gap-5 mb-5">
              <img
                className="bg-[#5E50A1] p-1 rounded-full"
                src="/images/Vectorlayers-1.png"
                key={key}
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
            "10+ Bahasa lainnya"
          ]?.map((item, key) => (
            <div className="flex items-center gap-5 mb-5">
              <img
                className="bg-[#5E50A1] p-1 rounded-full"
                src="/images/Vectorlayers-1.png"
                key={key}
              />
              <p>{item}</p>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img src="images/img-2.png"/>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#5E50A1] mt-10 mb-20 w-2/3 p-5 md:p-11 mx-auto rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl text-center md:flex md:justify-between md:items-center">
        <h1 className="text-2xl mb-10 md:mb-0 md:3xl text-white">Lorem Ipsum <br/> Dolor Sit Amet</h1>
        <div>
        <button className="bg-slate-100 text-[#5E50A1] md:p-3 p-2 rounded-md">
          Mulai Dari Sekarang
        </button>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </>
  );
}
