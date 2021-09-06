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
  height: 70px;
  object-fit: none;
`;

const Description = styled.p`
  margin-top: 20px;
`;

const DescriptionCopy = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const ButtonText = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
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

  const [algorithm, setAlgorithm] = React.useState("Chromie Squiggle");

  let initImageHTML = generateHTML(algorithm, seed);
  const [imageHTML, setImageHTML] = React.useState(initImageHTML);

  function handleSetAlgorithm(algorithm: string) {
    let newRNG = generateRandom();
    setSeed(newRNG);
    setAlgorithm(algorithm);
    setImageHTML(generateHTML(algorithm, newRNG));
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

  document.addEventListener("keydown", logKey);

  function logKey(e: any) {
    if ((e.code == "Space" && e.target == document.body) || e.code == "Enter") {
      e.preventDefault();
      handleGenerate();
    }
  }

  function generateHTML(algorithm: string, seed: string) {
    let filename = getAlgorithmValue(algorithm);
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
	  <script src="algorithms/${filename}"></script>
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
          height="350"
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

  function handleCopyText() {
    const cb = navigator.clipboard;
    let msg = "You copied the seed " + seed;
    cb.writeText(seed).then(() => alert(msg));
  }

  return (
    <>
      <Navigation handleSetAlgorithm={handleSetAlgorithm} />
      <Container fluid>
        <Row>{renderIFrame()}</Row>

        <ButtonDiv>
          <StyledButton variant="dark" onClick={() => handleGenerate()}>
            <b>Generate</b> <br />
            (⎵ or Enter)
          </StyledButton>

          <Description>
            <i>Current Series: {algorithm}</i>
          </Description>

          <ButtonText onClick={() => handleCopyText()}>
            <DescriptionCopy>
              👉 Click this to copy the random seed used 👈
            </DescriptionCopy>
          </ButtonText>

          <Description>
            The seed is how the art piece gets generated. <br />
            Keep it close, or you will never be able to regenerate this exact
            piece ever again.
          </Description>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default App;
