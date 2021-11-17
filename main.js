function Login()
{  alert("You have logged in successfully !")
    
}

function Register()
{alert("You have registered successfully !")}

function Reset()
{alert("You have successfully reset the password !")}

fetch("https://trains.p.rapidapi.com/", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "trains.p.rapidapi.com",
		"x-rapidapi-key": "d4dd8bdac7msh756dd493f4cc5f7p1f9f31jsndf028acc303e"
	},
	"body": {
		"search": "Rajdhani"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});