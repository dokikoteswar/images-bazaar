import React,{useState} from "react";
import ImageSearch from "./Components/ImageSearch";
import ImageGallery from "./Components/ImageGallery";

const App = ()=>{
  const [imageList, setImageList] = useState([]);

  return(
   
      <div>
      <div className="header-top">
      <h1 >Image bazaar</h1>
      <ImageSearch setImageList={setImageList}/>
      </div>
      <ImageGallery imageList={imageList}/>
      </div>



  )
}

export default App;