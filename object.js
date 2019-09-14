const person = {
	name: "Jonathan",
	age: 29,
	greet(){
		console.log('Hello, I am ' + this.name);
	}
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ["Coding","Drawing","Languages","Thinking"];
//for(let hobby of hobbies){
//		console.log(hobby);
//}
//console.log(hobbies.map(hobby => "Hobbies: " + hobby));
//console.log(hobbies)
//hobbies.push("Exercising")
//console.log(hobbies)
const copiedArray = [...hobbies]
console.log(copiedArray);

const toArray (...args) => {
	return args;
};

console.log(toArray(1,2,3,4));

