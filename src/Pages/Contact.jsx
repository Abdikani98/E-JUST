import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/footer";

 function Contact() {
  const [form, setForm] = useState({ name: "", email: "", pass: "", compass: "" });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name Required";
    if (!form.email) newErrors.email = "Email Required";
    if (!form.pass) newErrors.pass = "Password Required";
    if (!form.compass) newErrors.compass = "Confirm Password Required";
    setErrors(newErrors);
    setShowError(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return <div>

    <Header />
    <div   className="pt-20">

   <div className="flex justify-center items-center ">
    <form className="bg-white w-4/12 h-[700px] p-10 rounded-lg shadow-lg shadow-black border-2 border-green-600" onSubmit={handleSubmit}>
      {showError && <p className="bg-secondaryColor text-3xl text-center font-semibold rounded-lg mb-5 py-2">Fill Form</p>}
      
      <label className="text-2xl font-semibold">Name</label> <br />
      <input id="name" value={form.name} onChange={handleChange} className={`w-9/12 h-10 rounded-2xl px-5  text-2xl border-2 ${errors.name ? "border-red-500" : "border-black"}`} type="text" placeholder="Name" /> <br />
      <span className="text-red-500">{errors.name}</span> <br />
      
      <label className="text-2xl font-semibold ">Email</label> <br />
      <input id="email" value={form.email} onChange={handleChange} className={`w-9/12 h-10 rounded-2xl px-5 mt-4 text-2xl border-2 ${errors.email ? "border-red-500" : "border-black"}`} type="text" placeholder="Email" /> <br />
      <span className="text-red-500">{errors.email}</span> <br />
      
      <label className="text-2xl font-semibold">Password</label>
      <input id="pass" value={form.pass} onChange={handleChange} className={`w-9/12 h-10 rounded-2xl px-5 text-2xl border-2 ${errors.pass ? "border-red-500" : "border-black"}`} type="password" placeholder="Password" /> <br />
      <span className="text-red-500">{errors.pass}</span> <br /> <br />
      
      <label className="text-2xl font-semibold ">Confirm Password</label>
      <input id="compass" value={form.compass} onChange={handleChange} className={`w-9/12 h-10 rounded-2xl px-5 text-2xl border-2 ${errors.compass ? "border-red-500" : "border-black"}`} type="password" placeholder="Confirm Password" /> <br />
      <span className="text-red-500">{errors.compass}</span>
      
      <button type="submit" className="bg-slate-950 text-white px-16 font-semibold ml-16 mt-8 rounded-2xl py-3">Submit</button>
    </form>
    </div>
    </div>

    <Footer />
    </div>
  
}

export default  Contact
