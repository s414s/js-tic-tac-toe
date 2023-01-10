window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS>
    let cell = document.getElementsByClassName('cell-x')[0]
    // for (const cell of cells) {
        cell.onclick = () => {
            console.log('click')
            if (cell.className === 'cell')
                cell.className = 'cell-o'
            else {
                if (cell.className === 'cell-o')
                    cell.className = 'cell-x'
                else
                    cell.className = 'cell-o'
            }
        }
    // }
}
