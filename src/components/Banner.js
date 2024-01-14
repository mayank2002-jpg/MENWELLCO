import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import brain from "../assets/images/brain.avif";
import aging from "../assets/images/aging.avif";
import life from "../assets/images/life.avif";
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
          className=" container mx-auto flex items-center justify-around m-5"
        >
          <div id="blog1">
            <Link to="/blog1">
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={aging}
                    alt="Reduce aging"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Reduce Aging
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, nostrum.
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
                    image={brain}
                    alt="Enhance Brain"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Enhance Brain
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, nostrum.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
          <Link to="/blog3">
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={life}
                  alt="Optimize your life"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Optimize Your Life
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, nostrum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
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
      {/* <div className="container mx-auto text-center">
        <div className="flex justify-around m-10">
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Judith Black
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900"
                    ></svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Judith Black
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900"
                    ></svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Judith Black
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900"
                    ></svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </div> */}

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
