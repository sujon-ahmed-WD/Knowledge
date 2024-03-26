 import { useEffect, useState } from "react";
import Blog from "../Blog/blog";
 
const Blogs = () => {
    const[Blogs,setnewBolgs]=useState([])

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>setnewBolgs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{Blogs.length}</h1>
            {
                Blogs.map((blog,id)=><Blog  
                 blog={blog} key={id}></Blog>)
            }

        
             
        </div>
    );
};

export default Blogs;