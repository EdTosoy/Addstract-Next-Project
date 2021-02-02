import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "../ContextAPI/darkMode";
export default function Hero() {
  const companies = [
    {
      name: "google",
      image: "/images/Logo1.png",
    },
    {
      name: "facebook",
      image: "/images/Logo2.png",
    },
    {
      name: "slack",
      image: "/images/Logo3.png",
    },
    {
      name: "viber",
      image: "/images/Logo4.png",
    },
    {
      name: "behance",
      image: "/images/Logo5.png",
    },
    {
      name: "dribble",
      image: "/images/Logo6.png",
    },
  ];

  const { darkmode } = useContext(DarkModeContext);
  return (
    <section className="grid-container pt-10" id="Home">
      <main className="col-start-2 col-end-3 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="sm:text-4xl  mb-4 md:mb-10 leading-10 dark:text-white ">
            Do you want to <br className="hidden md:block" />
            <span className="font-semibold">impress</span> your clients?
          </h1>
          <button
            className={`${
              darkmode ? "btn-primary-dark" : "btn-primary"
            } py-3 px-8 text-white transform hover:scale-105 rounded-full`}
          >
            Get early access
          </button>
        </div>
        <div className="">
          <Image
            src={`/images/${darkmode ? "DeviceDark" : "Device"}.png`}
            width={640}
            height={519}
            alt="Device"
          />
        </div>
      </main>
      <div className=" col-start-2 col-end-3 hidden md:block">
        <div className="flex justify-center mb-1 mt-5">
          {companies.map(({ image, name }) => (
            <div className="grid place-content-center" key={name}>
              <Image src={image} width={181} height={78} alt={name} />
            </div>
          ))}
        </div>

        <p className="text-center border-t dark:border-gray-900 pt-7">Trusted by the world’s best</p>
      </div>
    </section>
  );
}
