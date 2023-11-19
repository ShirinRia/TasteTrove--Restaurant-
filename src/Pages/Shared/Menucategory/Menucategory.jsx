import { Link } from "react-router-dom";
import Menucard from "../Menucard";
import Pagecover from "../PageCover/Pagecover";


const Menucategory = ({ items, menuback, title, description }) => {
    return (
        <div className="pt-8">
            {title && <Pagecover
                backimage={menuback}
                title={title}
                description={description}>
            </Pagecover>}
            <div className="grid grid-cols-1 gap-10 mt-16  md:grid-cols-2">
                {items.map(item => <Menucard key={item._id} item={item}></Menucard>)}
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">ORDER</button>
                </Link>

            </div>

        </div>
    );
};

export default Menucategory;