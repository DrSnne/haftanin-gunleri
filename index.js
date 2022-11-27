function findDay() {
    let dayinput = document.getElementById("gün").value;
    let dayName = document.getElementById("sonuc");

    if (dayinput == 1) {
        dayName.innerText = "Pazartesi"
    } else if (dayinput == 2) {
        dayName.innerText = "Salı"
    } else if (dayinput == 3) {
        dayName.innerText = "Çarşamba"
    } else if (dayinput == 4) {
        dayName.innerText = "Perşembe"
    } else if (dayinput == 5) {
        dayName.innerText = "Cuma"
    } else if (dayinput == 6) {
        dayName.innerText = "Cumartesi"
    } else if (dayinput == 7) {
        dayName.innerText = "Pazar"
    } else {
        dayName.innerText = "Yanlış bir değer girdiniz!"
    }
}
function finding() {
    let haftainput = document.getElementById("day").value;
    let haftaName = document.getElementById("result");
    if (haftainput <= 5) {
        haftaName.innerText = "Hafta içi"
    } else if (haftainput <= 7) {
        haftaName.innerText = "Hafta Sonu"
    }

}
