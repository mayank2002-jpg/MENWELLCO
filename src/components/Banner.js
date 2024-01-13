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
import services from "../assets/images/services.avif";
import Footer from "./Footer";
import Products from "../pages/Shop/Products";
import { PRODUCTS } from "../products";
import Contact from "./Contact";
import FAQ from "./FAQ";
const Banner = () => {
  return (
    <>
      <section className="container mx-auto px-4 ">
        <div className="mt-4 text-center " id="banner">
          <h2 className="font-bold text-white text-6xl relative top-32">
            Mens Health. It's Our Speciality
          </h2>
          <p className="text-white relative top-40 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consequatur.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium relative top-52 hover:bg-yellow-300"
          >
            Book Free Appointment
          </a>
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
          </div>
          <div id="blog2">
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
          </div>
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
        </div>
      </div>
      {/* Services */}
      <div>
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
      <div id="service" className="container mx-auto flex justify-around mt-10">
        <div id="service1">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={services}
                alt="services"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Service 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, nostrum.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div id="service2">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={services}
                alt="services"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Service 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, nostrum.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={services}
              alt="services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Service 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                nostrum.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
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
