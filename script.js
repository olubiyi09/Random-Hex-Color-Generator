const hex = document.querySelector(".hex");
const copy = document.querySelector(".copy");
const btn = document.querySelector(".generate");

const generateColor = function(){
    const randomColor = Math.random().toString(16).substring(2, 8);
    hex.value = "#" + randomColor;
    document.body.style.background = hex.value;
}

const copyColor = function(){
    hex.select();
    hex.setSelectionRange(0, 1000);
    document.execCommand("copy");
    alert("The Color has been copied to the Clipboard");
}

btn.addEventListener("click", generateColor);
copy.addEventListener("click", copyColor);