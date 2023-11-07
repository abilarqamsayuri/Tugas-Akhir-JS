import {Navbar, Container, Nav} from "react-bootstrap"  

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">NETROR</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#asia">ASIA</Nav.Link>
                <Nav.Link href="#barat">BARAT</Nav.Link>
                <Nav.Link href="#timurtengah">TIMUR TENGAH</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar