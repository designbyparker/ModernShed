import {useState} from 'react';
import imageData from '../public/images/carousel/imageData';

function Carousel(){
  let imageSet = [];
  imageData.forEach(img => {
    let display = {};
    display.src = img.src;
    display.alt = img.alt;
    imageSet.push(display);
  });

  const [image, setImage] = useState(imageSet[0]);
  const [index, setIndex] = useState(0);

  function handleClick(e){
     e.preventDefault();
     if(index === imageSet.length -1){
       setIndex(0);
       setImage(imageSet[index]);
     }else{
      setIndex(index + 1);
      setImage(imageSet[index]);
     }

    
    }

  return(
    <>
      <img src={image.src} alt={image.alt} className="carousel-image" onClick={handleClick}/>
    </>
  )
}

export default Carousel;