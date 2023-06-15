import React, {useEffect, useState} from 'react';
import './ChaseColleen.css';


const ChaseColleen: React.FC = () => {
    const [isJumping,setIsJumping] = useState(false);
    // const [targetPosition,setTargetPostion] = useState(1000);
    const [obstacles,setObstacles] = useState([] as number[]);
    // const [targetSpeed, setTargetSpeed] = useState(100000);


    const handleJump = () => {
        if(!isJumping){
            setIsJumping(true);

            // updateTargetSpeed();
            const newObstacles = Math.floor(Math.random()*4);
            setObstacles([...obstacles,newObstacles]);

        }

        setTimeout(() =>{
            setIsJumping(false);
        },1000);
    }

    // const updateTargetSpeed = () => {
    //     setTargetSpeed(targetSpeed-.000000001);
    // }

    // useEffect(() =>{
    //     const moveTarget = setInterval(() => {
    //         setTargetPostion((prevPosition) => prevPosition - targetSpeed);

    //         if(targetPosition <=0) {
    //             clearInterval(moveTarget);
    //             setTargetPostion(100);
    //             setTargetSpeed(10);
    //         }
    //     },100);

    //     return () => clearInterval(moveTarget);
    // },[targetPosition,targetSpeed]);

    return (
    <div className="game-container" onClick={handleJump}>
      <div className={`player ${isJumping ? 'jump' : ''}`} />
      {obstacles.map((pos,id) => (
            <div key={id} className={`obstacle obstacle-${pos}`}/> 
      ))}
      {/* <div className="target" style={{ left: `${targetPosition}%` }} /> */}
    </div>
    );
}

export default ChaseColleen;