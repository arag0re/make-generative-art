import React from "react";
import styled from "styled-components";

import * as ethers from "ethers";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./App.css";
import Navigation from "./components/Navbar";
import { getAlgorithmValue } from "./components/AlgorithmKeys";

const ButtonDiv = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 250px;
  height: 50px;
  object-fit: none;
`;

const Description = styled.p`
  margin-top: 20px;
`;

function generateRandom() {
  let randomSeed = Math.floor(Math.random() * 10000000000000);
  let randomSeedString = ethers.utils.hexlify(randomSeed);
  return ethers.utils.keccak256(randomSeedString);
}

function App() {
  const [loaded, setLoaded] = React.useState(0);

  let initSeed = generateRandom();
  const [seed, setSeed] = React.useState(initSeed);

  let initAlgorithm = getAlgorithmValue("Chromie Squiggle");
  const [algorithm, setAlgorithm] = React.useState(initAlgorithm);

  let initImageHTML = generateHTML(algorithm, seed);
  const [imageHTML, setImageHTML] = React.useState(initImageHTML);

  function handleSetAlgorithm(algorithm: string) {
    let newRNG = generateRandom();
    setSeed(newRNG);
    setAlgorithm(getAlgorithmValue(algorithm));
    setImageHTML(generateHTML(getAlgorithmValue(algorithm), newRNG));
  }

  function handleGenerate() {
    let newRNG = generateRandom();
    setSeed(newRNG);
    setImageHTML(generateHTML(algorithm, newRNG));
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  console.log(seed);

  function generateHTML(algorithm: string, seed: string) {
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
			  hash: "${seed}",
			  hashes: ["${seed}"],
		  };
	  </script>
	  <script src="algorithms/${algorithm}"></script>
  </html>
	  `;

    return rawHTML;
  }

  function renderIFrame() {
    let dims = getWindowDimensions();
    let width = dims["width"];
    if (width < 600) {
      return (
        <iframe
          title="ArtBlocks"
          height="400"
          srcDoc={imageHTML}
          scrolling="no"
          frameBorder={0}
          allowFullScreen
          sandbox="allow-scripts"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setLoaded(1)}
        ></iframe>
      );
    } else {
      return (
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
      );
    }
  }

  return (
    <>
      <Navigation handleSetAlgorithm={handleSetAlgorithm} />
      <Container fluid>
        <Row>{renderIFrame()}</Row>

        <ButtonDiv>
          <StyledButton variant="dark" onClick={() => handleGenerate()}>
            Generate
          </StyledButton>
          <Description>
            This was generated using the seed
            <br />
            <i>{seed}</i>
          </Description>

          <Description>
            Save this string if you like the art. <br />
            It is the only way to re-generate the same piece.
          </Description>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default App;
