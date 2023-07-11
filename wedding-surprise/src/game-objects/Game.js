import { useEffect } from "react";
// import { SPRITE_SHEET_SRC } from "./helpers/consts";
// import RenderLevel from "./components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "../atoms/spriteSheetImageAtom";
import RenderLevel from "../components/level-layout/RenderLevel";
import { SPRITE_SHEET_SRC } from "../helpers/consts";
// import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";

export function Game() {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
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
