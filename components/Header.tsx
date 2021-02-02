import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "../ContextAPI/darkMode";

export default function Header() {
  const navLinks = [
    {
      name: "Home",
      id: "Home",
    },
    {
      name: "About us",
      id: "About",
    },
    {
      name: "Advantages",
      id: "Advantages",
    },
    {
      name: "Preview",
      id: "Preview",
    },
    {
      name: "Video",
      id: "Video",
    },
    {
      name: "Contact us",
      id: "Contact",
    },
  ];

  const { darkmode, setDarkmode } = useContext(DarkModeContext);
  return (
    <header className="grid-container bg-white dark:bg-DarkModeBlue dark:border-gray-900 sticky top-0 border-b z-50 ">
      <main className="col-start-2 col-end-3 flex items-center justify-between py-5">
        <div className="">
          <a href="#">
            <Image src="/images/Logo.png" width={150} height={25} alt="logo" />
          </a>
        </div>
        <div className="hidden md:flex text-grayBlue ">
          {navLinks.map(({ id, name }) => (
            <nav key={id} className="ml-5 hover:text-darkBlue">
              <Link href={`#${id}`}>{name}</Link>
            </nav>
          ))}
          <div
            className="cursor-pointer ml-4"
            onClick={() => setDarkmode((prev) => !prev)}
          >
            {darkmode ? (
              <box-icon
                name="certification"
                type="solid"
                color="#00EAF8"
              ></box-icon>
            ) : (
              <box-icon type="solid" name="moon" color="#F7618B"></box-icon>
            )}
          </div>
        </div>
        <div className="grid place-content-center cursor-pointer md:hidden">
          <box-icon name="menu" color="#0075C5"></box-icon>
        </div>
      </main>
    </header>
  );
}
