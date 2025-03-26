import {useEffect, useState } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("Estado inicializado")

        return() => {
            console.log("Estado finalizado")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome alterou para " + nome)
    }, [nome]);

    useEffect(() => {
        console.log("O estado da materia mudou para materiaA:" + materiaA + " materiaB:" + materiaB + " materiaC:" + materiaC) 
    },[materiaA, materiaB, materiaC]);


    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome} você foi APROVADO sua media é {media.toFixed(1)}</p>
            )
        } else{
            return (
                <p>Olá {nome} você foi REPROVADO  sua media é  {media.toFixed(1)}</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu Nome:" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA (parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB (parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC (parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario