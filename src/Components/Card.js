import React from 'react'
import {FcLike} from 'react-icons/fc'
import { FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify'
export default function Card({course,liked , setliked}) {
     
  function clickhandler(){
    if(liked.includes(course.id)){       //pehle se liked ho and liked se hatana hai
        setliked((prev)=> prev.filter( (likedCourseid)=>(likedCourseid!==course.id) ))
        toast.warning("like removed");
    }
    else{ //pehle se liked nahi hai ye course and add krna hai liked courses mei
      if(liked.length===0){
         setliked(course.id);
      }
      else{
        //pehle se liked hai and baaki bhi add krna hai
           
        setliked((prev)=>[...prev,course.id]);
      }
      toast.success("liked successfully");

    }
   
   
  }

  return (
    <div className=" w-[250px] lg:w-[300px] bg-slate-900 h-[400px] ">
        <div >
        <img className=" lg:h-[200px] w-[300px]" src={course.image.url} alt='images'/>
         
        <div className="bg-white ml-2 rounded-full h-[40px] w-[40px] flex justify-center items-center">
            <button onClick={clickhandler}>
               {
                  liked.includes(course.id) ?  <FcLikePlaceholder/>: <FcLike/>
               }
            </button>
         </div>

        </div>

        <div>
            <p className="text-white text-[18px] ml-3 font-bold">{course.title}</p>
            
            <p className="text-white ml-2">
                    {
                      course.description.length>100 ? (course.description.substr(0,100) + "..."):(course.description)
                    }
              </p>
        </div>
      
    </div>
  )
}
