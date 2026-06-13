import { useState, useEffect } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import type { InputFormProps } from "../types";

export default function Form<T extends Record<string, any>>({
    initialData,
    httpType,
    onSubmit,
    onCancel,
    formFields,
    title,
    userAction,
}: InputFormProps<T>) {
    const [formData, setFormData] = useState<T>(initialData);

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
        await onSubmit(formData);
    };

    return (
        <>
        <div className="form-container">
        <div className="form-header">
            <h2>{title}</h2>
            <button type="button" onClick={onCancel}>Back</button>
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
                { userAction? (
                    <button type='submit'>{userAction === 1 ? "login" : "register" }</button>
                ) : (
                    <button type='submit'>{httpType === 'post' ? 'Add' : 'Save'}</button>
                )}
                {/* <button type='submit'>{httpType === 'post' ? 'Add' : 'Save'}</button> */}
            </fieldset>
        </form>
        </div>
        </>
    )
};

