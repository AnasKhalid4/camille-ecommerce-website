const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "PKR",
  }).format(price);
};

export default FormatPrice;
