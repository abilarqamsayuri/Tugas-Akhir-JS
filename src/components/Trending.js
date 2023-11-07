import { Card, Container, Row, Col, Image } from "react-bootstrap"
import a1 from "../assets/images/Horornew/trending1.jpg"
import a2 from "../assets/images/Horornew/trending4.jpg"
import a3 from "../assets/images/Horornew/trending7.jpg"
import a4 from "../assets/images/Horornew/barat.jpg"
import a5 from "../assets/images/Horornew/trandingthai.jpg"
import a6 from "../assets/images/Horornew/trending2.jpg"
const Trending = () => {
  return(
    <div>
      <Container>
        <br  />
        <h1 className="text-white">FILM TRENDING</h1>
        <br  />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-dark text-white movieImage">
            <Image src={a1} alt="Bayi Ajaib Movies"/>
              <div className="m-2 p-2">
              <Card.Title className="text-center">SIKSA NERAKA</Card.Title>
              <Card.Text className="text-left">Last updated 3 mins ago
              </Card.Text>
              </div>
              <button className="btn1">Trailer</button>
              <button className="btn2">Unduh</button>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
            <Image src={a2} alt="Bayi Ajaib Movies"/>
              <div className="m-2 p-2">
              <Card.Title className="text-center">INSIDIOUS</Card.Title>
              <Card.Text className="text-left">Last updated 3 mins ago
              </Card.Text>
              </div>
              <button className="btn1">Trailer</button>
              <button className="btn2">Unduh</button>
            </Card>
          </Col>  
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
            <Image src={a3} alt="Bayi Ajaib Movies"/>
              <div className="m-2 p-2">
              <Card.Title className="text-center">DESA PENARI</Card.Title>
              <Card.Text className="text-left">Last updated 3 mins ago
              </Card.Text>
              </div>
              <button className="btn1">Trailer</button>
              <button className="btn2">Unduh</button>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
            <Image src={a4} alt="Bayi Ajaib Movies"/>
              <div className="m-2 p-2">
              <Card.Title className="text-center">PENTAGRAM</Card.Title>
              <Card.Text className="text-left">Last updated 3 mins ago
              </Card.Text>
              </div>
              <button className="btn1">Trailer</button>
              <button className="btn2">Unduh</button>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
            <Image src={a5} alt="Bayi Ajaib Movies"/>
              <div className="m-2 p-2">
              <Card.Title className="text-center">THE MEDIUM</Card.Title>
              <Card.Text className="text-left">Last updated 3 mins ago
              </Card.Text>
              </div>
              <button className="btn1">Trailer</button>
              <button className="btn2">Unduh</button>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
            <Image src={a6} alt="Bayi Ajaib Movies"/>
              <div className="m-2 p-2">
              <Card.Title className="text-center">THE NUN</Card.Title>
              <Card.Text className="text-left">Last updated 3 mins ago
              </Card.Text>
              </div>
              <button className="btn1">Trailer</button>
              <button className="btn2">Unduh</button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>     
    )
 }

 export default Trending
    