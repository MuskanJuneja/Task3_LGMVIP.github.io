let cal = "";
let cal2 = "";
let keys = document.querySelectorAll('.rb');
box = document.getElementById('box');
arr = Array.from(keys);
arr.forEach((key) => {
    key.addEventListener("click", (event) => {
        if (event.target.innerHTML == "Clear") {
            cal = "";
            box.value = "";
        }
        else if (event.target.innerHTML == "=") {
            cal = eval(cal);
            box.value = cal;
        }
        else {
            if (event.target.innerHTML == "x") {
                cal2 = cal + event.target.innerHTML;
                cal = cal + "*";
                box.value = cal2;
            }
            else {
                cal = cal + event.target.innerHTML;
                box.value = cal;
            }
        }
    })
})
