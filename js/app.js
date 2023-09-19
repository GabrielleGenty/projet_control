const spanCOntainers = document.querySelectorAll('.title div');

spanCOntainers.forEach(item=>{

    const letters = item.children[0].
    textContent.split('');
    item.innerHTML = "";

    letters.forEach((el, index) =>{
        item.innerHTML += `<span style="transition-delay:${0.03 * index}s">${el}</span>`
    })
})