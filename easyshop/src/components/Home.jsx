import React from 'react';
// import Header from './Header';
import "./Home.css";
import Products from "./Products"


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <Header /> */}
        <img
          className="onlineShoppingImg"
          src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg"
          alt=""
        />
        <div className="home__row">
          <Products
            id="12321341"
            title="Kellogg's Muesli 21% Fruit, Nut & Seeds 750g | 5 Grains, High in Vitamins B1, B2, B3, B6, Folate, Source of Protein and Fibre, Multigrain Breakfast Cereal"
            price={372.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/91i9rdecBvL._SX679_.jpg"
          />
          <Products
            id="1115544"
            title="Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD"
            price={8949}
            rating={4.7}
            image="https://m.media-amazon.com/images/I/51AuUshPluL._SX425_.jpg"
          />
          <Products
            id="545646544"
            title="Ariel Matic Top Load Detergent Washing Powder - 2 kg"
            price={396.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71G9Nf0q4bL._SY450_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            className="prodOne"
            id="022787853"
            title="Brother DCP-L2541DW Multi-Function Monochrome Laser Printer with Wi-Fi, Network & Auto Duplex Printing"
            price={21699}
            rating={3.8}
            image="https://m.media-amazon.com/images/I/71JDCbasgaL._SX569_.jpg"
          />
          <Products
            id="90154648"
            title="Tecno POP 6 Pro (Peaceful Blue, 2GB RAM,32GB Storage) | Front Flash | 8MP Dual Camera"
            price={6299}
            rating={3.6}
            image="https://m.media-amazon.com/images/I/81qiSz8eTCL._SX569_.jpg"
          />
          <Products
            id="68584510"
            title="Redmi Smart Band Pro SportsWatch- 3.73 cm (1.47) Large AMOLED Display, Always On Display, Continuous Sleep, HR, Stress and SPO2 Monitoring, 110+ Sports Modes, 5ATM, 14 Days Battery Life, Black"
            price={1999}
            rating={4}
            image="https://m.media-amazon.com/images/I/417DDJ5EPHL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="351579"
            title="House Of Silko Royal Traditional Banarasi Brocade patola Animal Motif Cushion Cover 16x16 Set of 2"
            price={585}
            rating={4.8}
            image="https://m.media-amazon.com/images/I/51jye8tcpEL._SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Products
            id="1155779"
            title="LookMark Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt"
            price={339}
            rating={5}
            image="https://m.media-amazon.com/images/I/71cFpnm0b6S._UX679_.jpg"
          />
          <Products
            id="587143577"
            title="Ray-Ban Boy and Girl Square Sunglasses"
            price={3890}
            rating={4.9}
            image="https://m.media-amazon.com/images/I/61yYcYexdWL._UX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home