import { useEffect, useState } from "react";

const BOARD_SIZE = 20;
const SPEED = 150;

export default function App() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(randomFood());
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);

  function randomFood() {
    return {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  }

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };

        if (direction === "UP") head.y -= 1;
        if (direction === "DOWN") head.y += 1;
        if (direction === "LEFT") head.x -= 1;
        if (direction === "RIGHT") head.x += 1;

        // Wall collision
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= BOARD_SIZE ||
          head.y >= BOARD_SIZE
        ) {
          setGameOver(true);
          return prev;
        }

        // Self collision
        for (let part of prev) {
          if (part.x === head.x && part.y === head.y) {
            setGameOver(true);
            return prev;
          }
        }

        const newSnake = [head, ...prev];

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setFood(randomFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") setDirection("UP");
      if (e.key === "ArrowDown") setDirection("DOWN");
      if (e.key === "ArrowLeft") setDirection("LEFT");
      if (e.key === "ArrowRight") setDirection("RIGHT");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">🐍 Snake Game</h1>

      {gameOver && (
        <p className="text-red-500 font-semibold mb-2">Game Over</p>
      )}

      <div
        className="grid bg-gray-800 p-2 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1.25rem)`,
        }}
      >
        {[...Array(BOARD_SIZE * BOARD_SIZE)].map((_, i) => {
          const x = i % BOARD_SIZE;
          const y = Math.floor(i / BOARD_SIZE);

          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={i}
              className={`w-5 h-5 border border-gray-700
                ${isSnake ? "bg-green-500" : ""}
                ${isFood ? "bg-red-500" : ""}`}
            />
          );
        })}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Use arrow keys to move
      </p>
    </div>
  );
}
