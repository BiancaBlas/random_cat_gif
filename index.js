//import express and axios
import express from "express";
import axios from "axios";

// create an app and set the port number
const app = express();
const port = 3000;

//API's for cat facts and cat gifs
const API_CATGIF = "https://cataas.com/cat/gif";
// const API_CATFACT = "https://cat-fact.herokuapp.com/facts";

// use public folder for static files
app.use(express.static("public"));

// render the website
app.get("/", async (req, res) => {
	try {
		const response = await axios.get(API_CATGIF);
		const gif_url = response.data.url;
		res.render("index.ejs", { gif: gif_url });
	} catch (error) {
		console.log(error.response.data);
		res.status(500);
	}
});

// refresh button
app.get("/gif", async (req, res) => {
	try {
		const response = await axios.get(API_CATGIF);
		const gif_url = response.data.url;
		res.render("index.ejs", { gif: gif_url });
	} catch (error) {
		console.log(error.response.data);
		res.status(500);
	}
});

// app.get("/gif", async (req, res) => {
// 	try {
// 		const response = await axios.get(API_CATGIF);
// 		const gif_url = response.data.url;
// 		// console.log(response.data);
// 		res.send;
// 	} catch (error) {
// 		console.log(error.response.data);
// 		res.status(500);
// 	}
// });

//start server
app.listen(port, () => {
	console.log(`Server is running on port${port}`);
});
