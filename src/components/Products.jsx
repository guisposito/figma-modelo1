function Products({products}){
    return(
        <div className="product">
            {products.map(product => (
                <div className="" key={product.name}>
                    <img src={"../img/products/" + product.img} alt={product.alt} />
                    <h4>{product.brand} {product.name}</h4>
                    <p>Preço: R$ {product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;