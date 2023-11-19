

const Foodcard = ({item}) => {
    const {name,image,price,recipe} = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image}alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="bg-slate-900 text-white absolute right-12 top-12">$ {price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p> {recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;