import { useSelector } from "react-redux"
import { Link } from "react-router"

const Header =() => {

    const cartValue = useSelector((state) => state.cart.cartItem)



    return <div className="bg-primaryColor flex justify-between shadow-lg shadow-black px-20 py-4 fixed w-full">
        <h1 className="text-3xl text-textColor font-semibold">E-<span className="text-[#80C4E9]">JUST</span> </h1>

        <ul className="flex gap-20 text-2xl text-textColor font-semibold pt-2">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>

       <Link to="/cart"><i className="fa-solid fa-cart-shopping text-textColor text-2xl pt-1"><span className="absolute top-1">({cartValue.length})</span></i></Link>
    </div>
}

export default Header