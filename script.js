// ID が "list" の div 要素を取得する関数
function getListDiv() {
    return document.getElementById("list");
}

// input 要素を作成する関数
function createInput(type) {
    const input = document.createElement("input");
    input.type = type;
    input.classList.add("flex-item");
    if (type == "text") {
        input.setAttribute("placeholder","内容");
    }else if (type == "number") {
        input.setAttribute("placeholder","時間");
    }
    return input;
}

// input 要素を #list に追加する関数
function appendInputToDiv(input) {
    const listDiv = getListDiv();
    
    listDiv.appendChild(input);
}


function add_list(){
    // number input 要素を作成し、#list に追加する
    const numberInput = createInput("number");
    appendInputToDiv(numberInput);
    
    // text input 要素を作成し、#list に追加する
    const textInput = createInput("text");
    appendInputToDiv(textInput);

}
