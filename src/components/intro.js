import { Col, Container, Row, Button} from "react-bootstrap";

const Intro = () => {
return(
    <div className="intro">
    <Container className="text-white text-center d-flex justify-content-center align-items-center">
      <Row>
        <Col>
        <div className="tittle">DOWNLOAD KUMPULAN</div>
        <div className="tittle">FILM HOROR GRATIS</div>
        <div className="introButton mt-4 text-center">
            <Button variant="dark" href="#trending">Lihat Semua Nya</Button>

        </div>
       
        </Col>
      </Row>
    </Container>
    </div>
)
}

export default Intro