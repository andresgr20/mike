import { useEffect, useState } from "react";
import { PLAYERS, SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";
import soundsManager from "./classes/Sounds";
import "./startScreen.css";

soundsManager.init();

function App() {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
  const [player, setPlayer] = useState(null);
  const [playerSelected, setPlayerSelected] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, [spriteSheetImage]);
  if (!spriteSheetImage && !playerSelected) {
    return null;
  }
  const handleCharacterAlyssa = () => {
    setPlayer(PLAYERS.ALYSSA);
    setPlayerSelected(true);
  };

  const handleCharacterMike = () => {
    setPlayer(PLAYERS.MIKE);
    setPlayerSelected(true);
  };

  return (
    <div>
      {!playerSelected && (
        <div className="container">
          <div className="centered">
            <div className="bigText">Welcome to your wedding gift!</div>
            <p className="text"> Select a character</p>
            <div className="buttonContainer">
              <button onClick={handleCharacterMike}>Mike</button>
              <button onClick={handleCharacterAlyssa}>Alyssa</button>
            </div>
            <p className="text">
              Play until the end and you get a reward :). Every gift is a mini
              game, but the one at the middle is special.
            </p>
            <p className="text">Done by your favourite living hazard</p>
          </div>
        </div>
      )}
      {playerSelected && <RenderLevel player={player} />}
    </div>
  );
}

export default App;
