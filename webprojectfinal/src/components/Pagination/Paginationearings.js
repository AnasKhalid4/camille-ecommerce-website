import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Pagination.css"
function Paginationearings(props) {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems,setcurrentItems]=useState([]);
  const [pageCount,setpageCount] =useState(0)

const itemsPerPage = 6;

  useEffect(()=> {
  const endOffset = itemOffset + itemsPerPage;
 setcurrentItems( data.slice(itemOffset, endOffset));
  setpageCount( Math.ceil(data.length / itemsPerPage));
  },[itemOffset,itemsPerPage,data]);





  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
     
     <div className="get">
          {
            currentItems.map((get) => (
              <div className="column">
                <div className="single-property">
                  <div className="card border-0 border-bottom-0">
                    <div className="property-thumb">
                    <Link
                        to={"/Earingsproductdetail/" + get._id}>
                      <img src={get.img} alt="palace"></img>
                      </Link>
                    </div>
                    <div className="property-content">
                      <text> {get.title} </text>
                      <br />
                      <text>Rs. {get.Price}</text>

                      <div></div>
                      <br></br>
                      <Link
                        to={"/Earingsproductdetail/" + get._id}
                        className="amount"
                      >
                        {" "}
                        Details{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}


        </div>


      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< PREV"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );

}

export default Paginationearings;
