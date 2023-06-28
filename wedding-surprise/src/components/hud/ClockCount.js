export default function ClockCount({ level }) {
  return (
    <p style={{ position: "absolute", left: 120, top: 0, color: "#fff" }}>
      Seconds Remaining: {level.secondsRemaining}
    </p>
  );
}
