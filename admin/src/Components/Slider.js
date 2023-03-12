import React from "react";
import Slider from "react-slick";
import ReactCard from "../parts/ReactCard";
import FavCard from "../parts/FavCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliding({ Data, Fav }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      <Slider {...settings}>
        {Data &&
          Data.map((event) => {
            return (
              <div key={event.id}>
                {!Fav ? <ReactCard Data={event} /> : <FavCard Data={event} />}
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Sliding;
