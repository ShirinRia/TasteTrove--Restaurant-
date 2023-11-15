

const Menucard = ({item}) => {
    const {name,image,price,recipe} = item
    return (
        <div className="flex space-x-5">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-24" src={image} alt=""  />
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default Menucard;