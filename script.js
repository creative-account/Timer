function add_list(){
    // ID が "list" の div 要素を取得
const listDiv = document.getElementById("list");

// input 要素を作成し、div 要素に追加する
const numberInput = document.createElement("input");
numberInput.type = "number";
listDiv.appendChild(numberInput);

const textInput = document.createElement("input");
textInput.type = "text";
listDiv.appendChild(textInput);

}