import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Carousel, Card, Button } from 'react-bootstrap';
import './N1.css';

function App() {
  return (
    <>
    <body className='d1'>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">NO1 PIZZA</Navbar.Brand>
            <Nav className='c2'>
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#menu">MENU</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
              <Nav.Link href="#aboutus">ABOUT US</Nav.Link>

            </Nav>
          </Container>
        </Navbar>

      </div>
      <div className='c6'>
        <Carousel>
          <Carousel.Item>
            <img
              className='c1'
              src={require('./img/z1.jpg')}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='c1'
              src={require('./img/z2.png')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='c1'
              src={require('./img/z3.jpg')}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='c8'>
        <div>
          <Card style={{ width: '18rem',float:'left',margin:'60px',backgroundColor:'brown' }}>
            <Card.Img variant="top" className='c3' src={require('./img/z4.jpg')} />
            <Card.Body className='c7'>
              <Card.Title>MARGHERITA PIZZA</Card.Title>
              </Card.Body>
          </Card>

          <Card style={{ width: '18rem',float:'left',margin:'60px',backgroundColor:'brown' }}>
            <Card.Img variant="top" className='c4' src={require('./img/z5.jpg')} />
            <Card.Body className='c7'>
              <Card.Title>TOMATO CHEESE PIZZA</Card.Title>
              </Card.Body>
          </Card>

          <Card style={{ width: '18rem',float:'left',margin:'60px',backgroundColor:'brown' }}>
            <Card.Img variant="top" className='c5' src={require('./img/z6.png')} />
            <Card.Body className='c7'>
              <Card.Title>PRETZEL CRUST PIZZA</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>


      <div>
          <Card style={{ width: '18rem',float:'left',margin:'60px',backgroundColor:'brown' }}>
            <Card.Img variant="top" className='c3' src={require('./img/z7.webp')} />
            <Card.Body className='c7'>
              <Card.Title>THINK CRUST PIZZA</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',float:'left',margin:'60px',backgroundColor:'brown' }}>
            <Card.Img variant="top" className='c4' src={require('./img/z8.jpg')} />
            <Card.Body className='c7'>
              <Card.Title>7 CHEESY PIZZA</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',float:'left',margin:'60px',backgroundColor:'brown' }}>
            <Card.Img variant="top" className='c5' src={require('./img/z8.webp')} />
            <Card.Body className='c7'>
              <Card.Title>ONION PIZZA</Card.Title>
           
            </Card.Body>
          </Card>
        </div>
    
        </body>
    </>
   
  );
}

export default App;
