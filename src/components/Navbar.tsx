import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { AlgorithmKeys } from "./AlgorithmKeys";

interface NavInterface {
  handleSetAlgorithm: (algorithm: string) => void;
}

const Navigation = (props: NavInterface) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/make-generative-art/">
            Make Generative Art
          </Navbar.Brand>

          <NavDropdown
            title="Change Algorithm"
            id="navbarScrollingDropdown"
            className="me-auto"
          >
            {AlgorithmKeys().map((key) => (
              <NavDropdown.Item
                as="button"
                onClick={() => props.handleSetAlgorithm(key)}
              >
                {key}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
