import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import {toast} from 'react-toastify';
import { apiUrl , filterData}  from './Data';
import { useEffect, useState } from 'react';
const App=()=>{

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [category ,setCategory] = useState(filterData[0].title);

  async function fetchData(){  
    
    setLoading(true);

    try{
      //function for fetching the api data
  const response = await fetch(apiUrl);
  const output = await response.json();
  console.log(output);
  setCourses(output.data);
    
  }
catch(error){
         toast.error("something went wrong");
}

 setLoading(false);
}
   
  useEffect(()=>{
          
      fetchData();
  } , []);
   


  return (
    <div className="flex flex-col min-h-screen bg-slate-600 justify-center items-center "  >

      <div className="bg-slate-950 w-full" >
      <Navbar/>
      </div>

         <div>
         <Filter 
               
               filterData = {filterData}
               category={category}
               setCategory={setCategory}
          />
         </div>

      <div>
      {
        loading ? (<Spinner/>):(<Cards courses = {courses} category = {category}/>)
      }
      </div>
    </div>
  );
}
export default App;
