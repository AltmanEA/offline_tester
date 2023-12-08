import { useEffect, useState } from "react";

type CountdownProps = {
    start: number,
    end: () => void
}


export default function Countdown({ start, end }: CountdownProps) {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        setSeconds(start)
    }, 
        [start])

    useEffect(() => {
        setTimeout(tick, 1000);

        function tick() {
            if (seconds <= 0) 
                end()
            else {
                setSeconds(seconds - 1)
            }
        }
    }, [seconds]);

    return <div className="countdown">{seconds}</div>
}