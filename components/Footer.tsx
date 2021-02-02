import Image from "next/image";
export default function Footer() {
  const footerLinks1 = [
    "Home",
    "About us",
    "Advantages",
    "Preview",
    "Video",
    "Contact us",
  ];
  const footerLinks2 = [
    "Terms & Conditions",
    "Privacy policy",
    "Support",
    "Chrome Extension",
  ];
  const footerLinks3 = [
    "Facebook",
    "Instagram",
    "Twitter",
    "Behance",
    "Medium",
  ];
  return (
    <footer className="grid-container">
      <main className="col-start-2 col-end-3 flex flex-col md:flex-row justify-between border-t-2 pt-10 md:pt-20 pb-8 md:pb-16">
        <div className="max-w-md text-xl mb-4 md:mb-0">
          <h1>
            Build your own future. <br />
            Download now free and get 100% boost!
          </h1>
        </div>
        <div className="flex gap-2 justify-between md:justify-start">
          <button className="py-3 px-5 text-sm text-white btn-primary transform hover:scale-105 rounded-full">
            Get early access
          </button>
          <button className="py-3 px-5 text-sm text-darkBlue border-2 transform hover:scale-105 rounded-full">
            View All Data
          </button>
        </div>
      </main>
      <main className="col-start-2 col-end-3 grid grid-cols-2 md:grid-cols-4 justify-between border-t-2 py-10 text-sm">
        <div className="mb-4">
          {footerLinks1.map((element) => (
            <h1 className="hover:text-darkBlue cursor-pointer" key={element}>
              {element}
            </h1>
          ))}
        </div>
        <div className="mb-4">
          {footerLinks2.map((element) => (
            <h1 className="hover:text-darkBlue cursor-pointer" key={element}>
              {element}
            </h1>
          ))}
        </div>
        <div className="mb-4">
          {footerLinks3.map((element) => (
            <h1 className="hover:text-darkBlue cursor-pointer" key={element}>
              {element}
            </h1>
          ))}
        </div>
        <div className="mb-4">
          <p className="mb-4">
            231 North Star 34th Street, Suite #100 Cupertino, 98103
          </p>
          <Image src="/images/Logo.png" width={150} height={25} alt="logo" />
        </div>
      </main>
      <p className="col-start-2 col-end-3 text-center text-sm mb-10">
        © 2021 Copyrigts are Addstract
      </p>
    </footer>
  );
}
