import { useState, useEffect } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import type { InputFormProps, FormData } from "../types";

export default function Form({
    initialData,
    httpType,
    onSubmit,
    onCancel,
    formFields,
    title
}: InputFormProps) {
    const [formData, setFormData] = useState<FormData>(initialData);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData])

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <>
        <div className="form-container">
        <div>
        <h2>{title}</h2>
            <button type="button" onClick={onCancel}>Go Back</button>
        </div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                {formFields.map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""} 
                            onChange={handleChange}
                            required={field.required}
                        />
                    </div>
                ))}
                <button type='submit'>{httpType === 'post' ? 'Add' : 'Save'}</button>
            </fieldset>
        </form>
        </div>
        </>
    )
};

