import React ,{ useState } from 'react'
import ImageGallery from 'react-image-gallery';
import b from '../../images/mobile.png';
import Carousel from 'react-bootstrap/Carousel';

export const ProdectSlider = () => {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <div className="product-gallary-card">
        <Carousel variant='dark'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={b}
              alt="First slide"
              draggable = 'false'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={b}
              alt="Second slide"
              draggable = 'false'
            />
          </Carousel.Item>
          <Carousel.Item>
        
            <img
              className="d-block w-100"
              src={b}
              alt="Third slide"
              draggable = 'false'
            />
          </Carousel.Item>
    </Carousel> 
    </div>
  )
}
