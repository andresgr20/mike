import { THEME_TILES_MAP } from "../../helpers/consts";
import MapCell from "./MapCell";

export default function LevelBackgroundTilesLayer({ level, image }) {
  const widthWithWalls = level.tilesWidth + 1;
  const heightWithWalls = level.tilesHeight + 1;
  const tiles = THEME_TILES_MAP[level.theme];

  function getBackgroundTile(x, y) {
    if (x === 0) {
      return tiles.LEFT;
    }
    if (x === widthWithWalls) {
      return tiles.RIGHT;
    }

    if (y === 0) {
      return tiles.TOP;
    }

    if (y === heightWithWalls) {
      return tiles.BOTTOM;
    }
    return tiles.FLOOR;
  }
  let canvases = [];
  for (let y = 0; y <= heightWithWalls; y++) {
    for (let x = 0; x <= widthWithWalls; x++) {
      canvases.push(
        <MapCell
          image={image}
          key={`${x}_${y}`}
          x={x}
          y={y}
          frameCoord={"2x3"}
        />
      );
    }
  }

  return <div>{canvases}</div>;
}
