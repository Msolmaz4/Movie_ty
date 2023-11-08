

interface inpProps {
  inp :string,
  setInpu :string
}

const Navbar = ({inp,setInpu} :inpProps) => {

 

  // const ekran = (dt :string)=>{
  //   // const regex = /^[a-z]+$/;
  //   //   if(regex.test(dt)){
  //   //     setInpu(dt)
  //   //     console.log(inp)
        
  //   //   }
  //   //   else alert('Konnen Sie bitte  ein Buchstabe')

  //   setInpu(dt)
      
    
   
  

  return (
    <div>
        <div className="border-2 h-24 border-sky-500">

        <div>
      
      <div className="flex justify-center  mt-6">
      
        <input
          type="search"
          name="price"
          id="price"
          value ={inp}
          className="w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Seacrh"
          onChange={(e)=>setInpu(e.target.value)}
        />
       
      </div>
    </div>





        </div>
    </div>
  )
}

export default Navbar