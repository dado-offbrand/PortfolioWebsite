let names = [ /*n1*/ "Home", /*n2*/ "Project List", /*n3*/ "Current Project", /*n4*/ "Playground"];

function configNav() {
    for (let i = 1; i <= 4; i++) 
    {
        document.getElementById('n'+i).textContent = names[i-1];
    }
}