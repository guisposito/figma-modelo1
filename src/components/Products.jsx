function Products({products}){
    return(
        <div className="product flex flex-wrap justify-center gap-5 mt-10">
            {products.map(product => (
                <div className="font-josefins text-ft-grey-100 w-[300px] relative " key={product.name}>
                    <a href="#">
                        <img className="rounded" src={"../img/products/" + product.img} alt={product.alt} width="300" height="383" />
                        {product.sell != false && (
                            <a href="#" className="absolute rounded-b flex items-center justify-center bg-black hover:text-slate-400 text-white h-11 w-full top-[339px]">Shop Now</a>                                
                        )}
                        <h4 className="mt-[20px] text-[20px]">{product.brand} {product.name}</h4>
                        <p className="mt-1 mb-[40px] font-semibold">Preço: R$ {product.price}</p>
                    </a>
                    
                </div>
            ))}
        </div>
    );
}

export default Products;