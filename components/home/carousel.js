import {useState, useEffect} from 'react';
import imageData from '../../public/images/carousel/imageData';

var ind = 0;

function Carousel(){

  let imageSet = [];
  imageData.forEach(img => {
    let display = {};
    display.src = img.src;
    display.alt = img.alt;
    imageSet.push(display);
  });

  const [image, setImage] = useState(imageSet[0]);  
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
     console.log(ind);
     if(cursor === 'right'){
      ind = (ind + 1) % imageSet.length;
      console.log(ind);
      return setImage(imageSet[ind]);
     }else if(cursor === 'left'){
      ind = (ind - 1 + imageSet.length) % imageSet.length;
      return setImage(imageSet[ind]);
     }
    }




  return(
    <section id="carousel" className={cursor} onMouseMove={handleMouseMove}>
      <img src={image.src} alt={image.alt} className="carousel-image" onClick={handleClick} draggable="false"/>
      <div id="photo-data">

          <p id="use">Home Office <br/> 142 Feet Squared</p>
          <p id="location">Laurelhurst Neighborhood <br/> Seattle, Washington</p>

      </div>
    </section>
  )
}

export default Carousel; 