
function tugas() {
    const judul = prompt("Masukkan Nama Matkul: ")
    const deadline = prompt("Masukkan Deadline: ")
    const desc = prompt("Deskripsi Tugas: ")

    const matkul = document.createElement("h1")
    matkul.textContent = "Matkul: " + judul
    matkul.classList.add("text-xl")
    matkul.classList.add("font-semibold")

    const dl = document.createElement("h2")
    dl.textContent = "Deadline: " + deadline

    const deskripsi = document.createElement("p")
    deskripsi.textContent = desc

    const box = document.createElement("div")
    box.style.width = '25vw'
    box.style.height = '30vh'
    box.classList.add("bg-blue-950")
    box.classList.add("rounded-md")
    box.classList.add("p-6")

    box.appendChild(matkul)
    box.appendChild(dl)
    box.appendChild(deskripsi)

    const container = document.getElementById("container")
    container.appendChild(box)
}