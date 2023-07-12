let cel = document.getElementById("celu");
let far = document.getElementById("faru");
let kel = document.getElementById("kelu");

cel.oninput= function () {
    let f = (parseFloat(cel.value ) * 9)/5 + 32;
    let k = parseFloat(cel.value) + 273.15;
    far.value = parseFloat(f).toFixed(2);
    kel.value = parseFloat(k).toFixed(2);
};
far.oninput= function () {
  let c = (parseFloat(far.value )-32)*5 / 9;
  let k = ((parseFloat(far.value )-32)*5 / 9) + 273.15;
  cel.value = parseFloat(c).toFixed(2);
  kel.value = parseFloat(k).toFixed(2);
};
kel.oninput= function () {
  let c = parseFloat(kel.value ) - 273.15;
  let f = ((parseFloat(kel.value ) - 273.15) * 9)/5 + 32;
  cel.value = parseFloat(c).toFixed(2);
  far.value = parseFloat(f).toFixed(2);
};
function clearFunction() {
  cel.value = "";
  far.value = "";
  kel.value = "";
}
