import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "../ContextAPI/darkMode";
export default function Stats() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <section className="grid-container  pt-0 md:pt-32 pb-20" id="Contact">
      <main className="col-start-2 col-end-3 relative">
        <div className="text-center">
          <h1 className=" text-2xl md:text-3xl mb-4 dark:text-white">
            Statistics & Information
          </h1>
          <p className="text-sm">Numbers speak louder than words</p>
          <div className="grid grid-cols-1  gap-5 md:grid-cols-3 mt-10 md:mt-16 mb-4 ">
            <Image
              src={`/images/${darkmode ? "Stat1.png" : "Stat1.jpg"}`}
              width={480}
              height={300}
            />
            <Image
              src={`/images/${darkmode ? "Stat2.png" : "Stat2.jpg"}`}
              width={480}
              height={300}
            />
            <Image
              src={`/images/${darkmode ? "Stat3.png" : "Stat3.jpg"}`}
              width={480}
              height={300}
            />
          </div>
          <div className="text-center">
            <button className="py-3 px-8  text-darkBlue border-2 dark:border-gray-700 transform hover:scale-105 rounded-full">
              View All Data
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
