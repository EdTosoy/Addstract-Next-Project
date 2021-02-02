import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "../ContextAPI/darkMode";
export default function Advantages() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <section className="grid-container  pt-0 md:pt-32 pb-20" id="Advantages">
      <main className="col-start-2 col-end-3 flex flex-col-reverse md:flex-row-reverse justify-between items-center">
        <div className="max-w-sm">
          <h1 className="text-xl md:text-3xl  mb-4 dark:text-white ">
            Display your product as never before
          </h1>
          <p className="max-w-xs text-sm">
            Get all the benefits of an in-wall or in-ceiling speaker system
            without any of the hassle. Just replace a few lights around your
            house, and start streaming crisp, clear audio, everywhere.
          </p>
        </div>
        <div className="">
          <Image
            src={`/images/${darkmode ? "DevicesDark.png" : "Devices.jpg"}`}
            width={541}
            height={529}
            alt="Devices"
          />
        </div>
      </main>
    </section>
  );
}
