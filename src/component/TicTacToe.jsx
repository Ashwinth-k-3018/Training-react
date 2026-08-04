import React, { useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {

    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState("");

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = (newBoard) => {

        for (let pattern of winningPatterns) {

            const [a, b, c] = pattern;

            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                return newBoard[a];
            }
        }

        return "";
    };

    const handleClick = (index) => {

        if (board[index] !== "" || winner) {
            return;
        }

        const newBoard = [...board];

        newBoard[index] = isXTurn ? "X" : "O";

        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);

        if (gameWinner) {
            setWinner(gameWinner);
        }
        else {
            setIsXTurn(!isXTurn);
        }
    };

    const handleReset = () => {
        setBoard(Array(9).fill(""));
        setIsXTurn(true);
        setWinner("");
    };

    const isDraw =
        !winner &&
        board.every((cell) => cell !== "");

    return (

        <div className="game-container">

            <div className="game-card">

                <h1>Tic Tac Toe</h1>

                <p className="subtitle">
                    Play the classic X and O game
                </p>

                {winner ? (

                    <h2 className="status winner">
                         Winner : {winner}
                    </h2>

                ) : isDraw ? (

                    <h2 className="status draw">
                         Match Draw
                    </h2>

                ) : (

                    <h2 className="status">
                        Player {isXTurn ? "X" : "O"} Turn
                    </h2>

                )}

                <div className="board">

                    {board.map((cell, index) => (

                        <button
                            key={index}
                            className={`box ${cell === "X" ? "x-box" : cell === "O" ? "o-box" : ""}`}
                            onClick={() => handleClick(index)}
                        >
                            {cell}
                        </button>

                    ))}

                </div>

                <button
                    className="reset-btn"
                    onClick={handleReset}
                >
                    Play Again
                </button>

            </div>

        </div>

    );
}