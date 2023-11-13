const FoodCard = ({ iteam }) => {
  const { name, recipe, image, price } = iteam;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Food" />
          <p className="absolute right-0 mb-40 mr-8 px-2 py-1 bg-slate-900 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-100 text-orange-300 border-orange-300 border-0 border-b-4 mt-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
