const userInput = document.querySelector("#user-input");
const ulEl = document.querySelector("#ul-el"); 

let searchIndex = 0;

document.querySelector("#youtube-srch-btn").addEventListener("click", function() {
    if (userInput && userInput.value) {
        window.open(`https://www.youtube.com/results?search_query=${userInput.value}`, "_blank");
    } else {
        alert("Please type something...");
    }
})

document.querySelector("#google-srch-btn").addEventListener("click", function() {
    if (userInput && userInput.value) {
        window.open(`https://www.google.com/search?q=${userInput.value}`, "_blank");
    } else {
        alert("Please type something...");
    }
})

function pushToLocalStorage() {
    if (userInput && userInput.value) {
        searchIndex ++;
        localStorage.setItem(`searchItem${searchIndex}`, `<li>${userInput.value}</li>`);
        ulEl.innerHTML += JSON.parse(localStorage.getItem(`searchItem${searchIndex}`));
        setTimeout(function () { userInput.value = ""; }, 1);
    } else {
        alert("Please type something...");
    }
}

function clearHistory() {
    searchIndex = 0;
    ulEl.innerHTML = "";
    localStorage.clear();
}
