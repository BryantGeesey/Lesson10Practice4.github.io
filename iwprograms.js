function greetingChange()
{
    let greeting = document.getElementById("greeting");
    let greetingMessage = document.getElementById("greetingMessage");
    let name = document.getElementById("nameBox");
    let text = document.getElementById("textBox");

    greeting.textContent = "Hello " + name.value + "!";
    greetingMessage.textContent = text.value;

}
function colorChange()
{
    let list = document.getElementById("colorDrop");
    let value = list.value;
    
    if (value == "blue") {
        document.body.style.backgroundColor = "blue";
    } else if (value == "red") {
        document.body.style.backgroundColor = "red";
    } else if (value == "yellow") {
        document.body.style.backgroundColor = "yellow";
    } else if (value == "orange") {
        document.body.style.backgroundColor = "orange";
    } else if (value == "pink") {
        document.body.style.backgroundColor = "pink";
    } else if (value == "purple") {
        document.body.style.backgroundColor = "purple";
    }
}