import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import products from "../../Data";

function Home() {
  return (
    <section className="home">
      <Header />
      <div className="home__imageContainer">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon cover"
          className="home__image"
        />
      </div>
      <div className="home__products">
        {products.map((product) => {
          const { id, title, price, rating, image } = product;
          return (
            <Product
              id={id}
              title={title}
              price={price}
              rating={rating}
              image={image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Home;
