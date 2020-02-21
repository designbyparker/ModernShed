import React from 'react';
import { useEffect, useState } from "react";

const getClientWidth = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return width;
}

const renderMax = (media, children = null) => {
  let width = getClientWidth();
  console.log(width, 'from render max');
  return media >= width ? children : null; 
}

const renderMin = (media, children = null) => {
  let width = getClientWidth();
  return media <= width ? children : null; 
}

export const Max = props => renderMax(props.media, props.children); 
export const Min = props => renderMin(props.media, props.children);
