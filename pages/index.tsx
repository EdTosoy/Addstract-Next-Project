import About from "components/About";
import Header from "components/Header";
import Head from "next/head";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Preview from "components/Preview";
import Video from "../components/Video";
import Stats from "components/Stats";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div className=" bg-background bg-cover bg-center bg-no-repeat text-grayBlue">
      <Head>
        <title>Addstract</title>
        <meta
          name="description"
          content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Preview />
      <Video />
      <Stats />
      <Footer />
    </div>
  );
}
