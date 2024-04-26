import mole from "../embedded/mole.png"
import { useEffect } from "react"

export default function Mole({setIsShowing, onMoleClick}) {
    useEffect(() => {
        let randMillis = Math.ceil(Math.random() * 5000 + 1000)
        let timer = setTimeout(() => {
            setIsShowing(false)
        }, randMillis)

        return () => clearTimeout(timer);
    }, []);

    return <div>
        <img src={mole} style={{width: '30vw'}} onClick={onMoleClick}/>
    </div>
}