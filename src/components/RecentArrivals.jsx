import Products from "./Products";
import Data from "../data/products-recent.json";
import TextHeader from "./utils/TextHeader";

const RecentArrivals = () => {
    return(
        <section className="h-[600px] container mx-auto">
            <div className="container mx-auto mt-[100px] font-josefins">
                <TextHeader text={"Recent Arrivals"}/>
            </div>
            <div className="products flex justify-center">
                <Products products={Data} />
            </div>
        </section>
    );
}

export default RecentArrivals;