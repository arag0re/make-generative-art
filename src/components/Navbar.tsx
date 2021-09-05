import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { AlgorithmKeys } from "./AlgorithmKeys";
import styled from "styled-components";

interface NavInterface {
  handleSetAlgorithm: (algorithm: string) => void;
}

const NavDropdownTitle = styled.span`
  color: white !important;
  font-size: 16px;
`;

const Navigation = (props: NavInterface) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/make-generative-art/">
            Make Generative Art
          </Navbar.Brand>

          <NavDropdown
            title={<NavDropdownTitle>Choose Algorithm</NavDropdownTitle>}
            id="navbarScrollingDropdown"
            className="me-auto"
            menuVariant="dark"
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
