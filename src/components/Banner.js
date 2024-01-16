import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import brain from "../assets/images/brain.avif";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import logo from "../assets/images/logo.jpg";
import Footer from "./Footer";
import Products from "../pages/Shop/Products";
import { PRODUCTS } from "../products";
import Contact from "./Contact";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/banner.jpg";
const Banner = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <div
          id="default-carousel"
          className="relative w-full mt-8"
          data-carousel="slide"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={carousel1}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div className="relative top-5 px-4 opacity-100 text-center">
                <h1 className="text-3xl text-yellow-400 font-semibold sm:text-7xl sm:mt-10">
                  Welcome To MenWell Co.
                </h1>
                <p className="text-white text-lg mt-8 mb-4 sm:text-2xl sm:mt-10">
                  We belive that every man deserves to live his best life, full
                  of vitality, confidence , and well-being.
                </p>
                <a
                  href="#contact"
                  className="bg-yellow-400 rounded-full p-2 border-none cursor-pointer font-md mt-16 hover:bg-yellow-300 sm:w-60 sm:mx-auto sm:line-clamp-1 sm:font-medium"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={carousel2}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div className="relative top-12 px-4 opacity-100 text-center">
                <h1 className="text-3xl text-yellow-400 font-semibold sm:text-7xl sm:mt-10">
                  Mens Health. It's our Priority
                </h1>
                <p className="text-white text-xl mt-2 sm:text-2xl sm:mt-10">
                  "Take the first step towards a healthier, happier"
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
      <div>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "2.5rem",
            marginBottom: "2rem",
            textTransform: "uppercase",
          }}
          variant="h4"
        >
          Read our Latest Blog
        </Typography>

        <div
          id="blog"
          className=" container mx-auto flex items-center justify-evenly m-5"
        >
          <div id="blog1">
            <Link to="/blog1">
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blog1}
                    alt="Reduce aging"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      The Impact of Diet and Exercise on Men's Sexual Health
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Welcome to the Menwell Co. blog, where we believe that
                      true wellness goes beyond the ordinary.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
          <div id="blog2">
            <Link to="/blog2">
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blog2}
                    alt="Enhance Brain"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      The Role of Stress in Sexual Dysfunction: Strategies for
                      Coping
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In the hustle and bustle of modern life, stress has become
                      an unwelcome companion for many men, impacting not only
                      their mental well-being but also their sexual health.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      {/* Services */}
      <div id="services">
        <img
          className=" mt-10 rounded-full w-20 mx-auto"
          src={logo}
          alt="logo"
        />
        <p className="text-yellow-400 font-semibold text-center text-2xl ">
          What we Do?
        </p>
        <h3 className="text-center uppercase font-bold text-5xl">
          our Services
        </h3>
      </div>
      <div
        id="service"
        className="container mx-auto flex justify-around mt-10 sm:flex-col sm:text-center sm:items-center"
      >
        <h2 className="font-bold text-white text-5xl p-4 ">
          Evaluate your sexual wellness
        </h2>
        <p className="text-white px-4 sm:text-2xl sm:max-w-2/3 sm:text-center sm:mx-auto sm:-mt-5">
          "Take the first step towards a healthier, happier you – Evaluate your
          sexual wellness with our confidential and empowering assessment form."
        </p>
        <a
          href="#googleform"
          className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium mt-10 hover:bg-yellow-300 sm:w-60 sm:mx-auto sm:-mt-10"
        >
          Click Here Now
        </a>
      </div>

      {/* Products range */}
      <div className="container mx-auto">
        <div>
          <img
            className=" mt-10 rounded-full w-20 mx-auto"
            src={logo}
            alt="logo"
          />
          <p className="text-yellow-400 font-semibold text-center text-2xl ">
            We are all about using new age technology...
          </p>
          <h3 className="text-center uppercase font-bold text-5xl">
            our product range
          </h3>
        </div>
        <div id="products" className="flex justify-center ">
          {PRODUCTS.map((product) => (
            <Products data={product} />
          ))}
        </div>
      </div>

      {/* Testimonials */}

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Banner;
