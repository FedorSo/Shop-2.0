// Рейтинг

let siteRating = 0;

function star(starNumber) {

    siteRating = starNumber;

    starNumber = starNumber - 1;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    let star = document.getElementById(ids[starNumber]);

    if (star.src.includes("Images/star_2.png")){

        for (let i = 0; i <= starNumber; i++){
            let id = ids[i];
            document.getElementById(id).src = "Images/star_1.png";     
        }

    }

    else {

        for (let i = 0; i < ids.length; i++){
            if (i > starNumber) {
                let id = ids[i];
                document.getElementById(id).src = "Images/star_2.png";

            }
        }
    }
}

// Сброс рейтинга

function resetRating() {

    siteRating = 0;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];


    for (let i = 0; i < ids.length; i++){
        let id = ids[i];
        document.getElementById(id).src =  "Images/star_2.png";
    }
}

// Отправка рейтинга

const setRatingBtn = document.getElementById("sendRating");

setRatingBtn.addEventListener("click", function (){

    let text = "";

    switch (siteRating) {
        case 1:
            text = "Мы ожидали чего-то большего.\nВы поставили 1 Балл";
            break;
        case 2:
            text = "Спасибо за ваш отзыв!\nВы поставили 2 Балла";
            break
        case 3:
            text = "Удволетворительно!\nВы поставили 3 Балла";
            break
        case 4:
            text = "Спасибо что вы поставили 4 балла!";
            break
        case 5:
            text = "Мы очень рады что вы поставили 5 баллов!";
            break
        default:
            text = "Пожалуйста поставте оценку сайта";
            break
    }
    document. getElementById("ratingText").innerText = text;

})

function rand_tshirt() {

    const arr = ["Images/tshirt-1.jpg", "Images/tshirt-2.jpg", "Images/tshirt-3.jpg", "Images/tshirt-6.png", "Images/tshirt-9.png", "Images/tshirt-11.png", "Images/tshirt-12.png","Images/tshirt-13.png", "Images/tshirt-12.png", "Images/tshirt-13.png", "Images/tshirt-14.png"];

// Первая картинка
    let rand = Math.floor(Math.random() * arr.length);

    document.getElementById("ts-image-1").src = arr.splice(rand, 1)[0];


// Вторая карминка
    rand = Math.floor(Math.random() * arr.length);

    document.getElementById("ts-image-2").src = arr.splice(rand, 1)[0];

}

// Подарок

const modalGift = document.getElementById("myModal");
const openGift = document.getElementById("myBtn");
const closeGift = document.getElementById("close");

openGift.onclick = function (){
    modalGift.style.display = "block";
}

closeGift.onclick = function (){
    modalGift.style.display = "none";
}

modalGift.onclick = function (event){
    if (event.target === modalGift) {
        modalGift.style.display = "none";
    }
}

// Тех. поддержка

const modalTp = document.getElementById("modalTp");
const openTp = document.getElementById("btnTp");
const closeTp = document.getElementById("closeTp");

openTp.onclick = function (){
    modalTp.style.display = "block";
}

closeTp.onclick = function (){
    modalTp.style.display = "none";
}

modalTp.onclick = function (event){
    if (event.target === modalTp) {
        modalTp.style.display = "none";
    }
}

let slideIndex = 1;
showSlides (slideIndex);


function showSlides (n) {
    let slides = document.querySelectorAll(".mySlides");

    // console.log(slides);

    // Если номер слайда превышает количество слайдов - перейти к первому
    if (n > slides.length) { slideIndex = 1};
    // Если номер слайда меньше еденицы - показываем последний
    if (n < 1) { slideIndex = slides.length};

    // console.log("Номер слайда " + n);

    // Скрываем все слайды - очищаем экран
    for (let slide of slides) {
        slide.style.display = "none";
    }

    // Показываем выбранный слайд
    slides[slideIndex - 1].style.display = "block";


    const slideNum = `${slideIndex} из ${slides.length}`
    document.querySelectorAll('.numbertext')[slideIndex - 1].innerText = slideNum
}

function plusSlides (i) {
    showSlides(slideIndex += i);
}

const addToCartButtons = document.querySelectorAll(".six-main-item-button");
// console.log(addToCartButtons);

for (let b of addToCartButtons) {
    b.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
    const shopItem = event.target.parentElement.parentElement;
    const title = shopItem.querySelector(".six-main-item-title").innerText;
    const price = shopItem.querySelector(".six-main-item-price-now").innerText;
    const imageSrc = shopItem.querySelector(".six-main-item-image").src;


    // console.log(shopItem);
    // console.log(title, price, imageSrc);


    addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
    // console.log("Добавляем товар:", title, price, imageSrc);
    const cartItems = document.querySelector(".cart-items");

    // Проверяем, есть ли такой товар в корзине

    const cartItemNames = cartItems.querySelectorAll(".cart-item-title");

    // console.log(cartItemNames);

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("Этот товар уже в корзине!");
            return;
        }
    }

    
    const cartRow = document.createElement("div");
    cartItems.appendChild(cartRow);

    cartRow.classList.add("cart-row");
    cartRow.innerHTML = "Привет всем!";

    let cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                    <span class="cart-item-title">${title}</span>
                </div>

                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" min="1" max="99" value="1">
                    <button class="btn btn-danger" type="button">Удалить</button>
                </div>`;

    cartRow.innerHTML = cartRowContents;

    // Добавляем слушателей событий
    cartRow
        .querySelector(".btn-danger")
        .addEventListener("click", removeCartItem);
    cartRow
        .querySelector(".cart-quantity-input")
        .addEventListener("change", quantityChanged);
    
    updateCartTotal()
}


function removeCartItem (event) {
    // console.log("Удаляем элемент.");
    // console.log(event.target.parentElement.parentElement);
    // let del = confirm("Точно удалить?")

    // if (del == true) {
        
    // }
    event.target.parentElement.parentElement.remove()
    updateCartTotal ();
}


function quantityChanged (event) {
    console.log("Меняем количество товаров.");

    updateCartTotal ();
}


function updateCartTotal () {
    // console.log("Обновляем итоговую сумму.");

    const cartRows = document.querySelectorAll(".cart-items .cart-row")

    let total = 0

    for (row of cartRows) {
        // console.log(row);
        let priceElement = row.querySelector(".cart-price");
        let quantityElement = row.querySelector(".cart-quantity-input");

        // console.log(priceElement, quantityElement);

        let price = parseFloat(priceElement.innerText.replace("₽", ""))

        let quantity = parseInt(quantityElement.value);

        total = total + price * quantity

        console.log(total);
    }

    document.querySelector(".cart-total-price").innerText = total + " ₽";
}

// Оплата

const order = document.getElementById("order");
const openOrder = document.getElementById("orderBtn");
const closeOrder = document.getElementById("orderClose");

openOrder.onclick = function (){
    order.style.display = "block";
}

closeOrder.onclick = function (){
    order.style.display = "none";
}

order.onclick = function (event){
    if (event.target === order) {
        order.style.display = "none";
    }
}

function openNav() {
    const nav = document.querySelector('nav');
        nav.classList.toggle('responsive');
        console.log("Открываем консоль");
}

