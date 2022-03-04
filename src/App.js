
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Card, Modal, InputGroup, FormControl} from 'react-bootstrap';
import './App.scss';



function App() {

  let [modal,modalShow] = useState(false);

  return (
    <div className='App'>
      <div className='nav-center'>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="navbar-title" href="#home">L O O K S</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className='head-title'>
        <span>LOOKS</span>
        <span className='head-blog'>.blog</span>
      </div>
      <div className='col text-center'>
        <Button className="btn-font px-4 py-2" variant="dark" onClick={() => {modalShow(true)}}>글쓰기</Button>
      </div>
      <div>
        {
          modal === true
          ? <Modal.Dialog className='modal-back'>
              <Modal.Header>
                <p className='modal-title'>Title<FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='제목을 입력해 주세요' /></p>
                
              </Modal.Header>
              <Modal.Footer>

              <FormControl as="textarea" aria-label="With textarea" placeholder='내용을 입력해 주세요'/>
                <Button variant="secondary" onClick={() => {modalShow(false)}}>닫기</Button>
                <Button variant="primary">발행하기</Button>
              </Modal.Footer>
            </Modal.Dialog>
          : null
        }
      </div>
        <div className='container'>
          <div className='row'>
            <Card className='card-mg col-md-4' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-mg col-md-4' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-mg col-md-4' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </div>
        </div>
    </div>
  );
}

export default App;

// 1. 좋은 레퍼런스 찾기 블로그 
// 2. googlefont 바꾸기 claer!
// 3. html 하기 하는 중
// 4. 블로그 Card 디자인(html,css하기)
// 5. modal창 만들기