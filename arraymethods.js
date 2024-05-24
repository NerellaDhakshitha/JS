let marks=[15,25,36,88,71];
console.log(marks.push(98));
console.log(marks.pop());
console.log(marks.toString());
let marks2=[25,79,68];;
let values=marks.concat(marks2);
console.log(values);
console.log(values);
let veggies=["potato","spinach","carrot"];
console.log(veggies.unshift("panner"));
console.log(veggies);
console.log(veggies.shift());
console.log(veggies);
let heroes=["prabhas","aadi","showrya","sandeep"];
console.log(heroes);
console.log(heroes.slice(1,2));
console.log(heroes);
console.log(heroes.splice(2,2,"ntr","ram"));//deleting
console.log(heroes);
console.log(heroes.splice(2,1,"ranbir"));//replacing
console.log(heroes);
console.log(heroes.splice(2,0,"showrya"));//no deletion
console.log(heroes);
console.log(heroes.splice(2));//elements will delete from that index
console.log(heroes);