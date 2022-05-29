// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  // Variable hasilLopping
  let hasilLooping = [];

  // Variable jumlahPria
  let jumlahPria = 0;

  // Variable jumlahWanita
  let jumlahWanita = 0;

  // Variable komentar
  let komentar = "";


  // looping for utk menampilkan seluruh data dari data-customer.json
  for (let index = 0; index < dataYangAkanDilooping.length; index++) {
    hasilLooping.push(dataYangAkanDilooping[index].namaDepan + " " + dataYangAkanDilooping[index].namaBelakang);
    //  kondisi untuk menghitung jumlahPria
    if (dataYangAkanDilooping[index].jenisKelamin === "M") {
      jumlahPria++;
      // kondisi untuk menghitung jumlahWanita
    } else if (dataYangAkanDilooping[index].jenisKelamin === "F") {
      jumlahWanita++;
    }
  }

  // kondisi untuk menampilkan komentar
  if (jumlahPria > jumlahWanita) {
    komentar = "Jumlah Pria lebih banyak dari Wanita";
  } else if (jumlahWanita > jumlahPria) {
    komentar = "Jumlah Wanita lebih banyak dari Pria"
  } else if (jumlahPria == jumlahWanita) {
    komentar = "Jumlah Pria dan Wanita berimbang"
  }

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
