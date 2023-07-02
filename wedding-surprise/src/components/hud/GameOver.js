export default function GameOver({ level }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 64,
        color: "red",
        fontWeight: "bold",
      }}
    >
      <p>Game Over</p>
    </div>
  );
}
