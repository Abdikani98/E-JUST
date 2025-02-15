
import Footer from "../Components/footer"
import Header from "../Components/Header"
import Products from "./Product"


const Home = () => {
    return <div>
        <Header />
        <div className="sm:flex justify-around pt-40">
            <div className="pt-10 sm:ml-0 ml-4">
                <h1 className="text-2xl"> <span className="text-[#80C4E9] text-4xl font-semibold ">E-JUST</span> Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Neque, aspernatur.</h1>
                <button className="bg-primaryColor px-16 py-3 text-textColor rounded-lg mt-8 mb-3">Buy Now</button>
            </div>
            <div>
                <img className="w-[400px] rounded-2xl " src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
        </div>

        <div className="my-40">

            
            {/* <Products /> */}
        </div>

        <Footer />
    </div>
}

export default Home