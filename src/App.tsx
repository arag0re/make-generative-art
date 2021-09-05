import React from "react";
import styled from "styled-components";

import * as ethers from "ethers";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./App.css";
import Navigation from "./components/Navbar";
import { getAlgorithmValue } from "./components/AlgorithmKeys";

function generateHTML(algorithm: string) {
  let randomSeed = Math.floor(Math.random() * 10000000000000);
  let randomSeedString = ethers.utils.hexlify(randomSeed);

  let hash = ethers.utils.keccak256(randomSeedString);
  let hashes = ethers.utils.keccak256(randomSeedString);

  let rawHTML = `<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
	<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
	</head>

	<body></body>
	<script>
		let tokenData = {
			hash: "${hash}",
			hashes: ["${hashes}"],
		};
	</script>
	<script src="algorithms/${algorithm}"></script>
</html>
	`;

  return rawHTML;
}

const ButtonDiv = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 250px;
  height: 50px;
  object-fit: none;
`;

function App() {
  const [loaded, setLoaded] = React.useState(0);

  let initAlgorithm = getAlgorithmValue("Chromie Squiggle");
  const [algorithm, setAlgorithm] = React.useState(initAlgorithm);

  let initImageHTML = generateHTML(algorithm);
  const [imageHTML, setImageHTML] = React.useState(initImageHTML);

  function handleSetAlgorithm(algorithm: string) {
    setAlgorithm(getAlgorithmValue(algorithm));
    setImageHTML(generateHTML(getAlgorithmValue(algorithm)));
  }

  return (
    <>
      <Navigation handleSetAlgorithm={handleSetAlgorithm} />
      <Container fluid>
        <Row>
          {!loaded ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : null}
          <iframe
            title="ArtBlocks"
            height="700"
            srcDoc={imageHTML}
            scrolling="no"
            frameBorder={0}
            allowFullScreen
            sandbox="allow-scripts"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setLoaded(1)}
          ></iframe>
        </Row>

        <ButtonDiv>
          <StyledButton
            variant="dark"
            onClick={() => setImageHTML(generateHTML(algorithm))}
          >
            Generate
          </StyledButton>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default App;
