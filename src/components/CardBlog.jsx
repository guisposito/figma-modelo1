import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/blogposts.json";

const CardBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="h-[671px] container mx-auto">
      <Slider {...settings}>
        {Data.map((post) => (
          <div className="font-josefins text-ft-grey-100 w-[300px] relative " key={post.title}>
            <a href="#">
              <h2>{post.title}</h2>
             
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CardBlog;