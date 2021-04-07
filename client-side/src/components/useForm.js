import React, { useState, useEffect } from 'react';

const useForm = (initialState) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    return { values, setValues, errors, setErrors, handleInputChange }
}
export default useForm