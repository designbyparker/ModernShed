import { useState, useEffect } from 'react';
import {useSwipeable, Swipeable} from 'react-swipeable';

var imageIndex = 0;

const MobileCarousel = (props) => {
  const sheds = [
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
  ]



  let imageSet = [];
  sheds.forEach(img => {
    let display = {};
    display.url = img.mobile;
    display.alt = img.alt;
    imageSet.push(display);
  });

  const [image, setImage] = useState(imageSet[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      imageIndex = (imageIndex - 1 + imageSet.length) % imageSet.length;
      setImage(imageSet[imageIndex]);
    }, 5000);
    return () => clearInterval(timer);
  },[]);

  const handleRightSwipe = (e) => {
    imageIndex = (imageIndex + 1) % imageSet.length;
    return setImage(imageSet[imageIndex]);
  }

  const handleLeftSwipe = (e) => {
    imageIndex = (imageIndex - 1 + imageSet.length) % imageSet.length;
    return setImage(imageSet[imageIndex]);
  }

  return(
  <section className="carousel" id="mobile-carousel">
    <Swipeable onSwipedLeft={handleLeftSwipe} onSwipedRight={handleRightSwipe} >
      <img src={image.url} alt={image.alt} className="mobile-carousel-image" draggable="false"/>
    </Swipeable>
  </section>
  )
}

export default MobileCarousel;