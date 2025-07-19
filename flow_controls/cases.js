// Case 1
function checkGrades(grades){
    for (let i = 0; i < grades.length; i++){
        if(typeof grades[i] !== 'number'){
            throw new Error('Invalid Input. Please provide an array of numbers.');
        }

        const grade = grades[i];
        let predicate;
        
        if (grade >= 90){
            predicate = 'A';
        } else if (grade >= 80){
            predicate = 'B';
        } else if (grade >= 70){
            predicate = 'C';
        } else if (grade >= 60){
            predicate = 'D';
        } else{
            predicate = 'E';
    }
    console.log(`Grade ${i+1} : ${grade} (${predicate})`);
};
};

try{
    const studentGrade = [95,92,84,42,89];
    checkGrades(studentGrade);
} catch (e){
    console.error(e);
};