import { useState } from "react";

function Grid({numberofCards}){
    const [board, setBoard] = useState(Array(numberofCards).fill(""))
    return(
        <>
            <div className="grid">
                {boards.map( (el, idx) => )}
            </div>
        </>
    )
}
export default Grid;