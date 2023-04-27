function CardCategory () {
    const txtbtn = "View Deal";
    return (
        <section className="card-category container flex items-center mt-1 justify-center mx-auto h-[387px]">
            <div className="flex gap-5 font-josefins text-ft-grey-100">
                <div className="category relative">
                    <img src="../img/card-category/for-men.jpg" width="407" height="267" alt="" />
                    <div className="txt absolute bottom-7 left-0 p-4">
                        <h3 className="font-bold text-base ">For Men</h3>
                        <p className="font-bold text-base">Cloathing Bundle Deal</p>
                        <a className="underline font-semibold" href="#">{txtbtn}</a>
                    </div>
                </div>
                <div className="category relative">
                    <img src="../img/card-category/for-women.jpg" width="407" height="267" alt="" />
                    <div className="txt absolute bottom-7 left-0 p-4">
                        <h3 className="font-bold text-base">For Women</h3>
                        <p className="font-bold text-base">Clothing Bundle Deal</p>
                        <a className="underline font-semibold" href="#">{txtbtn}</a>
                    </div>
                </div>
                <div className="category relative">
                <img src="../img/card-category/acessories.jpg" width="407" height="267" alt="" />
                    <div className="txt absolute bottom-7 left-0 p-4">
                        <h3 className="font-bold text-base">Accessories</h3>
                        <p className="font-bold text-base">Hand Bag Collection</p>
                        <a className="underline font-semibold" href="#">{txtbtn}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardCategory;