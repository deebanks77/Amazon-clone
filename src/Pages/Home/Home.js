import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import products, {
  homeProduct,
  otherProducts,
  coverImages,
  productsDrugs,
} from "../../Data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = coverImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, coverImages]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="home">
      <Header />
      <div className="home__backgroundImages">
        {/* <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft className="home__cheveronIcon" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight className="home__cheveronIcon" />
        </button> */}
        {coverImages.map((item, itemIndex) => {
          const { id, image } = item;

          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === coverImages.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <div key={itemIndex} className={`home__imageContainer ${position}`}>
              <img src={image} alt="Amazon cover" className={`home__image`} />
            </div>
          );
        })}
      </div>

      <div className="home__products">
        {products.map((product) => {
          const { id, title, price, rating, image } = product;
          return (
            <React.Fragment key={id}>
              <Product
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className="home__drugs">
        <h2>Frequently repurchased in Drugstore</h2>
        <div className="home__drugProducts">
          {productsDrugs.map((product) => {
            return (
              <img
                src={product.image}
                alt="drug"
                key={product.id}
                className="home__drugImage"
              />
            );
          })}
        </div>
      </div>

      <div className="home__products">
        {otherProducts.map((product) => {
          const { id, title, price, rating, image } = product;
          return (
            <React.Fragment key={id}>
              <Product
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className="home__drugs">
        <h2>Frequently repurchased in Drugstore</h2>
        <div className="home__drugProducts">
          {homeProduct.map((product) => {
            return (
              <img
                src={product.image}
                alt="drug"
                key={product.id}
                className="home__drugImage"
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;
