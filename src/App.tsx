import React from "react";
import * as ethers from "ethers";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

let algorithmKeys = {
	"Chromie Squiggle": "chromie_squiggle.js",
	Cryptoblots: "cryptoblots.js",
	"Dynamic Slices": "dynamic_slices.js",
	"Variant Plan": "variant_plan.js",
	"View Card": "view_card.js",
	"Elevated Deconstructions": "elevated_deconstructions.js",
	HyperHash: "hyperhash.js",
	Unigrids: "unigrids.js",
	Ringers: "ringers.js",
	"Cyber Cities": "cyber_cities.js",
	"Color Study": "color_study.js",
	"Gen 2": "gen_2.js",
	Sentience: "sentience.js",
	Archetype: "archetype.js",
	Pathfinders: "pathfinders.js",
	EnergySculpture: "energysculpture.js",
	Apparitions: "apparitions.js",
	Inspirals: "inspirals.js",
	Hieroglyphs: "hieroglyphs.js",
	Empyrean: "empyrean.js",
	Ensō: "ensō.js",
	"Aerial View": "aerial_view.js",
	Gazettes: "gazettes.js",
	"Paper Armada": "paper_armada.js",
	Synapses: "synapses.js",
	Elementals: "elementals.js",
	"Origami Dream": "origami_dream.js",
	CryptoGodKing: "cryptogodking.js",
	"Gravity Grid": "gravity_grid.js",
	Asterisms: "asterisms.js",
	"Gen 3": "gen_3.js",
	"Dear Hash,": "dear_hash,.js",
	"The Opera": "the_opera.js",
	"Stipple Sunsets": "stipple_sunsets.js",
	"Star Flower": "star_flower.js",
	Subscapes: "subscapes.js",
	"Talking Blocks": "talking_blocks.js",
	Rhythm: "rhythm.js",
	"Color Magic Planets": "color_magic_planets.js",
	"Watercolor Dreams": "watercolor_dreams.js",
	"Event Horizon Sunset (Series C)": "event_horizon_sunset_(series_c).js",
	"Ode to Roy": "ode_to_roy.js",
	Traversals: "traversals.js",
	"Patchwork Saguaros": "patchwork_saguaros.js",
	Petri: "petri.js",
	Abstraction: "abstraction.js",
	Antennas: "antennas.js",
	Andradite: "andradite.js",
	Frammenti: "frammenti.js",
	CatBlocks: "catblocks.js",
	"The Blocks of Art": "the_blocks_of_art.js",
	"Breathe You": "breathe_you.js",
	Return: "return.js",
	Fidenza: "fidenza.js",
	"Space Debris [m'aider]": "space_debris_[m'aider].js",
	"Space Debris [warning]": "space_debris_[warning].js",
	"Space Debris [ravaged]": "space_debris_[ravaged].js",
	Incantation: "incantation.js",
	"Panelscape 🅰🅱": "panelscape_🅰🅱.js",
	PrimiDance: "primidance.js",
	"70s Pop Series Two": "70s_pop_series_two.js",
	Stroming: "stroming.js",
	"Patterns of Life": "patterns_of_life.js",
	Orthogone: "orthogone.js",
	Dreams: "dreams.js",
	Hashtractors: "hashtractors.js",
	planets: "planets.js",
	"Libertad Parametrizada": "libertad_parametrizada.js",
	Sigils: "sigils.js",
	Portal: "portal.js",
	"Gravity 12": "gravity_12.js",
	"[Dis]entanglement": "[dis]entanglement.js",
	"sail-o-bots": "sail-o-bots.js",
	Spaghettification: "spaghettification.js",
	CENTURY: "century.js",
	Enchiridion: "enchiridion.js",
	"I Saw It in a Dream": "i_saw_it_in_a_dream.js",
	"Octo Garden": "octo_garden.js",
	Eccentrics: "eccentrics.js",
	Gizmobotz: "gizmobotz.js",
	Radiance: "radiance.js",
	"Low Tide": "low_tide.js",
	Divisions: "divisions.js",
	"Speckled Summits": "speckled_summits.js",
	"70s Pop Ghost Bonus Pack 👻": "70s_pop_ghost_bonus_pack_👻.js",
	"Alien Clock": "alien_clock.js",
	"glitch crystal monsters": "glitch_crystal_monsters.js",
	"Dot Grid": "dot_grid.js",
	Flowers: "flowers.js",
	"LeWitt Generator Generator": "lewitt_generator_generator.js",
	Ecumenopolis: "ecumenopolis.js",
	Rinascita: "rinascita.js",
	Cells: "cells.js",
	Nucleus: "nucleus.js",
	Calendart: "calendart.js",
	Timepiece: "timepiece.js",
	Labyrometry: "labyrometry.js",
	"Scribbled Boundaries": "scribbled_boundaries.js",
	Tangled: "tangled.js",
	"Organized Disruption": "organized_disruption.js",
	"Wave Schematics": "wave_schematics.js",
	Brushpops: "brushpops.js",
	"Alien Insects": "alien_insects.js",
	"Good Vibrations": "good_vibrations.js",
	Rapture: "rapture.js",
	"Unknown Signals": "unknown_signals.js",
	autoRAD: "autorad.js",
	Neighborhood: "neighborhood.js",
	Trossets: "trossets.js",
	"Dot Matrix Gradient Study": "dot_matrix_gradient_study.js",
	"High Tide": "high_tide.js",
	"Fake Internet Money": "fake_internet_money.js",
};

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

function App() {
	const [loaded, setLoaded] = React.useState(0);

	let initAlgorithm = algorithmKeys["Chromie Squiggle"];
	const [algorithm, setAlgorithm] = React.useState(initAlgorithm);

	console.log(algorithm);

	let initImageHTML = generateHTML(algorithm);
	const [imageHTML, setImageHTML] = React.useState(initImageHTML);

	const getKeyValue = (key: any) => (obj: any) => obj[key];

	return (
		<Container fluid>
			<Row>
				{!loaded ? <Spinner animation="border" role="status"></Spinner> : null}
				<iframe
					title="ArtBlocks"
					width="100%"
					height="600"
					srcDoc={imageHTML}
					scrolling="no"
					frameBorder={0}
					allowFullScreen
					sandbox="allow-scripts"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					onLoad={() => setLoaded(1)}
				></iframe>
			</Row>

			<Row>
				<Col>
					<Button
						variant="primary"
						onClick={() => setImageHTML(generateHTML(algorithm))}
					>
						Generate
					</Button>
				</Col>
				<Col>
					<DropdownButton id="dropdown-item-button" title="Pick Algorithm">
						{Object.keys(algorithmKeys).map((key) => (
							<Dropdown.Item
								as="button"
								onClick={() => {
									setAlgorithm(getKeyValue(key)(algorithmKeys));
									setImageHTML(generateHTML(getKeyValue(key)(algorithmKeys)));
								}}
							>
								{key}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
