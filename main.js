const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

function getPairs(STUDENTS) {
    const arr = [];
    const manArr = [];
    const girlArr = [];
    for(let i = 0; i < students.length; i++) {
        if(students[i].substring(students[i].length - 1) !== 'а') {
            manArr.push(students[i]);
        }
        else {
            girlArr.push(students[i]);
        }    
    }
    for(let i = 0; i < manArr.length; i++) {
        arr.push([manArr[i], girlArr[i]]);
    }
    return arr;
}

const pairs = getPairs(students);
console.log(pairs);

function getProject(pairs) {
    const arr = [];
    for(let i = 0; pairs[i]; i++) {
        arr.push([pairs[i].join(' i '), themes[i]]);
    }
    return arr;
}

const projects = getProject(pairs);
console.log(projects);

function getGrade(students) {
    const arr = [];
    for(let i = 0; students[i]; i++) {
        arr.push([students[i], marks[i]]);
    }
    return arr;
}

const grade = getGrade(students);
console.log(grade);

function getGradeRandom(projects) { 
    const arr = [];
    for(let i = 0; projects[i]; i++) {
        let random = Math.floor(Math.random() * 5 + 1);
        arr.push(projects[i].slice());  
        arr[i].push(random);
    }
    return arr;
}

const gradeRandom = getGradeRandom(projects);
console.log(gradeRandom);
