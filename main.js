var names_of_people = [];

function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
    var lenght_of_name = names_of_people.length;
	console.log(GuestName);    // What is that?
    console.log(names_of_people);// What is that?
    console.log(lenght_of_name);// What is that?
	document.getElementById("display_name").innerHTML = names_of_people.toString(); // What is that?
}

function show()
{
	var i = names_of_people.join("<br>");    // What is the difference b/w join and toString?
	console.log(names_of_people); // What is that?
	document.getElementById("p1").innerHTML=i.toString(); // Isn't i already a string? Why converting it again?
    // what is innerHTML?
	document.getElementById("sort_button").style.display="block"; // What does this do?
    document // Should it not be removed?
};

function sorting()
{
	names_of_people.sort();
	var i= names_of_people.join("<br>");
	console.log(names_of_people); // Why do we need it here?		
	document.getElementById("sorted").innerHTML=i.toString(); // What is this?
};

function searching()
{
	var s = document.getElementById("s1").value; // What is document here?
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s"; // What is that?
	console.log("found name "+found+" time/s"); // What is that?
}
