
function tugas() {

    const matkul = prompt('Nama Matkul: ')
    const dl = prompt('Deadline Tugas: ')
    const description = prompt('Deskripsi tugas: ')
    
    const judul = document.createElement('h1')
    judul.textContent = "Matkul: " + matkul
    judul.classList.add("text-2xl")

    const deadline = document.createElement('h3')
    deadline.textContent = "Deadline: " + dl

    const desc = document.createElement('p')
    desc.textContent = description

    const box = document.getElementById("box")
    box.appendChild(judul)
    box.appendChild(deadline)
    box.appendChild(desc)
}