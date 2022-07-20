var stateObject = {
    "Mumbai": {},
    "Kolkata": {},
    "Hydrabad": {},
    "Banglore": {},
    "Kochi": {},
    "Chennai": {}
}
window.onload = function () {
var zoneSel = document.getElementById("zoneSel")
for (var country in stateObject) {
    zoneSel.options[zoneSel.options.length] = new Option(country, country);
    }
}