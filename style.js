// document.querySelector(".custom-select-wrapper").addEventListener("click", function (event) {
//     this.querySelector(".custom-select").classList.toggle("open")
// })

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open")
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener("click", function () {
        if (!this.classList.contains("selected")) {
            // Remove selected classList from whatever option it has
            this.parentNode.querySelector(".custom-option.selected").classList.remove("selected");
            
            this.classList.add("selected");
            this.closest(".custom-select").querySelector(".custom-select__trigger span").textContent = this.textContent;
        }
    })
}

// window.addEventListener("click", function (event) {
//     const select = document.querySelector(".custom-select");
//     if (!select.contains(event.target)) {
//         select.classList.remove("open");
//     }
// })

window.addEventListener('click', function(event) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(event.target)) {
            select.classList.remove('open');
        }
    }
});
