const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { counter,products,total} = action.payload;
   

      

     let existingproduct =state.cart.find((curItem)=>curItem.id==products._id)
     console.log(
      "🚀 ~ file: cartReducer.js ~ line 4 ~existingproduct",
     existingproduct
    );

    if(existingproduct){
    let updatedproduct =state.cart.map((curEItem)=>{

if(curEItem.id == products._id)
{
  let newamount = curEItem.counter + counter;
  return{
    ...curEItem,
    counter: newamount,
  }
  
}
else
  {

    return curEItem;
  }

    });
    return{

      ...state,
      cart:updatedproduct,
  };



    }else{

    

    let cartProduct;


    cartProduct={

  id:products._id,
  name:products.title,
  counter,
  image:products.img,
  price:products.Price
    }

  
    return{

        ...state,
        cart:[...state.cart,cartProduct],
    };
  }

    }
  

    if(action.type==="REMOVE_ITEM"){
let updatedcart = state.cart.filter((curItem)=>curItem.id!==action.payload  )
  return{
    ...state,
    cart:updatedcart,
  }




    }
      
    if (action.type === "CART_ITEM_PRICE_TOTAL") {
      let { total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, counter } = curElem;
  
         
          accum.total_price += price*counter ;
  
          return accum;
        },
        {
         
          total_price: 0,
        }
      );
      return {
        ...state,
       
        total_price,
      };
    }



     return state;
  };
  
  export default cartReducer;