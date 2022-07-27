import React from "react";
import Cards from "./Cards";
function App() {
  const data = [
    {
      time: "Monthly",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/faqs_5.png",
    },

    {
      time: "daily",
      price: "Rs.100",
      offer: "Supper Dupper",
      data: "1",
      jazzmin: "100",
      othernetmin: "20",
      sms: "100",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-super-duper.png",
    },

    {
      time: "weekly",
      price: "Rs.300",
      offer: "Supper Dupper",
      data: "5",
      jazzmin: "300",
      othernetmin: "10",
      sms: "300",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-mega-plus-THUMB.png",
    },

    {
      time: "Yearly",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/faqs_5.png",
    },

    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-mega-plus-THUMB.png",
    },

    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-super-duper.png",
    },

    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-mega-plus-THUMB.png",
    },
    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/faqs_5.png",
    },
    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-super-duper.png",
    },
    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-mega-plus-THUMB.png",
    },

    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/faqs_5.png",
    },
    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/monthly-super-duper.png",
    },
    {
      time: "Month",
      price: "Rs.650",
      offer: "Supper Dupper",
      data: "8",
      jazzmin: "500",
      othernetmin: "25",
      sms: "500",
      img: "https://jazz.com.pk/assets/images/thumbnails/faqs_5.png",
    },
  ];

  const Cardsdisplay = data.map((val, index) => {
    return (
      <>
        <Cards
          time={val.time}
          price={val.price}
          offer={val.offer}
          data={val.data}
          jazzmin={val.jazzmin}
          othernetmin={val.othernetmin}
          sms={val.sms}
          img={val.img}
        />
      </>
    );
  });
  return <div className="grid-container">{Cardsdisplay}</div>;
}

export default App;
