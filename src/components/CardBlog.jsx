import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/blogposts.json";
import TextHeader from "./utils/TextHeader";

const CardBlog = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <section className="h-[800px] mt-20 container mx-auto">
      <TextHeader text={"Our Blogs"}/>
      <div className="slider container mx-auto flex justify-center items-center ml-2">
        <Slider className="mx-auto container" {...settings}>
          {Data.map((post) => (
            <div className="font-josefins text-ft-grey-100 w-[620px] h-[562px] relative mt-14" key={post.id}>
                  <div className="absolute flex items-center top-4 left-4 w-[60px] h-[67px] bg-white font-ft-grey-100 font-semibold">
                    <p>{post.publish}</p>
                  </div>
                  <img className="w-[620px] h-[487px]" src={"../img/blogposts/" + post.img} alt={post.alt} width="620" height="487" />
                  <div className="content absolute bottom-1 p-4 bg-white w-[509px] h-[215px]">
                    <div className="bg-ft-grey-200 w-[93px] h-9 flex items-center justify-center mb-1 rounded hover:bg-black  hover:text-white">
                      <a className=" hover:text-white" href="#">{post.category}</a>
                    </div>
                    <h2 className="text-xl">{post.title}</h2>
                    <p className="mt-1">{post.description}</p>
                  </div>
              </div>
          ))}
        </Slider>
      </div>
      
    </section>
  );
};

export default CardBlog;