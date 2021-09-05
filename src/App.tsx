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
	"70s Pop Ghost Bonus Pack 👻": "70s_pop_ghost_bonus_pack_👻.js",
	"70s Pop Series Two": "70s_pop_series_two.js",
	Abstraction: "abstraction.js",
	"Aerial View": "aerial_view.js",
	"Alien Clock": "alien_clock.js",
	"Alien Insects": "alien_insects.js",
	Andradite: "andradite.js",
	Antennas: "antennas.js",
	Apparitions: "apparitions.js",
	Archetype: "archetype.js",
	Asterisms: "asterisms.js",
	"Breathe You": "breathe_you.js",
	Brushpops: "brushpops.js",
	CENTURY: "century.js",
	Calendart: "calendart.js",
	CatBlocks: "catblocks.js",
	Cells: "cells.js",
	"Chromie Squiggle": "chromie_squiggle.js",
	"Color Magic Planets": "color_magic_planets.js",
	"Color Study": "color_study.js",
	CryptoGodKing: "cryptogodking.js",
	Cryptoblots: "cryptoblots.js",
	"Cyber Cities": "cyber_cities.js",
	"Dear Hash,": "dear_hash,.js",
	Divisions: "divisions.js",
	"Dot Grid": "dot_grid.js",
	"Dot Matrix Gradient Study": "dot_matrix_gradient_study.js",
	Dreams: "dreams.js",
	"Dynamic Slices": "dynamic_slices.js",
	Eccentrics: "eccentrics.js",
	Ecumenopolis: "ecumenopolis.js",
	Elementals: "elementals.js",
	"Elevated Deconstructions": "elevated_deconstructions.js",
	Empyrean: "empyrean.js",
	Enchiridion: "enchiridion.js",
	EnergySculpture: "energysculpture.js",
	Ensō: "ensō.js",
	"Event Horizon Sunset (Series C)": "event_horizon_sunset_(series_c).js",
	"Fake Internet Money": "fake_internet_money.js",
	Fidenza: "fidenza.js",
	Flowers: "flowers.js",
	Frammenti: "frammenti.js",
	Gazettes: "gazettes.js",
	"Gen 2": "gen_2.js",
	"Gen 3": "gen_3.js",
	Gizmobotz: "gizmobotz.js",
	"Good Vibrations": "good_vibrations.js",
	"Gravity 12": "gravity_12.js",
	"Gravity Grid": "gravity_grid.js",
	Hashtractors: "hashtractors.js",
	Hieroglyphs: "hieroglyphs.js",
	"High Tide": "high_tide.js",
	HyperHash: "hyperhash.js",
	"I Saw It in a Dream": "i_saw_it_in_a_dream.js",
	Incantation: "incantation.js",
	Inspirals: "inspirals.js",
	Labyrometry: "labyrometry.js",
	"LeWitt Generator Generator": "lewitt_generator_generator.js",
	"Libertad Parametrizada": "libertad_parametrizada.js",
	"Low Tide": "low_tide.js",
	Neighborhood: "neighborhood.js",
	Nucleus: "nucleus.js",
	"Octo Garden": "octo_garden.js",
	"Ode to Roy": "ode_to_roy.js",
	"Organized Disruption": "organized_disruption.js",
	"Origami Dream": "origami_dream.js",
	Orthogone: "orthogone.js",
	"Panelscape 🅰🅱": "panelscape_🅰🅱.js",
	"Paper Armada": "paper_armada.js",
	"Patchwork Saguaros": "patchwork_saguaros.js",
	Pathfinders: "pathfinders.js",
	"Patterns of Life": "patterns_of_life.js",
	Petri: "petri.js",
	Portal: "portal.js",
	PrimiDance: "primidance.js",
	Radiance: "radiance.js",
	Rapture: "rapture.js",
	Return: "return.js",
	Rhythm: "rhythm.js",
	Rinascita: "rinascita.js",
	Ringers: "ringers.js",
	"Scribbled Boundaries": "scribbled_boundaries.js",
	Sentience: "sentience.js",
	Sigils: "sigils.js",
	"Space Debris [m'aider]": "space_debris_[m'aider].js",
	"Space Debris [ravaged]": "space_debris_[ravaged].js",
	"Space Debris [warning]": "space_debris_[warning].js",
	Spaghettification: "spaghettification.js",
	"Speckled Summits": "speckled_summits.js",
	"Star Flower": "star_flower.js",
	"Stipple Sunsets": "stipple_sunsets.js",
	Stroming: "stroming.js",
	Subscapes: "subscapes.js",
	Synapses: "synapses.js",
	"Talking Blocks": "talking_blocks.js",
	Tangled: "tangled.js",
	"The Blocks of Art": "the_blocks_of_art.js",
	"The Opera": "the_opera.js",
	Timepiece: "timepiece.js",
	Traversals: "traversals.js",
	Trossets: "trossets.js",
	Unigrids: "unigrids.js",
	"Unknown Signals": "unknown_signals.js",
	"Variant Plan": "variant_plan.js",
	"View Card": "view_card.js",
	"Watercolor Dreams": "watercolor_dreams.js",
	"Wave Schematics": "wave_schematics.js",
	"[Dis]entanglement": "[dis]entanglement.js",
	autoRAD: "autorad.js",
	"glitch crystal monsters": "glitch_crystal_monsters.js",
	planets: "planets.js",
	"sail-o-bots": "sail-o-bots.js",
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
