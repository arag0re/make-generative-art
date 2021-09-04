import React from "react";
import * as ethers from "ethers";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function generateHTML() {
	let randomSeed = Math.floor(Math.random() * 10000000000000);
	let randomSeedString = ethers.utils.hexlify(randomSeed);

	let hash = ethers.utils.keccak256(randomSeedString);
	let hashes = [ethers.utils.keccak256(randomSeedString)];

	let rawHTML = `
  <!DOCTYPE html>
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
			hashes: "${hashes}",
		};
	  </script>
    <script src="fidenza.js"></script>
  </html>
  `;

	return rawHTML;
}

function App() {
	const [loaded, setLoaded] = React.useState(0);

	return (
		<div>
			{!loaded ? <Spinner animation="border" role="status"></Spinner> : null}
			<iframe
				title="ArtBlocks"
				width="100%"
				height="600"
				srcDoc={generateHTML()}
				scrolling="no"
				frameBorder={0}
				allowFullScreen
				sandbox="allow-scripts"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				onLoad={() => setLoaded(1)}
			></iframe>
		</div>
	);
}

export default App;
