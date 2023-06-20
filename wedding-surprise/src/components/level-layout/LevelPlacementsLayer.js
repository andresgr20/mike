export default function LevelPlacementLayer({ level }) {
  return level.placements.map((element) => {
    const [x, y] = element.displayXY();
    const style = {
      position: "absolute",
      transform: `translate3d(${x}, ${y}, 0)`,
    };
    return (
      <div key={element.id} style={style}>
        {element.renderComponent()}
      </div>
    );
  });
}
