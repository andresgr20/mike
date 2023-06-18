import { useEffect } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";

function App() {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    console.log(image);
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, [spriteSheetImage]);
  if (!spriteSheetImage) {
    return null;
  }
  return (
    <div>
      <RenderLevel />
    </div>
  );
}

export default App;
