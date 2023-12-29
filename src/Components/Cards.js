import React, { useState } from 'react'
import Card from './Card';

export default function Cards({courses , category}) {
    const [liked ,setliked] =useState([]);

   
    const getCourses = ()=>{
        let allcourses =[];
        if(category==="All"){
            Object.values((courses)).forEach(array=>{
                array.forEach((coursedata)=>{
                    allcourses.push(coursedata);
                })
            })
            return allcourses;
        }
        else{
            return courses[category];
        }
     
    } 

  return (
    <div className="grid sm:grid-cols-1 gap-y-4  md:grid-cols-2 lg:grid-cols-3   lg:max-w-[1000px] md:gap-5 lg:gap-6 mt-8">
         {
            getCourses().map((course)=>{
                return (
                    <Card key={course.id}
                    course = {course}
                    liked = {liked} 
                    setliked = {setliked}
                />
                )
                
            })
         }
    </div>
  )
}
