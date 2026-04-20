function resetScreen()
{
    let label = document.getElementById("label");
    label.textContent = "Where do you want to travel?";

    let list = document.getElementById("options");
    list.innerHTML =  "<option value = '1'>France</option><option value = '2'>Italy</option><option value = '3'>Spain</option>";
}

function revealGender()
{
    let box = document.getElementById("genderBox");
    let label = document.getElementById("genderLabel");
    let random = Math.round(Math.random());
    if (random==0)
    {
        label.textContent = "It's a Boy!"
        label.style.fontFamily = "arial";
        label.style.fontWeight = "bold";
        label.style.fontSize = "32px";
        box.style.backgroundColor = "lightblue";
    }
    else
    {
        label.textContent = "It's a Girl!"
        label.style.fontFamily = "calibri";
        label.style.fontWeight = "lighter";
        label.style.fontSize = "42px";
        box.style.backgroundColor = "lightpink";
    }
}

function showColor()
{
    let box = document.getElementById("colorBox");
    let label = document.getElementById("colorReveal");
    let text = document.getElementById("colorChoice");
    label.textContent = "You chose the color " + colorChoice.value;
    box.style.backgroundColor = colorChoice.value;
}