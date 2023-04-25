function CardCategory () {
    const txtbtn = "View Deal";

    return (
        <div className="card-category container flex items-center mx-auto h-[387px]">
            <div className="">
                <div className="category">
                    <h3>For Men</h3>
                    <p>Cloathing Bundle Deal</p>
                    <a href="#">{txtbtn}</a>
                </div>
                <div className="category">
                    <h3>For Women</h3>
                    <p>Clothing Bundle Deal</p>
                    <a href="#">{txtbtn}</a>
                </div>
                <div className="category">
                    <h3>Accessories</h3>
                    <p>Hand Bag Collection</p>
                    <a href="#">{txtbtn}</a>
                </div>
            </div>
        </div>
    );
}

export default CardCategory;