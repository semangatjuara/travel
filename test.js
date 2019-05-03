console.log("hello word");
console.log(2+2);

var fs=require('fs');
var https=require('https');

fs.writeFile(__dirname+"/app/inde.html","<h1>html is ok<h1/>",function(error){
	if(error){
		return console.log(error);
	}else {
		return console.log("selamat");
	}
});

var myPhotolocation='https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotolocation, function(response){
	response.pipe(fs.createWriteStream(__dirname+ "/dog.jpg"))
});