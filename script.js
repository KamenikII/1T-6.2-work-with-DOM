// Task 1
function editTextOnClick() {
    const paragraphs = document.querySelectorAll('.firstTask');
    paragraphs.forEach((paragraph) => {
      paragraph.textContent = 'Edited text';
    });
  }

// Task 2
window.onload = function() {
    setTimeout(function() {
      changeBodyContent()
    }, 100)
};
function changeBodyContent() {
    const newDiv = document.createElement('div')
    /*add 4 task*/const task4html = `
        <ol id="element">
            <li>Lorem </li>
            <li>ipsum.</li>
        </ol>
        <button id="buttonClear" onclick="clearEl()">Clear</button>
        `
    

    // Add 3 task
    newDiv.setAttribute('name', 'menu')
    newDiv.textContent = 'Choose the genre'

    document.body.innerHTML = task4html
    document.body.appendChild(newDiv)

    // task 3
    console.log(newDiv.getAttribute('name'))
}

// Task 4
function clearEl() {
    let elem = document.getElementById("element")
    let button = document.getElementById("buttonClear")
    clearElement(elem)
    clearElement(button)
}
function clearElement(elem) { 
    elem.remove()
}