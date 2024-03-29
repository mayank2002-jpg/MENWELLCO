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
import Header from "../../components/Header";
const About = () => {
  return (
    <>
      <Header />
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
          <p className="text-lg w-96 text-left mx-auto sm:text-lg sm:w-10/12 sm:text-left">
            Welcome to Menwell Squad pvt ltd., your premier destination for
            men's sexual wellness. At Menwell, we believe in empowering men to
            thrive physically, mentally, and emotionally. We recognize that
            well-being is a lifelong journey, and we are dedicated to being your
            unwavering companion on that path. As advocates for holistic
            well-being, we strive to break down stigmas surrounding men's sexual
            health and create an open, judgment-free space where you can
            prioritize your wellness. Whether you're seeking solutions for
            physical vitality, mental resilience, or emotional fulfillment,
            Menwell Squad is your trusted partner. Our commitment to excellence
            extends to the selection of products we offer. We meticulously
            curate a range of high-quality items that align with our values and
            commitment to your well-being. From supplements that support
            physical vitality to resources that nurture mental and emotional
            resilience, our products are designed to meet the diverse needs of
            the modern man. At Menwell Squad, we envision a world where men
            confidently embrace their journey towards optimal well-being. Our
            team is comprised of passionate individuals dedicated to providing
            you with the tools and knowledge needed to navigate this journey
            successfully. Join us on the path to thriving health, balance, and
            confidence. Explore Menwell Squad, where your well-being is our
            priority.
          </p>
        </div>
      </div>
      <Typography sx={{ textAlign: "center" }} variant="h2" gutterBottom>
        How are we Better !
      </Typography>
      <div className="container mx-auto flex flex-col items-center justify-around space-y-6 sm:flex-row sm:justify-evenly sm:-space-x-10">
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
          <p>India's 1st Men's sexual wellness Brand</p>
        </div>
        <div className="p-4 max-w-72 text-center">
          <Typography variant="h4">Our Purpose</Typography>
          <p>
            World where men confidently embrace their journey towards optimal
            well-being.
          </p>
        </div>
        <div className="p-4 max-w-72 text-center">
          <Typography variant="h4">Our mission</Typography>
          <p>
            our mission is to empower men to thrive physically, mentally, and
            emotionally.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center space-y-4 p-6 mt-10 sm:flex-row sm:space-x-6">
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500 ">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            100% Authentic Products
          </Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={authentic}
            alt="authentic"
          />
          <p className="text-xl text-center">Handpicked from Honest Brands</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Free delivery
          </Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={delivery}
            alt="delivery"
          />
          <p className="text-xl text-center">On all orders ₹199</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Better Prices
          </Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={price}
            alt="price"
          />
          <p className="text-xl text-center">Exclusive Discounts Everyday</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Preservative Free Living
          </Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={freeliving}
            alt="living"
          />
          <p className="text-xl text-center">Say No to Harmful Chemicals</p>
        </div>
        <div className="border-2 border-black w-64 h-72 p-2 flex flex-col justify-center items-center rounded-xl shadow-lg shadow-slate-500">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            No Artifical Sweetners
          </Typography>
          <img
            className="max-w-28 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-75 ..."
            src={artifical}
            alt="artificial"
          />
          <p className="text-xl text-center">Say Yes to Better Living</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
