export default function LevelPlacementLayer({ level }) {
  return level.placements.map((element) => {
    const x = element.x * CELL_SIZE + "px";
    const y = element.y * CELL_SIZE + "px";
    const style = {
      position: "absolute",
      transform: `translate3d(${x}, ${y}, 0)`,
    };
    return (
      <div key={element.id} style={style}>
        <Sprite image={spriteSheetImage} frameCoord={element.frameCoord} />
      </div>
    );
  });
}
