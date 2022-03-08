const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const UserModel = require("./models/User");
mongoose.connect(
	"mongodb+srv://mirza:Wx8ZFr1EmXtLawmO@reactcurd.tmmov.mongodb.net/crud?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
	}
);

app.post("/insert", async (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const address = req.body.address;
	const password = req.body.password;
	const confpassword = req.body.confpassword;
	const user = new UserModel({
		username: username,
		email: email,
		address: address,
		password: password,
	});

	if (!username || !email || !password || !confpassword) {
		res.send("Please Enter All Values");
	} else if (password != confpassword) {
		res.send("Password And Confirm Password Must be same");
	}
	try {
		await user.save();
		res.send("Success");
	} catch (err) {
		res.send("data not inserted");
	}
});
app.get("/read", async (req, res) => {
	UserModel.find({}, (err, result) => {
		if (err) {
			res.send(err);
		}
		res.send(result);
	});
});
app.delete("/delete/:id", async (req, res) => {
	const userid = req.params.id;
	await UserModel.findByIdAndRemove(userid).exec();
	res.send("Deleted");
});
app.get("/find/:email/:password", async (req, res) => {
	const reqemail = req.params.email;
	const reqpassword = req.params.password;
	try {
		await UserModel.findOne(
			{ email: reqemail, password: reqpassword },
			(err, result) => {
				if (err) {
					res.send(err);
				}
				res.send(result);
			}
		);
		console.log("found");
	} catch (err) {
		console.log(err);
	}
	// UserModel.findOne({ email:reqemail, password:reqpassword }, (err, result) => {
	// 	if(err)
	// 	{
	// 		res.send(err);
	// 	}
	// 	if (result) {
	// 		res.send(result);
	// 	}
	// 	res.send("Not Registered");

	// });
});
app.get("/find/:id", async (req, res) => {
	const id = req.params.id;
	try {
		await UserModel.findById(id, (err, result) => {
			if (err) {
				res.send(err);
			}
			res.send(result);
		}).exec();
		console.log("found");
	} catch (err) {
		console.log(err);
	}
});
app.listen(3001, () => {
	console.log("Server running on port 3001");
});
