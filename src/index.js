window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS>
    let cell = document.getElementsByClassName('cell-x')[0]
    // for (const cell of cells) {
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)
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
