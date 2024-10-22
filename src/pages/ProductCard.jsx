import { GoStarFill } from "react-icons/go";

const ProductCard = ({ img, title, price, finalPrice, rating }) => {
  const stars=[]
  const ratingProducer = () => {
    for (let i = 0; i <rating; i++) {
      stars.push(<GoStarFill fill="yellow" key={i} />);
    }
  };
  ratingProducer()

  return (
    <>
      <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bg-blue-600">
        <div id="img" className="bg-white m-2 rounded-lg">
          <img
            className="h-60 w-full object-contain rounded-t-lg"
            src={img}
            alt="product image"
          />
        </div>
        <div id="details" className="p-2 rounded-lg">
          <h5 className="text-2xl uppercase  font-bold text-white text-center">
            {title}
          </h5>
          <div className="rating-price flex items-center justify-between mt-4">
            <div id="rating" className="flex items-center">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">{stars}</div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {rating}
              </span>
            </div>
            <div id="price" className="">
              <span className="text-xl font-bold line-through">${price}</span>
              <span className="text-2xl font-bold text-white">
                ${finalPrice}
              </span>
            </div>
          </div>
          {/* <button className="m-2 flex items-center gap-2 justify-center text-white bg-blue-700 hover:bg-blue-800 text-md rounded-lg p-2">
          <FaCartPlus />
          Add to cart
        </button> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
