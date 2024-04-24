import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import ContentCard from '../ContentCard';

import './index.css';

function MultipleItems() {

  const sampleCartItems = [
    {
      title: "State of Market",
      description: "a consumption tax because it is borne ultimately by the final consumer.",
      image: "https://media.istockphoto.com/id/1225058659/photo/businesswoman-using-digital-tablet-with-holding-bar-graph.jpg?s=1024x1024&w=is&k=20&c=vIgnMlqaX-RV7-8SgzhXRXlWYDx2g-98alGyE0Lv1Xg=",
    },
    {
      title: "Banking Monitor",
      description: "Governments often charge a cess for the purpose of development in social.",
      image: "https://media.istockphoto.com/id/1428385468/photo/businessman-showing-candlesticks-bar-and-statistics-data-on-the-hand-insurance-business-and.jpg?s=1024x1024&w=is&k=20&c=xw8KVsqZo6450CDr4urAk0RFFsOH9sTm0bEZAYafC0c=",
    },
    {
      title: "The Central Copex",
      description: "The burden has to be borne by the person on whom the tax is levied   .",
      image: "https://media.istockphoto.com/id/1215230240/photo/stock-market-crash-and-panic-financial-losses-economic-recession-concept-red-arrow-over.jpg?s=1024x1024&w=is&k=20&c=qZl2LMC4M5XwYwmge_unaGTztFxOgtpyFcYwOWeT1TQ=",
    },
    {
        title: "Direct Taxes",
        description: "A direct tax is paid by an individual or organization to the entity  . ",
        image: "https://media.istockphoto.com/id/1225058659/photo/businesswoman-using-digital-tablet-with-holding-bar-graph.jpg?s=1024x1024&w=is&k=20&c=vIgnMlqaX-RV7-8SgzhXRXlWYDx2g-98alGyE0Lv1Xg=",
      },
      {
        title: "Business Cycle",
        description: "All these taxes are paid directly to the Government by the assessee  .",
        image: "https://media.istockphoto.com/id/1265501626/photo/young-finance-expert-analyzing-financial-charts-on-smart-phone.jpg?s=1024x1024&w=is&k=20&c=bQeJ8NY4pRVV-U-QKN9l-1eKu7b5muGdR9cL4U6iwZw=",
      },
      {
        title: "Market Trend",
        description: "a consumption tax because it is borne ultimately by the final consumer .",
        image: "https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=",
      },
      {
        title: "Stock view",
        description: "Taxation is the process of collecting money from individuals,businesses.",
        image: "https://media.istockphoto.com/id/1325525925/photo/stock-graph-screen-display.jpg?s=1024x1024&w=is&k=20&c=rZX3iig4oY3KvlGPGVlskvp2R1u-h-PZglvt2T2kIw0=",
      },
      {
        title: "Product state",
        description: "All these taxes are paid directly to the Government by the assessee .",
        image: "https://media.istockphoto.com/id/1325525925/photo/stock-graph-screen-display.jpg?s=1024x1024&w=is&k=20&c=rZX3iig4oY3KvlGPGVlskvp2R1u-h-PZglvt2T2kIw0=",
      },
      {
        title: "Banking",
        description: "The burden has to be borne by the person on whom the tax is levied .",
        image: "https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=",
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container box">
      <Slider {...settings}>
    
      {sampleCartItems.map((item, index) => (
        <ContentCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    
        
      </Slider>


    </div>
  );
}

export default MultipleItems;
