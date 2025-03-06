import { useEffect, useRef } from "react"

export interface UseTimerProps {
    id:number,
    duration?: number,
    remove:(id:number) => void,
}
const useTimer = (props: UseTimerProps) => {
    const { id,duration = 2000,remove } = props;
    const timer = useRef<number|null>(null);
    const startTimer = () => {
        timer.current = window.setTimeout(()=>{
            remove(id);
            removeTimer()
        },duration)
    };
    const removeTimer = () => {
        if(timer.current){
            window.clearTimeout(timer.current);
            timer.current = null;
        }
    };
    const onMouseEnter = () => {
        startTimer()
    };
    const onMouseLeave =() => {
        removeTimer()
    }
    useEffect(()=>{
        startTimer();
        return ()=> removeTimer()
    },[]);
    return  {
        onMouseEnter,
        onMouseLeave
    }
 }

 export default useTimer