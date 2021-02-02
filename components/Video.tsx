import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "../ContextAPI/darkMode";
export default function Video() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <section className="grid-container  pt-0 md:pt-32 pb-20" id="Video">
      <main className="col-start-2 col-end-3 relative">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl mb-4 dark:text-white">
            Layered Video Player
          </h1>
          <p className="text-sm">Video player like never before</p>
          <div className="grid place-content-end">
            <Image
              src={`/images/${darkmode ? "VideoDark.png" : "Video.jpg"}`}
              width={862}
              height={448}
            />
          </div>
          <div className="text-center">
            <button
              className={`${
                darkmode ? "btn-primary-dark" : "btn-primary"
              } py-3 px-8 mt-4  text-white btn-primary transform hover:scale-105 rounded-full"`}
            >
              Get early access
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
