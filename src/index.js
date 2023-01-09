window.onload = () => {
    console.log('loaded')

    let cells = document.querySelectorAll(".cel")
    for (const cell of cells) {
        cell.onclick = () => {
            console.log('click')
            if (cell.className === 'cel')
                cell.className = 'cel-o'
            else
                cell.className = 'cel'
        }
    }
}
