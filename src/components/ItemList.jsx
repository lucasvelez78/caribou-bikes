import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Card from "./Card";
import firestoreDB from "../services/firebase";
import { getDocs, collection } from "firebase/firestore";

function getProducts() {
  return new Promise((resolve) => {
    const bicyclesCollection = collection(firestoreDB, "bicycles");
    getDocs(bicyclesCollection).then((snapshot) => {
      const docsData = snapshot.docs.map((doc) => doc.data());
      resolve(docsData);
    });
  });
}

function ItemList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setData(res);
    });
  }, []);

  function NextArrow({ onClick }) {
    return (
      <div className="arrow arrow-right" onClick={onClick}>
        <MdOutlineArrowForwardIos />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div className="arrow arrow-left" onClick={onClick}>
        <MdOutlineArrowBackIos />
      </div>
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 720,
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
      <Slider {...settings}>{data.map(createItem)}</Slider>
    </div>
  );
}

export default ItemList;
