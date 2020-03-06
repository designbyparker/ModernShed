import { useState, useEffect } from 'react';
import imageData from '../../public/images/carousel/imageData';
import {useSwipeable, Swipeable} from 'react-swipeable';

var imageIndex = 0;

const MobileCarousel = () => {
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