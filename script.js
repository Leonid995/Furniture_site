document.getElementById("other").addEventListener("click", function () {
    window.location.href = "https://www.ikea.com/"; 
});
document.getElementById("check-out").addEventListener("click", function () {
    window.location.href = "https://www.ikea.com/global/en/newsroom/"; 
});

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("fullscreen-container").style.display = "none";


    const productButtons = document.querySelectorAll(".product-button");

    productButtons.forEach(button => {
        button.addEventListener("click", function () {

            const productDiv = this.closest(".product");
            const imageSrc = productDiv.querySelector("img").src;

            
            document.getElementById("fullscreen-image").src = imageSrc;
            document.getElementById("fullscreen-container").style.display = "flex";
        });
    });

  
    document.getElementById("close-btn").addEventListener("click", function () {
        document.getElementById("fullscreen-container").style.display = "none";
    });
});
