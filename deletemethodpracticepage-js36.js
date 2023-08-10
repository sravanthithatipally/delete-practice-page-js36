let btnele = document.getElementById("sendDeleteRequestBtn");
let userinputele = document.getElementById("userInput");
let statusele = document.getElementById("requestStatus");
let responseele = document.getElementById("httpResponse");

let loadingele = document.getElementById("loading");

function tosenddeleterequest() {
    let userinputval = userinputele.value;
    let urlele = "https://gorest.co.in/public-api/users/" + userinputval;

    let option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 49d55cf904b931e61e7f22f159b95c1acece321417e98c47c0d6314f14bafbb2",
        }

    };

    responseele.classList.add("d-none");
    loadingele.classList.remove("d-none");

    fetch(urlele, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseele.classList.remove("d-none");
            loadingele.classList.add("d-none");

            let statusval = jsonData.code;
            let responseval = JSON.stringify(jsonData);
            statusele.textContent = statusval;
            responseele.textContent = responseval;
        });
}

btnele.addEventListener("click", tosenddeleterequest);