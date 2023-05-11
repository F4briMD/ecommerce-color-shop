
import Carousel from 'react-bootstrap/Carousel';

export default function Carouselhome() {
    /*const[index,setIndex]=useState(0);
 
     const handleSelect = (selectedIndex, e)=>{
         setIndex(selectedIndex)
     }*/
    return (
        <div>
            <div className='container-slider'>
                <Carousel /*activeIndex={index} onSelecet={handleSelect}*/>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src="https://as01.epimg.net/meristation/imagenes/2020/11/23/noticias/1606131794_797507_1606132256_sumario_normal.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                            <h3> Increibles Ofertas En Black Friday!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src="https://http2.mlstatic.com/D_NQ_NP_953096-MLA46043841137_052021-OO.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                            <h3>Contamos con una gran variedad</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src="https://www.qempo.com.pe/blog/wp-content/uploads/2020/03/cual-es-la-mejor-pagina-para-comprar-por-internet.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                            <h3>Somos una empresa comprometida con nuestros clientes.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )

}

