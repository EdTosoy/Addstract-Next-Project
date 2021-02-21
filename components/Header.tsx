import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../ContextAPI/appContext";

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

  const { darkmode, setDarkmode, openMenu, setOpenMenu } = useContext(
    AppContext
  );
  return (
    <header
      className="grid-container bg-white dark:bg-DarkModeBlue dark:border-gray-900 sticky top-0 border-b z-50 "
      onClick={() => {
        setOpenMenu((prev) => !prev);
        console.log(openMenu);
      }}
    >
      {openMenu && (
        <div className="col-start-1 md:hidden  col-end-4  ">
          <div className="top-16 border-t border-b shadow-3xl absolute w-full  text-center  p-6 bg-white dark:bg-DarkModeBlue dark:border-gray-900">
            {navLinks.map(({ name, id }) => (
              <a href={`#${id}`} key={name}>
                <nav className="cursor-pointer navigation my-4 hover:text-darkBlue">
                  {name}
                </nav>
              </a>
            ))}
            <div
              className="cursor-pointer"
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
        </div>
      )}
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
