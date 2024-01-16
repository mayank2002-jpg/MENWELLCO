import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import React, { useContext, useState } from "react";
import { useAlert } from 'react-alert';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import AuthContext from "../context/AuthProvider";
import { ShopContext } from "../context/shop-context";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Blogs", href: "#blogs" },
  { name: "About", href: "/about" },
  { name: "Book Free Appointment", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const alert = useAlert()
  let authorize = false
  const { auth,setAuth } =useContext(AuthContext)
  const navigate  = useNavigate()
  if(auth === null || Object.keys(auth).length === 0){
    authorize=false
  }else{
    authorize=true
  }
  const handleLogout = () => {
    setAuth(false);
    alert.success("Logged Out Successfully")
    navigate('/', { state: { authorize: false } });
  };



  const [isHovering, setIsHovering] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const cartItemsCount = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const handleCartClick = () => {
    if (cartItemsCount === 0) {
      alert.show('Your cart is empty');
      navigate('/')
    } else {
      navigate('/cart');
    }
  };

  // Home;
  // Products;
  // Services;
  // Blogs;
  // About;

  return (
    <>
      <div className="bg-yellow-400 text-center font-semibold p-1">
        Get 5% Off on All Orders
      </div>

      <Disclosure as="nav" className="bg-black sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-24 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex ml-10 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="h-20 rounded-full w-auto"
                        src={logo}
                        alt="logo"
                      />
                    </div>
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-6 sm:mt-5">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-yellow-500 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Badge badgeContent={cartItemsCount} color="primary"  onClick={ handleCartClick } >
                    <Link>
                      <button
                        type="button"
                        className="relative rounded-full bg-white p-1 text-yellow-400 hover:text-yellow-500 "
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View cart</span>
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                  </Badge>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                  {authorize ? (
          // Render logout link
          <Link
            onClick={handleLogout} // Call the handleLogout function on click
            style={{
              textDecoration: isHovering ? "underline" : "none",
              paddingLeft: "15px",
              marginRight: "10px",
              fontSize: "1.25rem",
              color: "white",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
          >
            Logout
          </Link>
        ) : (
          // Render login link
          <Link
            to="/login"
            style={{
              textDecoration: isHovering ? "underline" : "none",
              paddingLeft: "15px",
              marginRight: "10px",
              fontSize: "1.25rem",
              color: "white",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
          >
            Account
          </Link>
        )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-yellow-500 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
