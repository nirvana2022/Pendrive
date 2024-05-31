import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';

function Temporizador() {
    const [contador, setContador] = useState(0)
    
    useEffect(()=>{
        //Operación a realizar
        setTimeout(()=>{
            setContador(contador+1);
        },1000)
    })
    // Condición de ejecución
    return (
    <div>
        <Button variant="outline-success">{contador}</Button>
    </div>
  )
}

export default Temporizador