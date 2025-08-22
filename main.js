function add_block() {
    let div = document.createElement("div");
    div.className = "task";
    div.style.color = "black";
    div.style.width = "100%";
    div.style.minHeight = "50px";
    div.style.flexWrap = "wrap";
    div.style.fontFamily = "Montserrat";
    div.style.padding = "15px";
    div.style.margin = "5px";
    div.style.outline = "none";
    div.contentEditable = "true"; 
    div.style.borderRadius = "10px";
    div.style.fontSize = "35px";
    div.style.whiteSpace = "normal"; 
    div.style.wordWrap = "break-word";
    div.style.border = "2px solid black";


    // Видалення при подвійний кліку
    div.ondblclick = function() {
        div.remove();
    };

    // шукаємо контейнер з класом list
    const list = document.querySelector(".list");
    
    // вставляємо блок у list, а не в body
    list.appendChild(div);
}





