import './Carrousel.css';
import Carousel from 'react-bootstrap/Carousel'

const Carrousel = () => {

    return (
        <Carousel fade className='carrousel-main'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-1"
                    src="../assets/images/carrousel/carrousel1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-2"
                    src="../assets/images/carrousel/carrousel2.jfif"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-3"
                    src="../assets/images/carrousel/carrousel3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-4"
                    src="../assets/images/carrousel/carrousel4.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrousel;