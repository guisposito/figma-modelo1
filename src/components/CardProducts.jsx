import Products from "./Products.jsx";
import RecentArrivals from "./RecentArrivals.jsx";
import Data from "../data/products.json";

function CardProducts(){
    let el = document.querySelectorAll(".btn-filter");
    el.forEach(e => {
        e.addEventListener("click", (ev)=>{
            ev.preventDefault();
        });
    })
    return(
        <section className="card-products container mx-auto font-josefins mt-[80px] h-[2500px]">
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
            <div className="products flex">
                <Products products={Data} />
            </div>
            <div className="container flex items-center mt-24 justify-center mx-auto h-[387px]">
                <div className="flex gap-5 font-josefins text-ft-grey-100">
                    <div className="category relative">
                        <img src="../img/card-category/shorts-f-mens.jpg" width="620px" height="344px" alt="" />
                        <div className="txt absolute bottom-7 left-0 p-4">
                            <h3 className="font-bold text-2xl ">Shorts</h3>
                            <p className="font-bold text-2xl">t-shirt for Men's</p>
                            <a className="underline font-semibold" href="#">Shop Now</a>
                        </div>
                    </div>
                    <div className="category relative">
                        <img src="../img/card-category/full-sleeve-shirt.jpg" width="620px" height="344px" alt="" />
                        <div className="txt absolute bottom-7 left-0 p-4">
                            <h3 className="font-bold text-2xl">Full Sleeve</h3>
                            <p className="font-bold text-2xl">Shirt for women's</p>
                            <a className="underline font-semibold" href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <RecentArrivals />
        </section>
        
    );
}

export default CardProducts;
