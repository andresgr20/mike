export default function LevelPlacementLayer({ level }) {
  return level.placements
    .filter((placement) => {
      return !placement.hasBeenCollected;
    })
    .map((element) => {
      const [x, y] = element.displayXY();
      const style = {
        position: "absolute",
        transform: `translate3d(${x}, ${y}, 0)`,
        zIndex: element.zIndex(),
      };
      return (
        <div key={element.id} style={style}>
          {element.renderComponent()}
        </div>
      );
    });
}
