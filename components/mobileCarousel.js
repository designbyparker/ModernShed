import { useState, useEffect } from 'react';
import imageData from '../public/images/carousel/imageData';
import {useSwipeable, Swipeable} from 'react-swipeable';

var imageIndex = 0;

function MobileCarousel(){
  let imageSet = [];
  imageData.forEach(img => {
    let display = {};
    display.mobile = img.mobile;
    display.alt = img.alt;
    imageSet.push(display);
  });

  const [image, setImage] = useState(imageSet[0]);

  function handleRightSwipe (e){
    imageIndex = (imageIndex + 1) % imageSet.length;
    return setImage(imageSet[imageIndex]);
  }

  function handleLeftSwipe(e){
    imageIndex = (imageIndex - 1 + imageSet.length) % imageSet.length;
    return setImage(imageSet[imageIndex]);
  }

  return(
  <section class="carousel" id="mobile-carousel">
    <Swipeable onSwipedLeft={handleLeftSwipe} onSwipedRight={handleRightSwipe} >
      <img src={image.mobile} alt={image.alt} className="mobile-carousel-image" draggable="false"/>
    </Swipeable>
  </section>
  )
}

export default MobileCarousel;