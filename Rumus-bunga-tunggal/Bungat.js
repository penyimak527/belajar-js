alert('Perhitungan Bunga Tunggal')

var inputu = prompt("masukkan uang");
var bunga = prompt("masukkan bunga");
var hasil = inputu * bunga /100;

alert(`hasil dari bunga tunggal pada tahun ke 1 yaitu Rp${hasil.toLocaleString('id-ID')}`);