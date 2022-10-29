import React from 'react'
import Slider from "react-slick";
import ReactCard from '../parts/ReactCard'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function Sliding() {
  const red =[
    'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3IlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbG9yJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbG9yJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/photos/emotions-inside-human-picture-id478065559?b=1&k=20&m=478065559&s=170667a&w=0&h=GmdDzi9GAiD0oPFP5jBjRllF-spbXN1HQ7c2YV8wklM=',
    'https://media.istockphoto.com/photos/liquid-shapes-abstract-holographic-3d-wavy-background-picture-id1038727610?b=1&k=20&m=1038727610&s=170667a&w=0&h=2ezbl9GAYnfiuNpW3fcoaiQ0LinbBDluIT8JDSpcdIA=',
    'https://thumbs.dreamstime.com/b/colored-paint-strokes-abstract-art-background-detail-work-art-contemporary-art-colorful-texture-thick-paint-surface-79081160.jpg',
    'https://thumbs.dreamstime.com/b/abstract-painted-background-texture-12474277.jpg',
    'https://thumbs.dreamstime.com/b/macro-close-up-different-color-oil-paint-colorful-acrylic-modern-art-concept-84365555.jpg',
    'https://thumbs.dreamstime.com/b/spotted-doggies-pattern-5174932.jpg',
  ]
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow:4,
        swipeToSlide: true,
        afterChange: function(index) {
            console.log(
              `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
          }
      };
  return (
    <div><Slider {...settings}>
    {red.map((event)=>{
    return <div><ReactCard image={event} /></div>
    })}
    </Slider></div>
  )
}

export default Sliding