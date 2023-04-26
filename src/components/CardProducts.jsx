import Products from "./Products.jsx";
import Data from "../data/products.json";

function CardProducts(){
    let el = document.querySelectorAll(".btn-filter");
    el.forEach(e => {
        e.addEventListener("click", (ev)=>{
            ev.preventDefault();
        });
    })
    

    return(
        <section className="card-products container mx-auto font-josefins mt-[80px] h-[1167px]">
            <div className="txt-header flex items-center justify-center mb-12 text-5xl">
                <h3 className="font-medium">Trending Product</h3>
            </div>
            <div className="filter-buttons flex justify-center gap-3 mt-12">
                <a className="btn-filter" href="#">All</a>
                <a className="btn-filter" href="#">Shorts</a>
                <a className="btn-filter" href="#">Accessories</a>
                <a className="btn-filter" href="#">Dress Pants</a>
                <a className="btn-filter" href="#">Shirts</a>
            </div>
            <div className="products">
                <Products products={Data} />
            </div>
        </section>
    );
}

export default CardProducts;
