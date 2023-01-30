//            TASK 1 

// for (i = 1; i <= 50; i++) 
// 	{
// 		if(i%2 == 0) 
// 		{
// 		 console.log("%d ", i);
// 		}
// 	}

//             TASK 2

let students = [
	{
		name: 'Sandesh Khanal',
		marks_obt: 350
	},
	{
		name: 'Binaya Karki',
		marks_obt: 250
	},
	{
		name: 'Rohan puri',
		marks_obt: 450
	},
	{
		name: 'Pujan Poudel',
		marks_obt: 300
	}
]

let total_marks = 500;
// for (i = 0; i < students.length; i++) {
// 	if (students[i].per >= 80) {
// 		console.log(students[i].name, ',', 'Percentage : ', students[i].per, ',', "Div : Distinction");
// 	} else if (students[i].per >= 70) {
// 		console.log(students[i].name, ',', 'Percentage : ', students[i].per, ',', "Div : First Division");
// 	} else if (students[i].per >= 60) {
// 		console.log(students[i].name, ',', 'Percentage : ', students[i].per, ',', "Div : Second Division");
// 	} else if (students[i].per >= 40) {
// 		console.log(students[i].name, ',', 'Percentage : ', students[i].per, ',', "Div : third Division");
// 	} else if (students[i].per < 40) {
// 		console.log(students[i].name, ',', 'Percentage : ', students[i].per, ',', "Div : Fail");
// 	}
// }

console.log("");

for (i = 0; i < students.length; i++) {
	students[i].per = students[i].marks_obt / total_marks * 100
	if(students[i].per>=80){
		Division ="Disction"
	}else if(students[i].per>=70){
		Division = "First Class Grade"
	}else if(students[i].per>=50){
		Division ="Second Class Grade"
	}else if(students[i].per<40){
		Division="Sorry You are Fail "
	}
		console.log(students[i].name, ',', 'Percentage : ', students[i].per, '%',Division);
	}


