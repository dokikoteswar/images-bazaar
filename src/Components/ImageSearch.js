import React,{useState, useEffect}from "react";
import axios from "axios";


const ImageSearch =({setImageList})=>{
    const [searchQuery, setSearchQuery] = useState('');


     useEffect(()=>{
        handelSubmit()
     },[])
    function handelSubmit(e){
       e && e.preventDefault();

        axios.get("https://api.unsplash.com/search/photos",
        {
           headers: {
            "Accept-Version" : "v1",
            Authorization : `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
           },
            params: {
                query: searchQuery || "random",
                per_page: 300
            }
        })
        .then((response) => {
            console.log(response.data);
            setImageList(response.data.results);
            setSearchQuery("");
        })
        .catch((error) => {
            console.log(error);
        })
        
    }
    return(
        <div>
             <form   onSubmit={handelSubmit}>
                <input  type="text" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
                <button className="rainbow rainbow-4 btn" type="submit">Search</button>
             </form>
        </div>
    )
}

export default ImageSearch;