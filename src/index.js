'use strict';
// Cruz => 1
// Raya => -1
// Casilla no seleccionada => 0
class Game {
    board;
    isGameActive = true;
    activeUser;
    movements = [];

    idBoard;
    idPlayerTurn;
    idResetBtn;
    idMovements;

    numCells;

    constructor(numCells, idBoard, idPlayerTurn, idResetBtn, idMovements) {
        this.numCells = numCells;
        this.idBoard = idBoard;
        this.idPlayerTurn = idPlayerTurn;
        this.idResetBtn = idResetBtn;
        this.idMovements = idMovements;
    }

    init() {
        this.resetBoard();
        this.renderBoard();
    }

    resetBoard() {
        this.board = []
        for (let i = 0; i < this.numCells; i++) {
            this.board.push(Array(this.numCells).fill(0))
        }

        this.movements = [];
        this.isGameActive = true;
        this.activeUser = "cruz";
    }

    changeCell(row, column) {
        if (this.board[row][column] !== 0) {
            throw new Error("cell already picked")
        }
        this.board[row][column] = (this.activeUser === "cruz" ? 1 : -1);

        // Save movement
        this.movements.push(`${this.movements.length + 1},${Number(column) + 1},${Number(row) + 1},${this.activeUser}`);
    }

    checkWinner() {
        // Check Rows and Columns
        for (let i = 0; i < this.numCells; i++) {
            const rowWinner = this.getWinner(this.board[i]);
            const colWinner = this.getWinner(this.board.map(x => x[i]));

            if (rowWinner !== 0 || colWinner !== 0) {
                return rowWinner === 0 ? colWinner : rowWinner;
            }
        }

        // Check Diagonals
        const diagonal1Winner = this.getWinner(this.board.map((row, i) => row[i]));
        const diagonal2Winner = this.getWinner(this.board.toReversed().map((row, i) => row[i]));

        if (diagonal1Winner !== 0 || diagonal2Winner !== 0) {
            return diagonal1Winner === 0 ? diagonal2Winner : diagonal1Winner;
        }
        return 0;
    }

    getWinner(arrayOfCells) {
        if (arrayOfCells.every(x => x === arrayOfCells[0]) && arrayOfCells[0] !== 0) {
            return arrayOfCells[0]
        }
        return 0
    }

    createCell(id, className) {
        const cell = document.createElement('div');
        cell.id = id;
        cell.className = className;
        cell.onclick = this.listenToAction.bind(this);

        return cell
    }

    renderBoard() {
        // Elementos
        const gameBoard = document.getElementById(this.idBoard);
        const tableBody = document.getElementById(this.idMovements);
        const playerTurn = document.getElementById(this.idPlayerTurn);
        const restartBtn = document.getElementById(this.idResetBtn);

        //restartBtn.onclick = this.resetBoard.bind(this);
        restartBtn.onclick = this.resetBoard;

        playerTurn.className = this.activeUser === "cruz" ? "turn-cell-x" : "turn-cell-o";

        // Reseteo de elementos exitentes 
        gameBoard.innerHTML = null;
        tableBody.innerHTML = null;

        const iterations = this.numCells;
        for (let i = 0; i < iterations; i++) {
            const row = document.createElement('div');
            row.className = "row";

            for (let j = 0; j < iterations; j++) {
                row.appendChild(
                    this.createCell(`cell-${j}-${i}`, this.generateCellClassname(this.board[i][j]))
                )
            }
            gameBoard.appendChild(row);
        }

        // TODO insertar las nuevas rows en el cuerpo de la tabla
        this.movements.map(x => tableBody.appendChild(this.generateTableRow(x)))
    }

    listenToAction(event) {
        const [, cellCol, cellRow] = event.target.id.split('-');
        console.log("user action received on cell", cellCol, cellRow)

        if (!this.isGameActive) {
            alert("The game is over, restart a new game");
            return;
        }

        try {
            this.changeCell(cellRow, cellCol);
            this.activeUser = this.activeUser === "cruz" ? "raya" : "cruz";
            this.renderBoard();

            if (this.checkWinner() !== 0) {
                alert(`player ${this.activeUser} has won!`);
                this.isGameActive = false;
                return
            }
        } catch (error) {
            alert(error)
        }
    }

    generateCellClassname(value) {
        if (value === 0) return "cell"
        if (value === 1) return "cell-x"
        if (value === -1) return "cell-o"
    }

    generateTableRow(csvMovement) {
        const tableRow = document.createElement('tr');
        const [order, column, row, user] = csvMovement.split(",");

        const orderCell = document.createElement('td');
        orderCell.innerText = `${order}`
        tableRow.appendChild(orderCell);

        const movementCell = document.createElement('td');
        movementCell.innerText = `${column}-${row}`
        tableRow.appendChild(movementCell);

        const userCell = document.createElement('td');
        userCell.innerText = `${user}`
        tableRow.appendChild(userCell);

        return tableRow;
    }
}

window.onload = () => {
    const boardController = new Game(3, "gameboard", "playerturn", "restart", "movements");
    boardController.init();
}