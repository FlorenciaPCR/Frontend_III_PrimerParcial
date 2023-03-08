import { useState } from "react";
import Card from './Card';
import style from '../style.module.css'

function Formulario () {
    const [name, setName] = useState("");
    const [band, setBand] = useState("");

   
    const [isError, setIsError] = useState(false);
    const [showCardMessage, setShowCardMessage] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeBand = (e) => setBand(e.target.value);

    const validateName = (name) => {

        if ((name.trim()).length >= 3){
            return true;
        }else{
            return false;
        }
    }

    const validateBand = (band) => {
        if ((band.trim()).length >= 6){
            return true;
        }else{
            return false;
        }
    }


    function onSubmitForm(e){
        e.preventDefault();

        if(validateName(name) && validateBand(band)){
            setIsError(false);
            console.log("Nombre guardado")
            setShowCardMessage(true)
        }else{
            setIsError(true);
            console.log("Error al guardar nombre")
            setShowCardMessage(false)
        }
    }

    return(
        <>
            <form className={style.form} onSubmit={onSubmitForm}>
                <div className={style.space}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Escriba su nombre"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div className={style.space}>
                    <input
                        className={style.input}
                        type="band"
                        placeholder="Escriba su banda favorita"
                        value={band}
                        onChange={onChangeBand}
                    />
                </div>
 
                <div>
            <button className={style.button} type="submit">Enviar</button>
            </div>
            </form>
            {isError && <p className={style.error}>Por favor chequea que la información sea correcta.</p>}
            {showCardMessage ? <Card name={name} band={band}  /> : null}
        </>
    );
};
            

export default Formulario;
