import React, { useState } from 'react'

const ContactForm = () => {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [message , setMessage] = useState()
  return (
    
        <form action="submit"  className="min-h-[80vh] flex items-center">
            <div  className="flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-full border border-cyan-700 rounded-xl text-zinc-600 text-sm shadow-lg shadow-gray-600">
                <h2 className="text-2xl font-semibold text-center" >Contact Us</h2>
                <p className=' text-center'>Book Lessons of your Faviorite Teacher</p>
            
                    <div className="w-full">
          <p>Name</p>
          <input className="border border-cyan-700 rounded w-full p-2 mt-1" 
            type="text" onChange={(e)=> e.target.name} value={name} 
             placeholder='Name' required
          />
    </div>   
            
        <div className="w-full">
          <p>Email</p>
          <input className="border border-cyan-700 rounded w-full p-2 mt-1"
            type="email" onChange={(e)=>{e.target.email}} value={email}
              placeholder='Email here...' required
          />
        </div> 
    <div className="w-full">
          <p>Write Your Message</p>
          <input className="border border-cyan-700 rounded w-full p-2 mt-1"
            type="text"
            placeholder='Write here...' onChange={(e)=>{e.target.message}} value={message} required
          />
        </div>
        <button className="bg-cyan-700 text-orange-50 w-full py-2 rounded-md text-base">Submit</button>
        </div>
        </form>
     
  )
}

export default ContactForm