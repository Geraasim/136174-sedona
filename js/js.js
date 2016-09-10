var search = document.querySelector(".search-link");
var searchModal = document.querySelector(".modal-search");
// var closeModal = document.querySelector(".modal-search-close");

search.addEventListener("click", function (event) {
event.preventDefault();

searchModal.classList.toggle("modal-search-show");
});

// .closeModal.addEventListener("click", function (event) {
// event.preventDefault();
// searchModal.classList.remove("modal-search-show");
// });
