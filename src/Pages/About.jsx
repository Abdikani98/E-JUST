import Footer from "../Components/footer";
import Header from "../Components/Header";
import img from "../assets/hhh.jpeg"


const About = () => {
    

    return <div>
        <Header />
    <div className="sm:pt-36 pt-52">
    <div className="bg-gradient-to-r from-primaryColor to-secondaryColor p-8 rounded-lg shadow-lg text-white text-center max-w-md mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img src={img} alt="Profile" className="w-36 h-36 ml-28 rounded-full border-4 border-white mb-4 shadow-lg transform transition duration-300 hover:scale-110"/>
          <h1 className="text-2xl uppercase font-bold tracking-wide">
            <span className="font-bold text-yellow-300">Name</span> = Abdikani Mohamud Nor
          </h1>
          <h4 className="text-lg font-bold tracking-wide mt-2">
            <span className="font-bold text-yellow-300">ID</span> = C1230893
          </h4>
          <h4 className="text-lg font-bold tracking-wide mt-2">
            <span className="font-bold text-yellow-300">Number</span> = 617728298
          </h4>
          {/* <h5 className="text-base font-normal tracking-wide text-cyan-100 mt-2">
            <span className="font-bold text-black">Class</span> = CA2311
          </h5> */}
        </div>
        </div>
        <Footer />
        </div>
        
    };
    
    

export default About