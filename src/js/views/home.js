import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Product } from "../component/product";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	static contextType = Context;
	constructor(props) {
		super(props);

		this.state = {
			products: [
				{
					name: "ANDETHIOURAYE",
					price: 15.99,
					img:
						"https://www.madeinsenegal.app/wp-content/uploads/2020/08/Consommez-s%C3%A9n%C3%A9galais-images-91.png",
					description: "Ceramic “Thiouraye” (Senegalese incense) burner",
					continent: "AFRICA",
					country: "Algeria"
				},
				{
					name: "ETHNIC TUAREG BRACELET",
					price: 49.99,
					img:
						"https://yaramaafrica.com/wp-content/uploads/2016/04/5178ab_2dae7ee819ee4a6fa250e77214fd5864.jpg",
					description:
						"Unique and exceptional bracelet made by expert goldsmiths of the Tuareg ethnic group, using as raw material ebony wood and sterling silver (925 parts of pure silver and 75 parts of copper).Typical ornament of Touareg women, exclusive and of great beauty that will be appreciated over time thanks to the quality of the materials used and their finish.",
					continent: "AFRICA",
					country: "Nigeria"
				},
				{
					name: "Coconut kalimba. instrument",
					price: 25.99,
					img: "https://images-na.ssl-images-amazon.com/images/I/51A82KJzUxL._AC_SX466_.jpg",
					description:
						"The calimba is an African percussion instrument, which is spread throughout the continent, being the modern version of the traditional .It can be made of different materials, as well as having an indeterminate number of shades, which can range from 6 to 17.The thumbs of both hands are used to sound the calimba.",
					continent: "AFRICA",
					country: "Madagascar"
				},
				{
					name: "letter opener knife. rosewood wood",
					price: 15.99,
					img: "https://i.etsystatic.com/15527997/r/il/d8812d/1584530881/il_570xN.1584530881_gca1.jpg",
					description:
						"Rosewood takes its name because of its reddish tones, although it is a richly toned wood, often brown with darker grains, but with many different hues.Rosewood wood is heavy, having an excellent polish, being suitable for making guitars, billiard cues and various crafts, as well as various household utensils.",
					continent: "AFRICA",
					country: "Ghana"
				},

				{
					name: "Drawn Peral Fan",
					price: 65.99,
					img: "https://artesamart.com/modules/ptssliderlayer/images/abanico1-sombra-giro-m.png",
					description:
						"Handmade fan, openwork rods made of pear wood. Cotton country. Hand painted, decorated on both sides with floral motifs and borders in various shades; representing the most classic and traditional style of the Spanish fan",
					continent: "EUROPE",
					country: "Espain"
				},
				{
					name: "Aran Jersey",
					price: 89.99,
					img:
						"https://3.bp.blogspot.com/-zrlJs7zSjrQ/WgOIGOhRyhI/AAAAAAAAET0/f8JPoXu0p5cy9fniW6WT7VrGCSQDjDlrQCLcBGAs/s1600/modnie_svitera_aranskoe_pletenie.jpg",
					description:
						"The Aran Sweater takes its name from the set of islands where it originated many generations ago, off the West coast of Ireland. The Aran Islands lie at the mouth of Galway Bay, at the mercy of the relentless Atlantic Sea. The Islanders were fishermen and farmers whose lives and livelihoods were deeply intertwined.",
					continent: "EUROPE",
					country: "Ireland"
				},
				{
					name: "Péckvillercher",
					price: 35.99,
					img: "https://clewlux.files.wordpress.com/2015/03/luxembourg.jpg?w=584",
					description:
						"The Péckvillercher is a small terracotta bird that sounds like the cuckoo’s sound when blowing in it. Every year, new colorful terracotta or ceramic small birds are sold during the festival. Simply curious or collector, come and admire them You can find there colorful Péckvillercher with one or some holes. They are sold at different prices. Usually, children love creating beautiful melodies with these pretty small birds.",
					continent: "EUROPE",
					country: "Luxembourg"
				},

				{
					name: "Feta Cheesse",
					price: 12.99,
					img: "https://demedbook.com/images/1/is-cheese-safe-for-people-with-diabetes_2.jpg",
					description:
						"Though cheese made from sheep's or goat's milk is documented in Greece from the 8th century BC, and was widely consumed in ancient Greece and in later Greek gastronomy, feta cheese in particular is first recorded in the Byzantine period under the name prósphatos",
					continent: "EUROPE",
					country: "Bulgaria"
				},

				{
					name: "Dreamcatchers",
					price: 20.99,
					img:
						"https://panamericana.vteximg.com.br/arquivos/ids/348182-600-690/atrapasuenos-contrachapado-con-plumas-y-flores-54-cm-7701016738668.jpg?v=637182310405000000",
					description:
						"Dream catchers can be traced back to the Ojibwes. The Ojibwe people started the phenomenon and over time, dream catchers became adopted by other tribes, cultures and even Nations.",
					continent: "ASIA",
					country: "Nepal"
				},
				{
					name: "Happiness Bottle",
					price: 22.99,
					img: "https://www.arasia-shop.com/4616-large_default/botella-felicidad.jpg",
					description:
						"This beautiful bottle filled with Himalayan herbs is very popular in Thailand for its many benefits: it is refreshing and anti-fatigue, clears the nose, and relieves headaches and vertigo. It has a stimulating and relaxing effect at the same time.",
					continent: "ASIA",
					country: "Thailand"
				},
				{
					name: "QI GONG BALLS",
					price: 19.99,
					img: "https://cdn.pixabay.com/photo/2014/02/23/12/56/qi-gong-272872_960_720.jpg",
					description:
						"The first Baoding balls were likely created in Hebei, China, during the Ming dynasty. Formerly, they were often called iron balls, as they were originally made of iron. Meditation balls continue to be produced there.",
					continent: "ASIA",
					country: "China"
				},
				{
					name: "Ganesh Notebook",
					price: 22.0,
					img: "https://www.arasia-shop.com/4760/cuaderno-ganesh.jpg",
					description:
						"These beautiful notebooks are handmade in India from recycled leather and paper. Ganesh's decoration is metal. Can be used as a travel diary, guest book, journal, to record dreams.",
					continent: "ASIA",
					country: "India"
				},
				{
					name: "idgeridoo",
					price: 70.0,
					img:
						"https://cdn.shopify.com/s/files/1/0141/6737/5930/products/didgeridoo-bamboo-with-painted-artwork_300x300.jpg?v=1575431289",
					description:
						"The Didgeridoo is a wooden BRASS instrument thought to have originated in Arnhem Land, Northern Territory, Australia. ... Researchers have suggested it may be the world's oldest musical instrument, over 40,000 years old. Oldest cave painting were dated 3000 to 5000 years old.",
					continent: "AUSTRALIA",
					country: "Arnhem Land"
				},
				{
					name: "Boomerang",
					price: 9.99,
					img:
						"https://civilianmilitaryintelligencegroup.com/wp-content/uploads/2017/04/2AB09C1400000578-0-image-m-4_1437476267874.jpg",
					description:
						"A boomerang is a thrown tool, typically constructed as a flat airfoil, that is designed to spin about an axis perpendicular to the direction of its flight. A returning boomerang is designed to return to the thrower. It is well known as a weapon used by some Aboriginal Australian peoples for hunting.",
					continent: "AUSTRALIA",
					country: "Adelaide"
				},
				{
					name: "Australian Opal",
					price: "$",
					img:
						"https://www.juwelo.fr/amg/9ac076892362c28eb14322edf79e54d4/800/media/catalog/product/source/eq/gemme-et-opale-boulder;3095eq.jpg",
					description:
						"The first discovery of common opals in Australia was made near Angaston (SA) by the German geologist Johannes Menge in 1849. Both the Queensland Boulder Opal and Lightning Ridge fields attracted miners in the 1880's. ... He made doublets, jewellery, and was one of the first to buy opal by the carat.",
					continent: "AUSTRALIA",
					country: "Tasmania"
				},
				{
					name: "Nephrite Ax",
					price: 250.0,
					img: "https://assets.catawiki.nl/assets/2019/5/7/a/1/5/a159b887-6154-4876-8bcf-8d09bfec69a3.jpg",
					description:
						"Exceptional big old bride Celt green stone Jade/Nephrite axe, Sentani Papua New Guinea. This old axe is fitted on a bronze custom base. The condition is excellent for its age. Ex collection Jan Van Den Abbeel, Gent (artist/painter) acquired in Amsterdam '65.",
					continent: "AUSTRALIA",
					country: "Popua New Guinea"
				},
				{
					name: "Canada Gold Coin",
					price: 2000.0,
					img:
						"https://img2.freepng.es/20180519/eat/kisspng-bullion-coin-canadian-gold-maple-leaf-gold-coin-5b0009eb449991.981776951526729195281.jpg",
					description:
						"The Royal Canadian Mint introduced the 1-ounce coin in 1979. ... This coin made history as the first bullion coin to be struck from 99.99% pure gold. Not to be outdone, the Mint raised the coin's gold standard to 99.999% in 2007. Today, the Canadian Gold Maple Leaf Coin remains highly regarded for its purity and quality.",
					continent: "NORTH AMERICA",
					country: "Canada"
				},
				{
					name: "",
					price: "$",
					img: "",
					description: "",
					continent: "",
					country: ""
				},
				{
					name: "",
					price: "$",
					img: "",
					description: "",
					continent: "",
					country: ""
				},
				{
					name: "",
					price: "$",
					img: "",
					description: "",
					continent: "",
					country: ""
				},
				{
					name: "Car",
					price: "60",
					img:
						"https://static01.nyt.com/images/2018/09/05/science/05museum12/merlin_143278650_914b4afd-0199-4e8f-8052-eee3e383e83b-jumbo.jpg",
					description: "",
					continent: "SOUTH AMERICA",
					country: "Brazil"
				},
				{
					name: "",
					price: "$",
					img: "",
					description: "",
					continent: "",
					country: ""
				},
				{
					name: "",
					price: "$",
					img: "",
					description: "",
					continent: "",
					country: ""
				},
				{
					name: "",
					price: "$",
					img: "",
					description: "",
					continent: "",
					country: ""
				}
			]
		};
	}

	render() {
		const search = this.context.store.search;
		return (
			<div className="text-center  m-0">
				<div>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "AFRICA"
							}
						}}>
						<span className="px-3">AFRICA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "EUROPE"
							}
						}}>
						<span className="px-3">EUROPE</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "ASIA"
							}
						}}>
						<span className="px-3">ASIA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "AUSTRALIA"
							}
						}}>
						<span className="px-3">AUSTRALIA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "NORTH AMERICA"
							}
						}}>
						<span className="px-3">NORTH AMERICA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "SOUTH AMERICA"
							}
						}}>
						<span className="px-3">SOUTH AMERICA</span>
					</Link>
				</div>

				{this.state.products.map((product, index) => {
					if (
						(search != "" &&
							(product.name.toLowerCase().includes(search.toLowerCase()) ||
								product.continent.toLowerCase().includes(search.toLowerCase()) ||
								product.country.toLowerCase().includes(search.toLowerCase()))) ||
						search == ""
					) {
						return <Product key={index} product={product} />;
					}
				})}
			</div>
		);
	}
}
