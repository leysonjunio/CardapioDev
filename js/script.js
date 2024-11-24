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

// Referências aos elementos Admin
const adminPage = document.getElementById("admin");
const addProductForm = document.getElementById("add-product-form");
const productList  = document.getElementById("product-list");

const addCouponForm = document.getElementById("add-coupon-form");
const couponList = document.getElementById("coupon-list");

const logoutAdminButton = document.getElementById("lougout-admin");

// Arrays para armazenar dados (simulação)
let products = [];
let coupons = [];

// Exibir Painel Admin
function showAdminPanel(){
    loginPage.style.display = "none";
    productsPage.style.display = "none";
    adminPage.style.display = "block";
}

// Adicionar Produtos
addProductForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);
    const productImage = document.getElementById("product-image").value;

    const newProduct = {name: productName, price: productPrice, image: productImage };
    products.push(newProduct);
    upfateProductList();

    addProductForm.reset();
});

// Atualizar lista de Produtos 
function updateProductList(){
    productList.innerHTML = ""; // limpa a lista

    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML =`
            <p><strong>${product.name}</strong></p>
            <p>Preço: R$${product.price.toFixed(2)}</p>
            <img src="${product.image}" alt="${product.name}" style="width: 100px;">
            <button onclick="deleteProduct(${index})">Remover</button>
            `;
        productList.appendChild(productItem);
    });
}

// Remove Produto
function deleteProduct(index){
    products.splice(index, 1);
    updateProductList();
}

// Adicionar Cupom 
addCouponFrom.addEventListener("submit", (event) => {
    event.preventDefault();

    const couponCode = document.getElementById("coupon-code").value;
    const couponDiscount = parseFloat(document.getElementById("coupon-discount").value);


    const newCoupon = {code: couponCode, discount: couponDiscount};
    coupons.push(newCoupon);
    updateCouponList();

    addCouponForm.reset();
});

// Atualizar a lista de cupons
function updateCouponList(){
    couponList.innerHtml = ""; // Limpa a lista

    coupons.forEach((coupon, index) =>{
        const couponItem = document.createElement("div");
        couponItem.classList.add("coupon-item");
        couponItem.innerHTML= `
        <p><strong>${coupon.code}</strong> - Desconto: ${coupon.discount}%</p>
        <button onclick="deleteCoupon(${index})">Remover</button>
        `;
        couponList.appendChild(couponItem);
    });
};

// Remover Cupom
function deleteCoupon(index){
    coupons.splice(index, 1);
    updateCouponList();
}

// Sair do painel Admin
logoutAdminButton.addEventListener("click", () =>{
    loginPage.style.display = "flex";
    adminPage.style.display = "none";
});