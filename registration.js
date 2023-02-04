class Data {
    constructor(nama, umur, jeniskelamin, status, uangsangu) {
        this.nama = nama;
        this.umur = umur;
        this.jeniskelamin = jeniskelamin;
        this.status = status;
        this.uangsangu = uangsangu;
    }
}

const Data = [
    new Data("Julia Triatmodjo", 25, "Perempuan", "Bekerja", 1000000)
    new Data("Budiman Hartono", 26, "Laki-laki", "Pelajar", 500000)
    new Data("Siti Nur Intan", 30, "Perempuan", "Tidak bekerja/belajar", 250000)
]

let totalAge = 0;
let averageAge = 0;

window.addEventListener("load", (event) => {
    console.log("Loading...");
    const submitButton = document.getElementById("submit-btn")
    const tableData = document.getElementById("table-data")
    const resume = document.getElementById("resume")

    populateData(tableData)
    resume.innerHTML = `You have ${data.length} data`

    const namaElement = document.getElementById("input-nama")
    const umurElement = document.getElementById("input-umur")
    const jeniskelaminElement = document.getElementById("input-jeniskelamin")
    const statusElement = document.getElementById("input-category")
    const uangsanguElement = document.getElementById("input-jeniskelamin")

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const nama = namaElement.value;
        const umur = +(umurElement.value);
        const jeniskelaminElement = jenisKelaminElement.value;
        const statusElement = statusElement.value;
        const uangsanguElement = +(uangsanguElement.value);
        const {isValid, message} = inputValidation(nama, umur, jeniskelamin, status, uangsangu)
        
        if(isValid) {

            const newdata = new Data(nama, umur, jeniskelamin, status, uangsangu)

            nama.push(newdata)
            tableData.innerHTML = ""
            populateData(tableData)
            resume.innerHTML = `You have ${nama.length} data`
            
        } 
        else {
            alert(message)
        }
        
    })
});

function inputValidation(nama, umur, jeniskelamin, status, uangsangu) {
    let isValid = true;
    let message = "";

    if(!nama || nama.length === 0) {
        isValid = false;
        message = "Harus mengisi nama"
    }
    
    if(umur >= 25) {
        isValid = false;
        message = "Umur minimal 25 tahun"
    }

    if (!jeniskelamin === "Perempuan" || jeniskelamin === "Laki-laki") {
        isValid = false;
        message = "Pilih salah satu jenis kelamin"
    }

    if (!status === "Pekerja" || jeniskelamin === "Belajar" || jeniskelamin === "Tidak bekerja/belajar") {
        isValid = false;
        message = "Pilih salah satu status"
    }
    
    if (umur === 100000 && 1000000) {
        isValid = false;
        message = "Rentang uang sangu hanya berlaku untuk Rp 100.000,00 s/d Rp 1.000.000,00"
    }

    return {
        isValid,
        message
    }
}

function populateData(tableData) {
    for (let i = 0; i < nama.length; i++) {
        let row = tableData.insertRow(i);
        row.insertCell(0).innerHTML = `${i+1}`
        row.insertCell(1).innerHTML = `${data[i].nama}`
        row.insertCell(2).innerHTML = `${data[i].umur}`
        row.insertCell(3).innerHTML = `${data[i].jeniskelamin}`
        row.insertCell(3).innerHTML = `${data[i].status}`
        row.insertCell(3).innerHTML = `${data[i].uangsangu}`
    }
}