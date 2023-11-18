SetField("Sheno emrin","emri");
SetField("Sheno mbiemrin","mbiemri");
SetField("Sheno moshen","mosha");
SetField("Sheno email-in","emaili");
SetField("Sheno adresen","adresa");

function SetField(promtText,element)
{
    let input = prompt(promtText);
    if(input)
    {
        let el = document.getElementById(element);
        el.textContent = input
    }
}

let saveButton = document.getElementById("saveButton");
if(saveButton)
{
    saveButton.onclick = function()
    {
        alert("Te dhenat jane ruajtur me sukses");
    }
}