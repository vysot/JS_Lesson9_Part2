let btnLabel = document.createElement("label");
btnLabel.for = "text";
btnLabel.innerText = "Введіть свій номер телефону: "
btnLabel.classList = "label";
let btnMain = document.createElement("input");
btnMain.id = "text";
btnMain.classList = "btn-main";
btnMain.placeholder = "000 - 000 - 00 - 00";
let btnSave = document.createElement("button");
btnSave.id = "save";
btnSave.innerText = "Зберегти";
btnSave.classList = "btn-save"
let containerBig = document.createElement("div");
let container = document.createElement("div");
container.appendChild(btnLabel);
container.appendChild(btnMain);
container.appendChild(btnSave);
container.classList = "container";
let body = document.querySelector("body");
body.appendChild(containerBig);
containerBig.appendChild(container);

const get = id => document.getElementById(id);
let regexsp = /^\d{3}-\d{3}-\d{2}-\d{2}$/;


get("text").onkeydown = (e) => {
    if (e.key != "Backspace") {
        if (get("text").value.length == 3 || get("text").value.length == 7 ||
            get("text").value.length == 10) {
            get("text").value += "-";
        }      
}
}

get("text").onkeyup = (e) => {
    if (get("text").value.length <= 13) {
        get("text").style.backgroundColor = "green";
        get("text").style.color = "white";
    } else {
        get("text").style.backgroundColor = "red";
        get("text").style.color = "white";
    }
}


let error = document.createElement("h2");
error.id = "err";
error.classList = "text";
containerBig.appendChild(error);



get("save").onclick = () => {
    if (get("text").value.match(regexsp)!= null) {
        document.location.href = "https://gotoshop.ua/ru/kiev/shops/atb/";

    } else {
        console.log("see error")
        get("err").innerHTML = "Помилка!!!";
    }
}