import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [inputs,setInputs]=useState({fullName:'',email:'',phoneNumber:'',gender:'',password:''});
  const handleForm=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setInputs(values=>({...values,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Form data',inputs)
  }
  return (
    <div className="flex justify-center items-center mx-auto p-4 text-center">
      <form 
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-nav p-5 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Add New User</h2>

        <div className="mb-4">
          <label className="block text-left font-bold mb-1">Full Name<b className='text-red-700'>*</b></label>
          <input
            name='fullName'
            value={inputs.fullName}
            onChange={handleForm}
            type="text"
            className="w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-bold mb-1">Email<b className='text-red-700'>*</b></label>
          <input
            name='email'
            value={inputs.email}
            onChange={handleForm}
            type="email"
            className="w-full px-3 text-black py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-bold mb-1">Phone Number<b className='text-red-700'>*</b></label>
          <input
            name='phoneNumber'
            value={inputs.phoneNumber}
            onChange={handleForm}
            type="tel"
            className="w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4 flex">
          <label className=" text-left font-bold mb-1">Gender<b className='text-red-700'>*</b></label>
          <div className="ml-4 flex justify-around">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleForm}
                className="form-radio h-4 w-4 text-cyan-500 transition duration-200 ease-in-out"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className=" ml-4 inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleForm}
                className="form-radio h-4 w-4 text-cyan-500 transition duration-200 ease-in-out"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-left font-bold mb-1">Password<b className='text-red-700'>*</b></label>
          <input
            name='password'
            value={inputs.password}
            onChange={handleForm}
            type="password"
            className="w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Use your brain to create a strong password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-bold mb-1">Profile Picture</label>
          <input
            type="file"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <Link to="/recording">
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
}
