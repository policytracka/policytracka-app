import React from "react";
import Logo from "../../assets/Logo_white.png";
import { useNavigate, useParams } from "react-router-dom";
type Props = {};

const navContent = [
  {
    name: "Home",
    id: "home_page",
    path: "/",
  },
  {
    name: "เปรียบเทียบนโยบาย",
    id: "compare_policy_page",
    path: "",
  },
  {
    name: "ติดตามนโยบาย",
    id: "follow_policy_page",
    path: "",
  },
];

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="h-px-85">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img src={Logo} className="w-[237px] ml-[73px]" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            "w-full md:block md:w-auto" + (navbarOpen ? "" : " hidden")
          }
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 bg-transparent border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navContent.map((item) => (
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded bg-transparent md:p-0"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
