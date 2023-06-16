import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";

function App() {
  const [spriteSheetImage, setSpriteSheetImage] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    console.log(image);
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, []);
  if (!spriteSheetImage) {
    return null;
  }
  return (
    <div>
      <RenderLevel spriteSheetImage={spriteSheetImage} />
    </div>
  );
}

export default App;
