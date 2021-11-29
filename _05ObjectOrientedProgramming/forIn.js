let student = {
    name: 'grv',
    email: 'grvsgh@gmail.com',
    branch: 'CS',
    marks: {
        physics: 60,
        chemistry: 65,
        maths: 75
    }
};

for (let prop in student) {
    console.log(prop, student[prop]);
    let totalMarks = 0;
    if (prop === 'marks') {
        for (let mark in student[prop]) {
            totalMarks += student[prop][mark];
        }
        console.log('Total marks: ', totalMarks);
    }
}