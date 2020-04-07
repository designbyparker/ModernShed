import {useState, useEffect} from 'react';

var ind = 0;

function Carousel(){

  const imageData = [
    {
      src: '/images/carousel/car1.jpg',
      alt: 'placeholder',
      mobile: '/images/carousel/mobile1.jpeg'
    },
    {
      src: '/images/carousel/car2.jpg',
      alt: 'placeholder',
      mobile: '/images/carousel/mobile2.jpeg'
    },
    {
      src: '/images/carousel/car3.jpg',
      alt: 'placeholder',
      mobile: '/images/carousel/mobile3.jpeg'
    },
    {
      src: '/images/carousel/car4.jpg',
      alt: 'placeholder',
      mobile:'/images/carousel/car4.jpg'
    }
  ];


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

    const handleScroll = (e) => {
      console.log('scroll event');
    }



  return(
    <section id="carousel" className={cursor} onMouseMove={handleMouseMove} onScroll={handleScroll}>
      <div className="carousel-image">
        <img src={image.src} alt={image.alt}  onClick={handleClick} draggable="false"/>
      </div> 
      <div id="photo-data">

          <p id="shed-use">Home Office <br/> 142 Feet Squared</p>
          <p id="shed-location">Laurelhurst Neighborhood <br/> Seattle, Washington</p>

      </div>
    </section>
  )
}

export default Carousel; 