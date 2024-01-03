import React, { useState, useEffect, Fragment } from "react";
import "./Necklace.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Earingsproductdetail from "../Earings/Earingsproductdetail";
import Necklacedetail from "./Necklacedetail";
import Pagination from "../Pagination/Paginationnecklace";
import { Link } from "react-router-dom";
function Necklace() {
  let [earingproduct, setearingproduct] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Create out useEffect function
 // useEffect(() => {
 //   fetch("/api/necklace")
 //     .then((response) => {
 //       return response.json();
 //     })

 //     .then((data) => setearingproduct(data));
 // }, []);

 const fetchData = async () => {
  setIsLoading(true);
  setIsError(false);
  try {
    const response = await fetch("/api/necklace");
    const data = await response.json();
    setearingproduct(data);
  } catch (error) {
    setIsError(true);
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchData();
}, []);


if (isLoading) {
 
  <h1>Loading</h1>;
  
} else if (isError) {
  <h1 >{error}</h1>;
} else if (!earingproduct.length) {
   <h1>no found</h1>;
} else {

  return (
    <Fragment>
      <Header />
      <section className="property">
        <div className="center">
          <h3> Necklaces</h3>
        </div>

        <div class="categ">
          <div></div>
          <div>
            <text class="headingss"> Categories</text>
          </div>

          <div>
            <Link to="/Earings" class="hover-3">
              Earings
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/Necklace" class="hover-3">
              Necklaces
            </Link>
          </div>
          <div>
            <Link to="/Braclets" class="hover-3">
              {" "}
              Braclets
            </Link>
          </div>
        </div>

     <div>

     <Pagination data={earingproduct} />

     </div>
      </section>
       
      <Footer />
    </Fragment>

    /*  <div>
      {earingproduct &&
        earingproduct.map((product) => <p key={i}>{product.title}</p>)}
    </div>*/
  )};
}
export default Necklace;
