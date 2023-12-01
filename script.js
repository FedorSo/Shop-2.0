// Рейтинг

let siteRating = 0;

function star(starNumber) {

    siteRating = starNumber;

    starNumber = starNumber - 1;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    let star = document.getElementById(ids[starNumber]);

    if (star.src.includes("Images/star_2.svg")){

        for (let i = 0; i <= starNumber; i++){
            let id = ids[i];
            document.getElementById(id).src = "Images/star_1.svg";     
        }

    }

    else {

        for (let i = 0; i < ids.length; i++){
            if (i > starNumber) {
                let id = ids[i];
                document.getElementById(id).src = "Images/star_2.svg";

            }
        }
    }
}

// Сброс рейтинга

function resetRating() {

    siteRating = 0;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];
    document. getElementById("ratingText").innerText = "";

    for (let i = 0; i < ids.length; i++){
        let id = ids[i];
        document.getElementById(id).src =  "Images/star_2.svg";
    }
}

// Отправка рейтинга

const setRatingBtn = document.getElementById("sendRating");

setRatingBtn.addEventListener("click", function (){

    let text = "";

    switch (siteRating) {
        case 1:
            text = "Очень жаль(.\nВы поставили 1 Балл";
            break;
        case 2:
            text = "Спасибо за ваш отзыв.\nВы поставили 2 Балла";
            break;
        case 3:
            text = "Удволетворительно!\nВы поставили 3 Балла";
            break;
        case 4:
            text = "Спасибо что вы поставили 4 балла!";
            break;
        case 5:
            text = "Мы очень рады что вы поставили 5 баллов!";
            break;
        default:
            text = "Пожалуйста поставте оценку сайта";
            break;
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

// Инфо

const info = document.getElementById("modalInfo");
const openInfo = document.getElementById("info");
const closeInfo = document.getElementById("closeInfo");

openInfo.onclick = function (){
    info.style.display = "block";
}

closeInfo.onclick = function (){
    info.style.display = "none";
}

info.onclick = function (event){
    if (event.target === info) {
        info.style.display = "none";
    }
}



// slideshow

function showSlides (n) {
    const slide_images = ['tshirt-1.png', 'tshirt-2.png', 'tshirt-3.png', 'tshirt-4.png']

    // let slides = document.querySelectorAll(".mySlides");

    // Если номер слайда превышает количество слайдов - перейти к первому
    if (n > slide_images.length - 1) { slideIndex = 0};
    // Если номер слайда меньше еденицы - показываем последний
    if (n < 0) {slideIndex = slide_images.length};

    // console.log("Номер слайда " + n);

    // Скрываем все слайды - очищаем экран

    // console.log(slideIndex);

    // for (let slide of slides) {
    //     slide.style.display = "none";
    // }

    // Показываем выбранный слайд
    // slides[slideIndex - 1].style.display = "block";


    // const slideNum = `${slideIndex} из ${main_images.length}`
    // document.querySelectorAll('.numbertext')[slideIndex - 1].innerText = slideNum

    document.querySelector('.slide img').src = 'Images/t-shirts/' + slide_images[slideIndex]
}

function plusSlides (i) {
    showSlides(slideIndex += i);
}


let slideIndex = 0;
showSlides (slideIndex);




// cart


const addToCartButtons = document.querySelectorAll(".cart-btn-add");
// console.log(addToCartButtons);

for (let b of addToCartButtons) {
    b.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
    // const shopItem = event.target.parentElement.parentElement;
    const title = document.querySelector(".cart-title-add").innerText;
    const price = document.querySelector(".cart-price-now-add").innerText;
    const imageSrc = document.querySelector(".cart-img-add").src;


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
                    <button class="btn-danger" type="button">Удалить</button>
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
    // console.log("Меняем количество товаров.");

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

        // console.log(total);
    }

    document.querySelector(".cart-total-price").innerText = total + " ₽";
}
