/* 
import React, { useState } from 'react'
import Input from '@material-ui/core/Input'

export default props => {
    const [valor, setValor] = useState('Inicial')

    function mudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>

            <div>
                <Input onChange={mudar}/>
            </div>
        </div>
    )
}
*/