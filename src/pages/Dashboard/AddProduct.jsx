import { useForm } from "react-hook-form";
import HeaderTitle from "../../component/sheard/HeaderTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_API;
const imageHostApi =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure =useAxiosSecure();
    const onSubmit = async(data) =>{
        console.log(data)
        const imageFile ={image:data.image[0]};
        const res =await axiosPublic.post(imageHostApi, imageFile, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem ={
                name:data.name,
                recipe:data.recipe,
                image:res.data.data.display_url,
                category:data.category,
                price: parseFloat(data.price),
            }
            const menuRes =await axiosSecure.post('/menus', menuItem);
            if(menuRes.data.insertedId){
                toast.success('Menu add success');
                reset();
            }

        }
        console.log(res.data.url);
         
    };


    return (
        <div>
            <div className="mt-10">
                <HeaderTitle heading="ADD AN ITEM" subheading="---What's new?---"></HeaderTitle>
            </div>
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register('name', {required:true})} type="text" placeholder="Recipe name" className="input input-bordered" required />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='default' {...register('category')} className="select select-bordered w-full">
                                <option disabled value='default'>category </option>
                                <option value='drinks'>Drinks</option>
                                <option value='dessert'>Dessert</option>
                                <option value='salad'>Salad</option>
                                <option value='soup'>Soup</option>

                            </select>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register('price')} type="text" placeholder="price" className="input input-bordered w-full" required />
                        </div>

                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-primary w-full" placeholder="Recipe Details"></textarea>
                    </div>
                    <div>
                        <input
                            {...register('image')}
                            type="file"
                            className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value='Add Item' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;