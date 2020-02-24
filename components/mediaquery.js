const [width, setWidth] = useState();

useEffect(() => {
  setWidth(window.innerWidth);
  window.addEventListener('resize', updateWindowSize);
}, []);


const renderMax = (media, width, children = null) => {
  return media >= width ? children : null; 
}

const renderMin = (media, width, children = null) => {
  return media <= width ? children : null; 
}

export const Max = props => renderMax(props.media, props.width,  props.children); 
export const Min = props => renderMin(props.media, props.width, props.children);
