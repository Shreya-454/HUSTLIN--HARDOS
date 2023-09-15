let btn = document.querySelector("#addbtn")
let counting = document.querySelector("#counting")
let minusbtn = document.querySelector("#minusbtn")
btn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1

})
minusbtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML - 1
})
