"use client";
import Link from "next/link";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Elias_Wu_Feng_Resume.pdf";
    link.download = "Elias_Wu_Feng_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center p-5">
      <Link href="/" className="flex-shrink-0">
        <h1 className="text-4xl md:text-5xl font-bold">e</h1>
      </Link>
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
        <li>
          <Link href="#projects" className=" hover:text-neutral-500">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-neutral-500">
            Experience
          </Link>
        </li>

        <li>
          <button
            className="p-2 border border-gray-300 rounded-md hover:bg-neutral-100 hover:text-gray-800 transition duration-300"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
