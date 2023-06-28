export default function GameScore({ level }) {
  console.log(level);
  const score = level.score;
  return (
    <p style={{ position: "absolute", left: 0, top: 0, color: "#fff" }}>
      Cats Found: {score}
    </p>
  );
}
