const togglebutton = document.getElementById("toggle-skills") as HTMLButtonElement
const skills = document.getElementById("skills-section") as HTMLElement

togglebutton.addEventListener ("click", () => {
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});