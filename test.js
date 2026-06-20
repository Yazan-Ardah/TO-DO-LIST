 window.addEventListener('load', function() {
        document.getElementById("task").focus();
    });
function add_task(){
    let inputEl = document.getElementById("task");
    let taskText=inputEl.value.trim();
    if (taskText === "") return;
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = taskText;
    const checkbox=document.createElement('input');
    const garbage=document.createElement("button");
    checkbox.className="checkbox";
    garbage.className="checkbox";
    garbage.type="button";
    garbage.innerHTML="🗑️";
    checkbox.type="checkbox";
             
    li.append(checkbox);
    li.append(garbage);
    list.appendChild(li);                     // correct case and Node
    checkbox.addEventListener('change', (event) => {
    if(event.target.checked) {
        li.style.textDecoration = 'line-through';
    } else {
        li.style.textDecoration = 'none';
    }
});

    garbage.addEventListener('click', (event) => {
        li.remove();
    });
    inputEl.value = "";
    inputEl.focus();
}
