import { useState, useEffect } from 'react';
import {useSwipeable, Swipeable} from 'react-swipeable';

var imageIndex = 0;

const MobileCarousel = () => {
  const imageData = [
    {
      src: '/images/carousel/sf-studio.jpg',
      alt: 'San Fransico Studio',
      mobile: '/images/carousel/mobile1.jpeg'
    },
    {
      src: '/images/carousel/sd-studio.jpg',
      alt: 'San Diego Studio',
      mobile: '/images/carousel/mobile2.jpeg'
    },
    {
      src: '/images/carousel/home-office.jpg',
      alt: 'Home Office',
      mobile: '/images/carousel/mobile3.jpeg'
    }
  ];



  let imageSet = [];
  imageData.forEach(img => {
    let display = {};
    display.mobile = img.mobile;
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
      <img src={image.mobile} alt={image.alt} className="mobile-carousel-image" draggable="false"/>
    </Swipeable>
  </section>
  )
}

export default MobileCarousel;