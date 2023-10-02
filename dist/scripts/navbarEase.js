//let names = [ /*n1*/ "Home", /*n2*/ "Project List", /*n3*/ "Current Project", /*n4*/ "Playground"];
let names = [ /*n1*/ "Home", /*n2*/ "What I Do", /*n3*/ "Projects", /*n4*/ "Current Project", /*n5*/ "Playground"];

function configNav() {
    for (let i = 1; i <= names.length; i++) 
    {
        document.getElementById('n'+i).textContent = names[i-1];
    }
}