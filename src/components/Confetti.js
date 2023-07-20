import React, {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = ( {show}) => {
    const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});
    const [showConfetti, setShowConfetti] = useState(false);

    const detectSize = () => {
        setDimension({width :window.innerWidth, height: window.innerHeight});
    }

    useEffect(() =>{
        setShowConfetti(true);
        const confettiTimer = setTimeout(() => {
            setShowConfetti(false);
          }, 7000);
      
        return () => {
          //  window.removeEventListener('resize', detectSize);
            clearTimeout(confettiTimer);

        };
    }, [show]);
   
 
    

    return (
        <>
        {
            showConfetti && 
             <ReactConfetti
             width = {windowDimension.width}
             height = {windowDimension.height}
             
             />
        }
       
        </>
    );
}

export default Confetti;