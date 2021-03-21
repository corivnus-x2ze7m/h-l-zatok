function faktor(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktor(n - 1)
    }
}

function firsttask() {
    for (var i = 0; i < 10; i++) {
        var minid = document.createElement("div");
        minid.innerText = i + 1;
        document.getElementById("firsttask").appendChild(minid);
    }
}

firsttask();

window.onload = () => {
    console.log("betöltődött")

    for (var row = 0; row < 10; row++) {
        var newRow = document.createElement("div")
        newRow.classList.add("row")
        document.getElementById("secondtask").appendChild(newRow);

        for (var col = 0; col <= row; col++) {
            var newItem = document.createElement("div");
            newItem.classList.add("item");
            newItem.classList.add("box");
            newItem.innerText = faktor(row) / (faktor(col) * faktor(row - col));
            newItem.style.color = rgb(0, 0, ${255 - (255 / 10 * newItem.innerText)});
            newRow.appendChild(newItem);
        }
    }
}