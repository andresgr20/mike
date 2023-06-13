import React,  {useEffect,useState} from 'react';

const Player: React.FC<{top:number;left:number}> = ({top,left}) => (
    <div
    style={{
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'red',
    }}
  />
);
function MainGame(){
    const [top,setTop] = useState(0);
    const [left,setLeft] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch(event.key) {
                case 'ArrowUp':
                    setTop((prevTop) => prevTop - 10);
                    break;
                case 'ArrowDown':
                    setTop((prevTop) => prevTop + 10);
                    break;
                case 'ArrowLeft':
                    setLeft((prevLeft) => prevLeft - 10);
                    break;
                case 'ArrowRight':
                    setLeft((prevLeft) => prevLeft + 10);
                    break;
                default:
                    break;
            }
        };
        window.addEventListener('keydown',handleKeyDown);
        return () => {
            window.removeEventListener('keydown',handleKeyDown);
        };
    }, []);

    return(
        <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          border: '1px solid black',
        }}
      >
        <Player top={top} left={left} />
      </div>
    );
    // start by doing a white backgroun and move with course
    // empty background
    // allow to move up and down with the player
    // clickable events

}

export default MainGame;