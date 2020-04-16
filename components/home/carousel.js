import {useState, useEffect} from 'react';

var ind = 0;

function Carousel(props){

  let imageSet = [];
  props.sheds[0].photos.forEach(img => {
    let display = {};
    display.src = img.url;
    display.alt = img.alt;
    display.desc1 = img.description1;
    display.desc2 = img.description2;
    display.desc3 = img.description3;
    display.desc4 = img.description4;

    imageSet.push(display);
  });
  console.log('image set, ', imageSet);

  const [image, setImage] = useState(imageSet[0]);  
  const [cursor, setCursor] = useState('left');
  const [leftBound, setLeftBound] = useState();
  const [rightBound, setRightBound] = useState();

  useEffect(() => {

    let curs = document.querySelector('#carousel');
    let offset = curs.offsetWidth;
    setBounds(offset);
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
     if(cursor === 'right'){ 
      ind = (ind + 1) % imageSet.length;
      return setImage(imageSet[ind]);
     }else if(cursor === 'left'){
      ind = (ind - 1 + imageSet.length) % imageSet.length;
      return setImage(imageSet[ind]);
     }
    }

    const handleScroll = (e) => {
      console.log('scroll event');
    }



  return(
    <section id="carousel" className={cursor} onMouseMove={handleMouseMove} onScroll={handleScroll}>
      <div className="carousel-image">
        <img src={image.src} alt={image.alt}  onClick={handleClick} draggable="false"/>
      </div> 
      <div id="photo-data">

          <p id="shed-use">{image.desc1}<br/> {image.desc2}</p>
          <p id="shed-location">{image.desc3}<br/> {image.desc4}</p>

      </div>
    </section>
  )
}

export default Carousel; 