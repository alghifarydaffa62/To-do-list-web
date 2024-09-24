
function tugas() {

    const matkul = prompt('Nama Matkul: ')
    const dl = prompt('Deadline Tugas: ')
    const description = prompt('Deskripsi tugas: ')
    
    const box = document.createElement('div')
    box.classList.add("bg-slate-800")
    box.classList.add("rounded-md")
    box.classList.add("text-white")
    box.style.width = '24vw'
    box.style.height = '32vh'
    box.style.padding = '2rem'

    const judul = document.createElement('h1')
    judul.textContent = "Matkul: " + matkul
    judul.classList.add("text-2xl")
    judul.classList.add("font-bold")

    const deadline = document.createElement('h3')
    deadline.textContent = "Deadline: " + dl
    deadline.classList.add("mt-1")

    const desc = document.createElement('p')
    desc.textContent = description
    desc.classList.add("w-2/4")
    desc.classList.add("mt-2")

    const container = document.getElementById("container")
    box.appendChild(judul)
    box.appendChild(deadline)
    box.appendChild(desc)

    container.appendChild(box)
}