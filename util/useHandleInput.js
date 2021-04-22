import React, { useEffect, useState } from 'react'
i
const useValidateInput = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ uncontrolInputValue, setUncontrolInputValue ] = useState('')
    
    const handleInputValue = (event) => {
        setInputValue(event.value)
        if (inputValue !== '') {
            setUncontrolInputValue(inputValue)
        }
    }

    return {inputValue, handleInputValue, uncontrolInputValue }
}

export default useValidateInput