import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="main1">
      <Header />
      <div className="main2">
        <text>Jewelery</text>
      </div>

      <div className="main">
        <div
          className="hero"
          style={{
            backgroundImage:
              "url('https://cdn.shopify.com/s/files/1/1239/1628/files/keity_cropped_image_720x.jpg')",
          }}
        >
          <div className="subtitle">
            <p>SHOP IN TIME FOR THE HOILIDAYS!</p>
            <h1>CYBER MONDAY SALE</h1>
            <h2>Fashion and Demi- Fine Jewelry Savings.</h2>
            <h2> 25% OFF regular priced styles.</h2>

            <button className="button-6 "> CODE: BLACK25</button>
          </div>
        </div>

        <div className="br">
          <p>
            SHOP BY CATEGORY <br />
            ____
          </p>
        </div>
        <div className="grid-container">
          <Link to="/Necklace">
            <div className="container1">
              <div className="align-middle">
                <div className="container-content">
                  <h2>FASHION Necklace</h2>
                  <div class="btn btn-outline-light">
                    <text class="txtt"> BRASS COLLECTION - 25% OFF </text>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Earings">
            <div className="container2">
              <div className="align-middle">
                <div className="container-content">
                  <h2>DIME Earings</h2>
                  <div class="btn btn-outline-light">
                    <text class="txtt"> GOLD FILLED COLLECTION - 25% OFF </text>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Braclets">
            <div className="container3">
              <div className="align-middle">
                <div className="container-content">
                  <h2>FINE-DIME Bracelets</h2>
                  <div class="btn btn-outline-light">
                    <text class="txtt"> GOLD & DIMOND COLLECTION</text>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="break"></div>

        <div className="divide">
          <div className="brick-block-text">
            <div className="brick-text">
              <p>WHAT YOU'VE BEEN WAITING FOR!</p>
              <h2>SHOP THE SALE</h2>
              <p>up to 60% Off from retail price.</p>
              <p>Extra 15% OFF sale price with code: SALE15</p>
              <button className="button-7"> SHOP NOW</button>
            </div>
          </div>

          <div className="brick-block-bg"></div>
        </div>

        <div style={{ height: "50px" }}></div>

        <div className="divide">
          <div className="brick-block-bg-camille">
            <div className="brick-block-bg-camille-text">
              <p>MEET THE DESIGNER</p>
              <p>Get to know the designer behind the brand</p>
              <button className="btn btn-light">ABOUT CAMILLE</button>
            </div>
          </div>

          <div className="camille-block-text">
            <div className="camille-text">
              <p>
                With almost 2 decades of jewelry experience working with some of
                the best brands in the industry, Camille understand the
                importance of quality and design integrity.
              </p>
              <p>
                {" "}
                At Camille Jewelry we strive to create the perfect “everyday”
                affordable luxury styles for your jewelry wardrobe.{" "}
              </p>
              <p>
                Each style carries a signature Camille design element which
                resonates as modern, feminine and classic with a twist.
              </p>
              <p>Exquisite jewels handmade in the heart of NYC ❤️</p>
              <p>Let Camille help you with your next gift selection.</p>
              <button className="button-7">SHOP CAMILLE'S GIFT PICKS</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
