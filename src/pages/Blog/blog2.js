import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import { Typography } from "@mui/material";
import brain from "../../assets/images/brain.avif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const blog2 = () => {
  return (
    <>
      <nav className="w-full container mx-auto flex justify-center items-center py-2 shadow-md">
        <Link to="/">
          <img className="w-14 rounded-full" src={Logo} alt="logo" />
        </Link>
      </nav>
      <div className="container mx-auto mt-5 p-6">
        <Typography variant="h3" gutterBottom>
          Enhance Brain
        </Typography>
        <img className="sm:w-full h-1/2" src={brain} alt="aging" />
        <p className="text-xl mt-10 sm:px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium
          voluptatibus totam in quos quia, itaque minima natus eveniet aut iure,
          corrupti repellat deserunt nostrum nulla iste! Alias ad minima
          voluptate, et hic officiis. Adipisci quod excepturi modi, illo eum
          impedit, at quam autem harum reiciendis cupiditate est incidunt minima
          quaerat. Aliquid sequi quaerat pariatur sit! Consequuntur, natus nobis
          porro soluta aliquam in eos. Vero vitae, voluptatem rem id, nobis
          quam, nulla cupiditate voluptatum ipsam ullam dolorum eaque
          consequatur quis debitis provident eum porro? Quaerat quas velit
          reiciendis enim suscipit dignissimos nisi assumenda voluptatem sunt
          aperiam! Odit dignissimos dolor maiores? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam temporibus quidem iusto quas iste
          vero nam cupiditate ipsum aut a natus, sit id cum reprehenderit omnis
          voluptatem. Minus incidunt voluptas, cum exercitationem repudiandae
          atque sunt! Praesentium ipsam expedita illo. Laudantium asperiores
          impedit enim cumque porro incidunt quam molestiae totam laborum
          voluptas temporibus quo repellendus optio deleniti est rem error,
          quidem possimus? Error nihil iste animi omnis inventore officiis
          sapiente, veritatis dolores, accusamus ut consectetur adipisci
          repellat doloribus sit molestias ex, sint excepturi quasi nisi.
          Delectus quae, dolorem unde facilis quis doloremque facere,
          aspernatur, quasi quidem ipsam repudiandae deserunt neque iusto. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vel at
          adipisci aut commodi cupiditate expedita numquam quam ipsa. Officiis,
          corrupti recusandae ad ipsa maxime architecto earum, sint natus
          obcaecati, ex laboriosam? Praesentium officiis sit doloribus mollitia
          voluptatum enim eum nihil unde distinctio magnam nesciunt sint,
          obcaecati nobis laboriosam tenetur deleniti odio nostrum voluptatem
          laborum. Consequatur in magni repellendus omnis odio. Iste est
          temporibus cupiditate, in soluta et illo dolor modi veritatis esse
          architecto quis autem eveniet hic, consequuntur reprehenderit rerum
          corporis, recusandae minima ipsam quo aperiam obcaecati optio. Omnis
          magni dolore voluptates harum repellat explicabo ex fugiat beatae id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolorem temporibus sunt, facere nobis eveniet repudiandae maiores
          minima est velit aliquam voluptates corporis, quos vel quo repellendus
          id. Provident quisquam explicabo quis aspernatur vitae aut itaque ut
          facere praesentium rerum eveniet repellat odio eum libero eos sunt
          sequi, repellendus minima, nulla maiores et fuga unde nostrum?
          Similique ducimus atque voluptates quae possimus. Iusto eius nesciunt
          dolores eum velit odio aperiam tempore maxime a nemo eveniet,
          accusantium animi corrupti. Expedita debitis exercitationem
          voluptatibus culpa repudiandae suscipit ea magni doloremque fugiat
          sequi neque eligendi aperiam mollitia provident, eaque excepturi
          magnam. Itaque, eaque.
        </p>

        <Link to="/">
          <button className="w-full bg-yellow-400 p-4 rounded-lg text-xl font-semibold mt-10 hover:bg-yellow-500">
            <ArrowBackIcon />
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default blog2;
