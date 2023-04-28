import Products from "./Products.jsx";
import Data from "../data/products.json";

function CardProducts(){
    const handleClick = (event) => {
        event.preventDefault();
      };
    return(
        <section className="card-products container mx-auto font-josefins mt-[80px] h-[1167px]">
            <div className="txt-header flex items-center justify-center mb-12 text-5xl">
                <h3 className="font-medium">Trending Product</h3>
            </div>
            <div className="filter-buttons flex justify-center gap-3 mt-12">
                <a className="btn-filter" href="#" onClick={handleClick}>All</a>
                <a className="btn-filter" href="#" onClick={handleClick}>Shorts</a>
                <a className="btn-filter" href="#" onClick={handleClick}>Accessories</a>
                <a className="btn-filter" href="#" onClick={handleClick}>Dress Pants</a>
                <a className="btn-filter" href="#" onClick={handleClick}>Shirts</a>
            </div>
            <div className="products">
                <Products products={Data} />
            </div>

        </section>
    );
}

export default CardProducts;
