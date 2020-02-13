//IMAGINE: THIS SCRIPT HAS TO BE RUN ON BOTH PAGES, THE EXACT SAME CODE
//The same as python - this is for loop (counted loop)
// Count, check, change
//This format is almost exactly the same as Java
for (i = 0; i<100; i = i+1) {

	console.log(i);
}

//This list is your data from the UN
//Stage 1: Copy it manually
//Stage 2: Read from a srouce
list = [1,223, 4, 545, 62, 5232, 52, 7, 99, 5029, 324 ,5345, 544,543, 3222, 610, 99];

sum = 0;

//talking about this is good for video!!!
for( i =0; i = list.length; i = i+1) {
	sum = sum + list[i];
}
console.log("SUM",sum);


