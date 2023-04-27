import Products from "./Products";
import Data from "../data/products-recent.json";

const RecentArrivals = () => {
    return(
        <section className="h-[564px] container mx-auto">
            <div className="container mx-auto mt-[100px] font-josefins">
                <div className="txt-header flex items-center justify-center mb-12 text-5xl">
                    <h3 className="font-medium">Recent Arrivals</h3>
                </div>
            </div>
            <div className="products flex justify-center">
                <Products products={Data} />
            </div>
        </section>
    );
}

export default RecentArrivals;