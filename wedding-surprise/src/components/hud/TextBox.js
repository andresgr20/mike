import { useRecoilState } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import GamesMap from "../../games/GamesMap";
import { useKeyPress } from "../../hooks/useKeyPress";
import { MESSAGE_TYPES } from "../../helpers/consts";

export default function TextBox({ message, type, game }) {
  const [currentId, setCurrentId] = useRecoilState(currentLevelIdAtom);

  const handleNextGame = () => {
    switch (type) {
      case MESSAGE_TYPES.GO_BACK:
        setCurrentId(GamesMap["WeddingGame"]);
        break;
      case MESSAGE_TYPES.NEXT_GAME:
        setCurrentId(GamesMap[game]);
        break;
      default:
        break;
    }
  };
  // Will map to the next game
  useKeyPress("Space", () => {
    handleNextGame();
  });

  // it will exit the textbox
  useKeyPress("q", () => {
    return;
  });

  return (
    <div className={styles}>
      <p>
        hi
        {/* Game Complete
        <button
          onClick={() => {
            const levelArray = Object.keys(GamesMap);
            const currentId = levelArray.findIndex((id) => {
              return id === currentId;
            });
            const nextLevelId = levelArray[currentId + 1] ?? levelArray[0];
            setCurrentId(nextLevelId);
          }}
        >
          Next Level
        </button> */}
      </p>
    </div>
  );
}
