const student={
    name:" xyz",
    cource:"B.TECH",
    branch:"CS",
    section:"C",
    phoneno:
    {
        phoneno1:2342443434,
        phoneno2:4334244525
    },
    adderss:
    {
        hno:31,
        street:"abs",
        city:"ghaziabad",
        state:"UP"

    }
}
const newStudent=Object.assign({},student);
console.log(newStudent);

newStudent.section='A';
newStudent.adderss.city='Noida';