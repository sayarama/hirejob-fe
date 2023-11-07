import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      {/* Header */}
      <Navbar />

      {/* Section 1 */}
      <section className="container mx-auto flex justify-around items-center mt-10">
        <div>
          <h1 className="text-6xl">
            Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
          </h1>
          <p className="mt-10 mb-10">
            Lorem ipsum dolor sit ament, cosetectur adipiscing elit. In <br />{" "}
            euismod ipsut et dui rhocus auctor.
          </p>
          <button className="bg-purple-800 px-5 py-3 rounded text-white">
            Mulai Dari Sekarang
          </button>
        </div>

        <div>
          <img src="/images/img-3.png" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto flex justify-around items-center mt-10">
        <div>
          <img src="/images/img-1.png" />
        </div>

        <div>
          <h1 className="text-6xl">
            Kenapa harus mencari tallent <br/> di peworld
          </h1>
          <span className="flex gap-5 mb-5 mt-5">
            <img className="bg-purple-800 w-6 p-1 rounded-full" src="/images/Vectorlayers-1.png"/>
            <p>Lorem Ipsum Dolor Sit Amet.</p>
          </span>
          <span className="flex gap-5  mb-5 mt-5">
            <img className="bg-purple-800 w-6 p-1 rounded-full" src="/images/Vectorlayers-1.png"/>
            <p>Lorem Ipsum Dolor Sit Amet.</p>
          </span>
          <span className="flex gap-5  mb-5 mt-5">
            <img className="bg-purple-800 w-6 p-1 rounded-full" src="/images/Vectorlayers-1.png"/>
            <p>Lorem Ipsum Dolor Sit Amet.</p>
          </span>
          <span className="flex gap-5  mb-5 mt-5">
            <img className="bg-purple-800 w-6 p-1 rounded-full" src="/images/Vectorlayers-1.png"/>
            <p>Lorem Ipsum Dolor Sit Amet.</p>
          </span>
        </div>
      </section>

      {/* Section 3 */}
      <section className="container mx-auto flex justify-around items-center mt-10">

      </section>
    </>
  );
}
