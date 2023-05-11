import Card from 'react-bootstrap/Card';

export default function Cardsbts() {
  return (
    <div className='grid-cards'>
      <div>
        <Card style={{ width: '18rem', height: '350px' }}>
          <Card.Img style={{ height: '', objectFit: 'cover' }} variant="top" src="https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png" />
          <Card.Body>
            <Card.Title>Informacion</Card.Title>
            <Card.Text>
              En nuestra página web podrás encontrar toda la información sobre nuestra empresa.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', height: '350px' }}>
          <Card.Img variant="top" src="https://www.consultoriadigital.com.br/wp-content/uploads/2017/09/AMP.jpg" />
          <Card.Body>
            <Card.Title>Soporte 24/hr</Card.Title>
            <Card.Text>
              Nuestro equipo de soporte está disponible para ayudarle durante las 24 horas del día, los 7 días de la semana.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', height: '350px' }}>
          <Card.Img variant="top" src="https://loupbr.com/wp-content/uploads/2017/12/imagem-criacao-de-sites-600x450px-2.png" />
          <Card.Body>
            <Card.Title>Trabaja con Nosotros</Card.Title>
            <Card.Text>
              Spuedes enviar tu CV y carta de presentación a nuestro correo electrónico.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', height: '350px' }}>
          <Card.Img variant="top" src="https://hotmart.com/media/2018/08/BLOG_Imagens-Google_como-pesquisar-no-Google-usando-imagens-670x419-1.png" />
          <Card.Body>
            <Card.Title>Navega y Descubre</Card.Title>
            <Card.Text>
              Bienvenido a nuestra página web. Esta página web se ha diseñado para que pueda descubrir todos nuestros productos y servicios.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

