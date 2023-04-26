{/*import product1 from "../img/products/product1.jpg";
import product2 from "../img/products/product2.jpg";
import product3 from "../img/products/product3.jpg";
import product4 from "../img/products/product4.jpg";
import product5 from "../img/products/product5.jpg";
import product6 from "../img/products/product6.jpg";
import product7 from "../img/products/product7.jpg";
import product8 from "../img/products/product8.jpg";*/}

function Products({products}){
    return(
        <div className="product">
            {products.map(product => (
                <div className="" key={product.name}>
                    
                    <h4>{product.brand + product.name}</h4>
                    <p>Preço: R$ {product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;