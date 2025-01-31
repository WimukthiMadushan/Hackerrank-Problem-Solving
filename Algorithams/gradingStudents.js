function gradingStudents(grades) {
    const newGrades = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38) newGrades[i] = grades[i];
        else if(grades[i] == 38 || grades[i] == 39 || grades[i] == 40) newGrades[i]= 40;
        else if((grades[i] + 2) % 5  === 0) newGrades[i] = grades[i] + 2;
        else if((grades[i] + 1) % 5  === 0) newGrades[i] = grades[i] + 1;  
        else{
            newGrades[i] = grades[i]   
        }
    }
    return newGrades;

}