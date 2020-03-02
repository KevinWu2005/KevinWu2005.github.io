//
//1. Write the code to see if value is contined
//	 in the list.
//	

//Note I have populated this list, but it could be anything
list = ["cat","dog","fish","monkey","cattle"];

value = "cat"

for (i = 0; i < list.length; i = i + 1) {
	
	if (list[i] === value) {
		console.log("FOUND IT")
		break;
	}
}

//User a flag
list = ["cat","dog","fish","monkey","cattle"];

value = "cat"
flag = false; //assume not found

for (i = 0; i < list.length; i = i + 1) {
	2
	if (list[i] === value) {
		flag = true;
		break;
	}
}

if (flag == true) {
	console.log("FOUND IT")
}
else {
	console.log("NOT FOUND")
}