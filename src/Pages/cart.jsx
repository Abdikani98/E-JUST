import { useDispatch, useSelector } from "react-redux"
import Header from "../Components/Header"
import { calculatePrice, removeItem } from "../redux/reduce/cart"
import { useEffect } from "react"
import Footer from "../Components/footer"

function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItem)

    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const dispatch = useDispatch()

    const handleRemoveItem =(itemIndex) =>{
        dispatch(removeItem(itemIndex))
        dispatch(calculatePrice())
    }

    useEffect(() => {
        dispatch(calculatePrice())
    },[])

    return <div>
        <Header />
        <div className="pt-40">
        {
            cartItems.length > 0 ?
            cartItems.map((item, index) =>{
                return <div className="pt-40 flex justify-center">
                <div className="p-5 sm:flex justify-between items-center w-[80%] shadow-lg rounded-2xl">
                    <img src={item.image} className="h-40 w-80 object-contain mb-4" />
                    <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600 text-2xl">${item.price}</p>
                    <button onClick={()=> handleRemoveItem(index) } className="bg-red-600 px-8 py-2 rounded-lg text-textColor ml-40">Delete</button>
    
                </div>
    
            </div>
            })
            :
            <h1 className="text-5xl text-primaryColor font-semibold text-center">Your Cart Is Emty</h1>
        
            
        }

        <div className="sm:ml-28 mb-40 ml-10">
            <hr className="sm:w-[1000px] w-[350px] border-1 border-gray-800 mt-10"/>
            <h1 className="sm:text-2xl text-3xl font-bold">${totalPrice}</h1>

        </div>
        </div>
        
    </div>
}

<Footer />
export default Cart