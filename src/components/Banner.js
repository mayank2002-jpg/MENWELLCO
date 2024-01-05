import React from "react";
const Banner = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="mt-14 text-center " id="banner">
          <h2 className="font-bold text-white text-6xl relative top-32">
            Mens Health. It's Our Speciality
          </h2>
          <p className="text-white relative top-40 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, consequatur.
          </p>
          <button className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium relative top-48">
            Book Free Appointment
          </button>
        </div>
      </section>
      <div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
    </>
  );
};

export default Banner;
