
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const adress = document.querySelector("#adress");
const submit = document.querySelector("#submit");

const studentsData = {};

submit.addEventListener("click", () => {
    studentsData.student = {
        nome : name.value,
        nascimento : age.value,
        endereço : adress.value
    }     
     
    const data = JSON.stringify(studentsData.student)
    
    console.log(data)

    localStorage.setItem("student", data)

    showStudent();
    
})

const student = JSON.parse(localStorage.getItem("student"));


const showStudent = () => {
    const nome = document.createElement('p');
    const span = document.querySelector("span")
    nome.textContent = student.nome
    span.appendChild(nome)

    console.log(nome)
}



