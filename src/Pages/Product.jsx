
import { useEffect, useState } from "react"
import Footer from "../Components/footer"
import Header from "../Components/Header"
import axios from "axios"
import ProductDisplay from "../Components/ProductDisplay"

const Products = () => {

   
    const [data, setData] = useState([])
    const [search, setSearch] = useState(" ")

    


    const handleGetData =() =>{
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data)
        }).catch((Error) => console.log(Error))
    }

    const Productsearch = data.filter((items) =>{
        const lowerCaseText =items.title.toLowerCase().includes(search.toLowerCase())
        return lowerCaseText
    })

    useEffect(() => {
        handleGetData()
    }, [])




    return <div>
            <Header />
         <div className="pt-20">
            <div className="container mx-auto p-6">
                <div className="flex justify-around mb-5">
                    <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className="border-4 rounded-2xl outline-none text-2xl border-secondaryColor pl-2 w-60 h-10 ml-80" type="search" placeholder="Search product ..." />
                </div>

                <div className="grid grid-cols-3 gap-28 px-20">
                    {
                        Productsearch.map((item) => {
                            return <ProductDisplay product={item} />
                        })
                    }

                    
                </div>
            </div>
         </div>
        
        <Footer />
    </div>
}

export default Products