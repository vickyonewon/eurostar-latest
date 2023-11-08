import { Link, useNavigate } from "react-router-dom";
import useNavbarController from "./navbar-controller";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";

interface props {
  textColor: string;
  bgColor: "#1d1b1a" | "#f4f2f1";
}

const Navbar = () => {
  const navbarController = useNavbarController();
  const nav = useNavigate();
  function handleBookNow() {
    nav("/rooms");
  }
  const cart = useSelector((state: any) => state.cart);
  const cartLength = cart.length;

  return (
    <nav className={`sticky top-0 z-[1000] bg-[${navbarController.color}]`}>
      <div className="container mx-auto">
        <div className="flex items-center py-2">
          <Link className="navbar-brand mr-10" to="/">
            <img
              src="/assets/eurostar-logo.png"
              alt="logo"
              className="w-30 pl-[1rem]"
            />
          </Link>
          <button
            className="lg:hidden mx-4 text-white absolute right-2"
            onClick={navbarController.toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navbarController.isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <div
            className={`lg:flex justify-between lg:space-x-8 ${
              navbarController.isOpen ? "block" : "hidden"
            }`}
          >
            <div className={`absolute w-[70vw] items-baseline lg:m-0 left-0 top-0 duration-500
             bg-[${navbarController.color}] text-white h-[100vh] lg:h-fit px-[2rem] py-[6rem]  flex flex-col lg:p-0 lg:bg-inherit lg:relative lg:flex-row lg:space-x-10 lg:justify-center items-center`}>
              <Link
                className={`nav-link text-[1.3rem] hover:text-[#a45c32]  ${
                  navbarController.isRouteActive("/")
                    ? "text-[#a45c32]"
                    : `text-${
                        navbarController.color == "#f4f2f1" ? "black" : "white"
                      }`
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link text-[1.3rem] m-2 hover:text-[#a45c32]  ${
                  navbarController.isRouteActive("/about")
                    ? "text-[#a45c32]"
                    : `text-${
                        navbarController.color == "#f4f2f1" ? "black" : "white"
                      }`
                }`}
                to="/about"
              >
                About
              </Link>
              <div className="relative group">
                <Link
                  className={`nav-link text-[1.3rem] hover:text-[#a45c32] ${
                    navbarController.isRouteActive("/rooms")
                      ? "text-[#a45c32]"
                      : `text-${
                          navbarController.color == "#f4f2f1"
                            ? "black"
                            : "white"
                        }`
                  }`}
                  to="/rooms"
                >
                  Rooms<span className=" ml-5 items-center">&#8893;</span>
                </Link>
                <ul className="group dropdown-menu border justify-center items-center text-center text-black bg-white border-gray-800 w-[15rem] hidden rounded rounded-1xl absolute z-[1000] py-[2rem] mt-0 space-y-2 group-hover:block">
                  <li>
                    <Link
                      className="dropdown-item hover:bg-[#f4f4f4] hover:text-amber-800 px-10 py-2"
                      to="/rooms/executive"
                    >
                      Executive Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover:bg-[#f4f4f4] hover:text-amber-800 px-10 py-2"
                      to="/rooms/deluxe"
                    >
                      Deluxe Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover:bg-[#f4f4f4] hover:text-amber-800 px-10 py-2"
                      to="/rooms/luxury"
                    >
                      Luxury Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover:bg-[#f4f4f4] hover:text-amber-800 px-10 py-2"
                      to="/rooms/standard"
                    >
                      Standard Rooms
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className={`nav-link text-[1.3rem] m-2 hover:text-[#a45c32] ${
                  navbarController.isRouteActive("/reviews")
                    ? "text-[#a45c32]"
                    : `text-${
                        navbarController.color == "#f4f2f1" ? "black" : "white"
                      }`
                }`}
                target="_blank"
                to="https://www.tripadvisor.in/Hotel_Review-g297647-d2041217-Reviews-EuroStar_Inn-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html"
              >
                Review Us
              </Link>
              <Link
                className={`nav-link text-[1.3rem] m-2 hover:text-[#a45c32]  ${
                  navbarController.isRouteActive("/contact-us")
                    ? "text-[#a45c32]"
                    : `text-${
                        navbarController.color == "#f4f2f1" ? "black" : "white"
                      }`
                }`}
                to="/contact-us"
              >
                Contact
              </Link>
              <button className="border-none bg-[#ab6034] lg:hidden m-2 text-[1.1rem] text-white w-40 h-12 p-2 hover:bg-[#1f1c1b] border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
            </div>
            <div className="absolute right-10 top-3 flex">
              <button
                onClick={handleBookNow}
                className="border-none bg-[#ab6034] text-[1.1rem] hidden lg:block text-white w-40 h-14 p-2 hover:bg-[#1f1c1b] border-[4px] hover:border-white"
              >
                Book Now {" >"}
              </button>
              {cartLength >= 1 && (
                <Link to="/cart" className="m-auto ml-[1rem]">
                  <LocalMallIcon
                    style={{ fontSize: "2rem", color: "#ab6034" }}
                  />
                  <span className="text-gray-400">{cartLength}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
