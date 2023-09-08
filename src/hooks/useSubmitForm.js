import { useState } from "react";

export const useSubmitForm = (target) => {

    const [error, setError] = useState(null);

    let data = {};

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for (const key of formData.keys()) {
            data = { ...data, [key]: formData.get(key)}
        }
        
        target(data, (error) => !!error && setError(error))
    }

    return {submit, error};

}