import {useState, useEffect} from 'react';
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
  const [cursor, setCursor] = useState('left');
  const [leftBound, setLeftBound] = useState();
  const [rightBound, setRightBound] = useState();

  useEffect(() => {
    let curs = document.querySelector('#carousel');
    let offset = curs.offsetWidth
    
    setBounds(offset)
  }, []);


  function setBounds(offset){
    setLeftBound(Math.floor(offset/2));
    setRightBound(Math.floor(offset/2) + 1);
  }

  function handleMouseMove(e){
    e.preventDefault();
    let cursorPos = e.nativeEvent.offsetX;
    if(cursorPos <= leftBound){
      return setCursor('left');
    }else{
      return setCursor('right');
    }
  }

  function handleClick(e){
     e.preventDefault();
     console.log(cursor);
     if(cursor === 'right'){

      if(index === imageSet.length -1){
        setIndex(0);
        setImage(imageSet[index]);
        console.log(index);
      }else{
       setIndex(index + 1);
       setImage(imageSet[index]);
       console.log(index);
      }

     }else if(cursor === 'left'){
       if(index > 0){
        setIndex(index - 1);
        setImage(imageSet[index]);
        console.log(index);
       }else if(index === 0){
         setIndex(imageSet.length - 1);
         setImage(imageSet[index]);
         console.log(index);

       }
     }
    }



  return(
    <section id="carousel" className={cursor} onMouseMove={handleMouseMove}>
      <img src={image.src} alt={image.alt} className="carousel-image" onClick={handleClick} draggable="false"/>
    </section>
  )
}

export default Carousel; 