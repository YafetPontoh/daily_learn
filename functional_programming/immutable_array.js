// Array.map()
const family = ['Yefta', 'Yafet', 'Ezra', 'Anya'];
const familyWithSymbol = family.map((name)=>`${name}!`);

console.log(family);
console.log(familyWithSymbol);

// Array.filter()
const truthyArray = [1,'','Halo',0, null, 'Yafet', 14].filter((item)=>Boolean(item));
console.log(truthyArray);

const students = [
    {
        name: "Yafet",
        score : 30,
    },
    {
        name: "Yefta",
        score : 32,
    },
    {
        name: "Ezra",
        score : 34,
    },
    {
        name: "Anya",
        score : 36,
    },
    {
        name: "Someone",
        score : 25,
    },
];

const eligibleForStudentScholarship= students.filter((student) => student.score > 30);
console.log(eligibleForStudentScholarship);

// Array.reduce()
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);