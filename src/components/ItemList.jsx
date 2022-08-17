import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import bicycles from "../bicycles";

function ItemList(props) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#003865",
          borderRadius: "30%",
          position: "absolute",
          transform: "none",
          color: "#003865",
          content: ">",
          paddingTop: "2px",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#003865",
          borderRadius: "30%",
          position: "absolute",
          transform: "none",
          color: "#003865",
          content: "<",
          paddingTop: "2px",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function createItem(bicycle) {
    if (bicycle.category === props.category) {
      return (
        <Card
          key={bicycle.id}
          id={bicycle.id}
          reference={bicycle.reference}
          description={bicycle.description}
          img={bicycle.pic}
          category={bicycle.category}
          price={bicycle.price}
          stock={bicycle.stock}
        />
      );
    }
  }

  return (
    <div className="carousel">
      <Slider {...settings}>{bicycles.map(createItem)}</Slider>
    </div>
  );
}

export default ItemList;
