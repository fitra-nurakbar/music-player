const inputMusic = document.querySelector("#inputMusic")
const formMusic = document.querySelector("#formMusic")
const sourceMusic = document.querySelector("#sourceMusic")
const titleMusic = document.querySelector(".titleMusic")

inputMusic.addEventListener("change", function(){
    const file = this.files[0]
    titleMusic.innerHTML = file.name
    sourceMusic.src = URL.createObjectURL(file)
})
