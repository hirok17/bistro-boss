import { useLoaderData } from "react-router-dom";
import HeaderTitle from "../../component/sheard/HeaderTitle";

const UpdateProduct = () => {
    const menuItem = useLoaderData();
    console.log(menuItem);
    return (
        <div>
            <div className="mt-10">
                <HeaderTitle heading="UPDATE ITEM"></HeaderTitle>
            </div>
            <p>iten: {menuItem.length}</p>
        </div>
    );
};

export default UpdateProduct;