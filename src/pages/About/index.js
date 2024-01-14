import React from "react";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import logo1 from "../../assets/icons/icon-1.svg";
import logo2 from "../../assets/icons/icon-2.svg";
import logo3 from "../../assets/icons/icon-3.svg";
import Footer from "../../components/Footer";
import authentic from "../../assets/icons/authentic.png";
import delivery from "../../assets/icons/freeDelivery.png";
import price from "../../assets/icons/betterPrice.png";
import freeliving from "../../assets/icons/preservative.png";
import artifical from "../../assets/icons/noArtificial.png";
const About = () => {
  return (
    <>
      <nav className="w-full container mx-auto flex justify-center items-center py-2 shadow-md">
        <Link to="/">
          <img className="w-14 rounded-full" src={Logo} alt="logo" />
        </Link>
      </nav>
      <div className="container mx-auto flex justify-around flex-col m-4 p-6 text-center sm:flex-row sm:px-10 sm:items-center">
        <img
          className="rounded-full w-96 mx-auto mb-10 sm:w-96 sm:mb-0"
          src={Logo}
          alt="logo"
        />
        <div className="flex flex-col text-center">
          <Typography variant="h3" gutterBottom>
            About MenWell Co.
          </Typography>
          <p className="text-lg w-96 text-center mx-auto sm:text-lg sm:text-center sm:w-10/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla
            nisi officiis saepe repudiandae reiciendis aperiam non quidem culpa
            laudantium neque alias, ipsa consequuntur quos quaerat! Maxime
            ducimus sint soluta.
          </p>
        </div>
      </div>
      <Typography sx={{ textAlign: "center" }} variant="h2" gutterBottom>
        How are we Better !
      </Typography>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 sm:flex-row sm:justify-around">
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={logo1}
              alt="logo1"
              sx={{ padding: "3rem" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Handpicked Curation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Authentic Products Sourced from Brands
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={logo2}
              alt="logo2"
              sx={{ padding: "3rem" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                No Harmful Anything
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All Products are free from Preservatives, Palm Oil, Artificial
                Sweeteners
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={logo3}
              alt="logo3"
              sx={{ padding: "3rem" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Free Shipping
              </Typography>
              <Typography variant="body2" color="text.secondary">
                On All Orders above Rs.199
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="container mx-auto mt-14 flex flex-col justify-center items-center px-24 sm:flex-row sm:justify-around">
        <div className="p-4 max-w-72 text-center">
          <Typography variant="h4">Who we are</Typography>
          <p>A Bunch of Health Conscious Consumers turned Entrepreneurs</p>
        </div>
        <div className="p-4 max-w-72 text-center">
          <Typography variant="h4">Our Purpose</Typography>
          <p>
            Building an online store every Indian consumer can blindly trust
          </p>
        </div>
        <div className="p-4 max-w-72 text-center">
          <Typography variant="h4">Our mission</Typography>
          <p>To Help Indians Discover and Consume Better</p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center space-y-4 p-6 mt-10 sm:flex-row sm:space-x-6">
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500  ">
          <Typography variant="h5">100% Authentic Products</Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={authentic}
            alt="authentic"
          />
          <p className="text-xl">Handpicked from Honest Brands</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography variant="h5">Free delivery</Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={delivery}
            alt="delivery"
          />
          <p className="text-xl">On all orders ₹199</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography variant="h5">Better Prices</Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={price}
            alt="price"
          />
          <p className="text-xl">Exclusive Discounts Everyday</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography variant="h5">Preservative Free Living</Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={freeliving}
            alt="living"
          />
          <p className="text-xl">Say No to Harmful Chemicals</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography variant="h5">No Artifical Sweetners</Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={artifical}
            alt="artificial"
          />
          <p className="text-xl">Say Yes to Better Living</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
