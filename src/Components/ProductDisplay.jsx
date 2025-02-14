import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reduce/cart"

function ProductDisplay ({product}){

    const dispatch = useDispatch("")

    const handleAddToCart = () =>{
        dispatch(addToCart(product))
    }

    return <div className="">
    <div className="p-4 w-[250px] shadow-lg rounded-2xl">
        <img src={product.image} className="h-40 w-full object-contain mb-4" />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 text-sm">${product.price}</p>
        <button onClick={handleAddToCart}  className="bg-primaryColor px-8 py-1 text-textColor text-2xl font-semibold rounded-xl ml-3 mt-2"> Add to cart</button>
    </div>
</div>
}
export default ProductDisplay