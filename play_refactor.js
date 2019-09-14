const name = "Jonathan Thomas";
let age = 29;
const hasHobbies = true;



const summarizeUser =(userName, userAge, userHasHobby) =>{
	return (
		'Name is ' + userName
		' age is ' + userAge
		' and user has hobby: ' + hasHobbies
	
	);
}

//const add = (a,b) => a + b;
//const addOne = a => a + 1;

const addRandom = () => 1 + 2;
//console.log(add(1,5));

console.log(summarizeUser(name,age, hasHobbies));
