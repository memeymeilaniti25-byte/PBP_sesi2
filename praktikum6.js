const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama mahasiswa: ", function(nama) {

    rl.question("Masukkan nilai tugas: ", function(inputTugas) {

        rl.question("Masukkan nilai UTS: ", function(inputUTS) {

            rl.question("Masukkan nilai UAS: ", function(inputUAS) {

                let tugas = parseInt(inputTugas);
                let uts = parseInt(inputUTS);
                let uas = parseInt(inputUAS);

                let nilaiAkhir = (tugas * 0.30) +
                                 (uts * 0.30) +
                                 (uas * 0.40);

                console.log("\n===== HASIL NILAI MAHASISWA =====");
                console.log("Nama Mahasiswa:", nama);
                console.log("Nilai Tugas:", tugas);
                console.log("Nilai UTS:", uts);
                console.log("Nilai UAS:", uas);
                console.log("Nilai Akhir:", nilaiAkhir);

                rl.close();
            });
        });
    });
});