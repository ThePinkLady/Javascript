var database = [
   {
   	    username: "Callina",
   	    password: "pink"
   }
   {    
   	    username: "Applelonia",
        password: "123"
    }   
    {   
    	username: "Brian",
        password: "456"
}
];

var newsFeed= [
{
	    username: "Sarah",
	    timeline: "So happy about my new skills I've learned!" 
	},
	{
		 username: "Will",
		 timeline: "Javascript is sooo cool!"
	},
     {
     	 username: "Andrei"
     	 timeline: "Javascript is really interesting!"
     }

	];
function isUserValid(username, password) {
	 for (var i=0; i < database.length; i++){
	 	if(database [i].username== username &&
	 		datbase[i].password==password]) {
	 		return true;
	 	}
	 }
	 return false;
}
	function signIn(username,password) {
		if(isUserValid(username, password)) {
			console.log(newafeed);
		} else {
			alert("OOPS, wrong username and password!")
	    }
}


var userNamePrompt= prompt("What's your username?");
var passwordPrompt= prompt("What's your password?");

signIn(userNamePrompt,passwordPrompt);	    