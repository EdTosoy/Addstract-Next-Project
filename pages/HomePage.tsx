import About from "../components/About";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Preview from "../components/Preview";
import Video from "../components/Video";
import React, { useContext } from "react";
import Stats from "../components/Stats";
import { DarkModeContext } from "../ContextAPI/darkMode";
import Head from "next/head";

export default function HomePage() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <div className={darkmode ? " bg-DarkModeBlue " : "bg-white"}>
      <Head>
        <title>Addstract</title>
        <meta
          name="description"
          content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
        />
      </Head>
      <div
        className={`${
          darkmode && "dark bg-backgroundDark"
        } bg-background  bg-cover bg-center bg-no-repeat text-grayBlue`}
      >
        <Header />
        <Hero />
        <About />
        <Advantages />
        <Preview />
        <Video />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}
