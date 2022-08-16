const cart = document.querySelector(".cart")
cart.addEventListener("click", () => {
    document.querySelector(".bought-item").classList.toggle("d-block")
})

const addToCart = document.querySelectorAll(".product-buy-btn")
addToCart.forEach((buy) => {
    buy.addEventListener("click", (e) => {
        let addItemToCart = document.querySelector(".bought-item")
        addItemToCart.appendChild(e.target.parentNode.parentNode.parentNode)
    })
})