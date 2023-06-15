import { useEffect, useState } from "react";
import Sprite from "./components/graphics/Sprite";
import { SPRITE_SHEET_SRC } from "./helpers/consts";

function App() {
  const [spriteSheetImage, setSpriteSheetImage] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, []);
  if (!spriteSheetImage) {
    return null;
  }
  return (
    <div>
      <Sprite image={spriteSheetImage} frameCoord={"1x0"} />
    </div>
  );
}

export default App;
