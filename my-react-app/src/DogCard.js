import React from 'react'
import Image from './image';
import Name from './Name';

function DogCard(props){
    return(
        <>
            <Name>
                <h3>{props.name}</h3>   
            </Name>
            <Image src = {props.image} />
        </>


    );
}
// export default DogCard // use for single functions only 
export  {DogCard}