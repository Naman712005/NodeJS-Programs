// const str = "I have a dog";

// const pattern = /'hello'/;

const str = "Hello, I am from BCA 4th SEM";
const str2 = "I am from BCA 4th SEM";

const pattern = /^hello/;
// const pattern = /[^dog]/;

// if(pattern.test(str)){
//     console.log("Please remove the word dog");
// }
// else{
//     console.log("No match found");
// }

if (pattern.exec(str2)){
    console.log("start with hello");
}
else{
    console.log("not start with hello");
}