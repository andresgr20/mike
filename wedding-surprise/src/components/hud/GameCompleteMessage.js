import { useRecoilState } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import GamesMap from "../../games/GamesMap";

export default function GameCompleteMessage() {
  const [currentId, setCurrentId] = useRecoilState(currentLevelIdAtom);
  return (
    <p style={{ position: "absolute", left: 0, top: 64, color: "blue" }}>
      Game Complete
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
      </button>
    </p>
  );
}
