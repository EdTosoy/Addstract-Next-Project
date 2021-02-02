import Image from "next/image";

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
  return (
    <header className="grid-container bg-white  sticky top-0 border z-50 ">
      <main className="col-start-2 col-end-3 flex items-center justify-between py-5">
        <div className="">
          <a href="#">
            <Image src="/images/Logo.png" width={150} height={25} alt="logo" />
          </a>
        </div>
        <div className="hidden md:flex text-grayBlue ">
          {navLinks.map(({ id, name }) => (
            <nav key={id} className="ml-5 hover:text-darkBlue">
              <a href={`#${id}`}>{name}</a>
            </nav>
          ))}
        </div>
        <div className="grid place-content-center cursor-pointer md:hidden">
          <box-icon name="menu" color="#0075C5" ></box-icon>
        </div>
      </main>
    </header>
  );
}
