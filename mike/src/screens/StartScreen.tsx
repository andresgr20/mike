import React,  {useEffect,useState} from 'react';

function StartScreen(){
    const [start,setStart] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch(event.key) {
                case 'Space':
                    setStart(true);
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
        <div>
            <div>
                The wedding
            </div>

            <div>
                Press space to start
            </div>
        </div>
    );
}

export default StartScreen;