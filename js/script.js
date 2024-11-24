// Sleciona Elementos
const loginFrom = document.getElementById ("login-form");
const loginPage = document.getElementById("login");
const productsPage = document.getElementById("products");
const logoutButton = document.getElementById("logout");

//login Simulado
const validUsers = {
    admin: {email:"admin@admin.com", password:"1234"},
    user: {email: "user@user.com", password: "1234"}
};

//lida com o login
loginFrom.addEventListener("submit",(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    //Verefica credenciais
    if(
        (email === validUsers.admin.email && password === validUsers.admin.password) ||
        (email === validUsers.user.email && password === validUsers.user.password)
    ){
        alert("Login Bem-sucedido!")
        loginPage.style.display = "none";
        productsPage.style.display = "Block";
    }else{
        alert("Credenciais inválidas!");
    }
});

// Lida com o logout
logoutButton.addEventListener("click", () => {
    loginPage.style.display = "flex";
    productsPage.style.display = "none";
})