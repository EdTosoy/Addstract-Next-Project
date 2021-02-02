import Image from "next/image";
export default function Stats() {
  return (
    <section className="grid-container  pt-0 md:pt-32 pb-20" id="Contact" >
      <main className="col-start-2 col-end-3 relative">
        <div className="text-center">
          <h1 className=" text-2xl md:text-3xl mb-4">Statistics & Information</h1>
          <p className="text-sm">Numbers speak louder than words</p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16 mb-4 ">
            <Image src="/images/Stat1.png" width={480} height={300} />
            <Image src="/images/Stat2.png" width={480} height={300} />
            <Image src="/images/Stat3.png" width={480} height={300} />
          </div>
          <div className="text-center">
            <button className="py-3 px-8  text-darkBlue border-2 transform hover:scale-105 rounded-full">
              View All Data
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
