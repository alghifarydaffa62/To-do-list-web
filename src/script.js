
function saveToLocalStorage(judul, deadline, desc) {
    const data = { judul, deadline, desc };

    let savedData = JSON.parse(localStorage.getItem('data')) || [];
    savedData.push(data);
    localStorage.setItem('data', JSON.stringify(savedData));
}

function tugas() {
    const judul = prompt("Masukkan Nama Matkul: ")
    const deadline = prompt("Masukkan Deadline: ")
    const desc = prompt("Deskripsi Tugas: ")

    createtugas(judul, deadline, desc)
    saveToLocalStorage(judul, deadline, desc)
}

function createtugas(judul, deadline, desc) {
    const matkul = document.createElement("h1")
    matkul.textContent = "Matkul: " + judul
    matkul.classList.add("text-xl")
    matkul.classList.add("font-semibold")

    const dl = document.createElement("h2")
    dl.textContent = "Deadline: " + deadline

    const deskripsi = document.createElement("p")
    deskripsi.textContent = desc
    deskripsi.id = "desc"
    deskripsi.classList.add("break-words")
    deskripsi.classList.add("overflow-y-auto")

    const button = document.createElement("button")
    button.textContent = "Selesai"
    button.classList.add("p-1")
    button.classList.add("w-2/4")
    button.classList.add("text-md")
    button.classList.add("font-semibold")
    button.classList.add("bg-slate-700")
    button.classList.add("rounded-md")
    button.classList.add("float-left")
    button.classList.add("hover:bg-slate-800")

    const button2 = document.createElement("button")
    button2.textContent = "Hapus"
    button2.classList.add("text-md")
    button2.classList.add("font-semibold")
    button2.classList.add("bg-slate-700")
    button2.classList.add("rounded-md")
    button2.classList.add("hover:bg-slate-800")
    button2.onclick = function () {
        box.classList.add("hidden")
    }

    const box = document.createElement("div")
    box.classList.add("box-border")
    box.style.width = '25vw'
    // box.style.height = '35vh'
    box.classList.add("bg-blue-950")
    box.classList.add("rounded-md")
    box.classList.add("p-6")
    box.classList.add("flex")
    box.classList.add("flex-col")
    box.classList.add("gap-2")

    box.appendChild(matkul)
    box.appendChild(dl)
    box.appendChild(deskripsi)
    box.appendChild(button)
    box.appendChild(button2)
    
    // const buttoncontainer = document.createElement("div")
    // buttoncontainer.classList.add("d-flex")
    // buttoncontainer.classList.add("gap-2")
    // buttoncontainer.appendChild(button)
    // buttoncontainer.appendChild(button2)
    
    const container = document.getElementById("container")
    container.appendChild(box)
}

function loadFromLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    savedData.forEach(data => {
        createtugas(data.judul, data.deadline, data.desc);
    });
    
}
window.onload = function() {
    loadFromLocalStorage();
};

function materi() {
    const judulmateri = prompt("Masukkan Nama Matkul: ")
    const keterangan = prompt("Masukkan keterangan: ")
    const link = prompt("Masukkan Link: ")  

    const mapel = document.createElement("h1")
    mapel.textContent = "Matkul: " + judulmateri
    mapel.classList.add("text-xl")
    mapel.classList.add("font-semibold")

    const ket = document.createElement("h2")
    ket.textContent = keterangan

    const desk = document.createElement("p")
    desk.textContent = link
    desk.id = "desc"
    desk.classList.add("break-words")
    desk.classList.add("overflow-y-auto")

    const boxmateri = document.createElement("div")
    boxmateri.style.width = '25vw'
    boxmateri.style.height = '30vh'
    boxmateri.classList.add("bg-blue-950")
    boxmateri.classList.add("rounded-md")
    boxmateri.classList.add("p-6")
    boxmateri.classList.add("flex")
    boxmateri.classList.add("flex-col")
    boxmateri.classList.add("gap-2")

    boxmateri.appendChild(mapel)
    boxmateri.appendChild(ket)
    boxmateri.appendChild(desk)

    const containermateri = document.getElementById("materi-container")
    containermateri.appendChild(boxmateri)
}