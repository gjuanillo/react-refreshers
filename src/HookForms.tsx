import React, { useState, type ChangeEvent } from "react";

type FormFields = {
    name: string
    email: string
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

function HookForms() {
    const [formData, setFormData] = useState<FormFields>({
        name: '',
        email: ''
    });

    const [errors, setErrors] = useState<FormErrors>({})

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required!';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required!';
        }
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const validationErrors: FormErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            console.log('Form Data Submitted', formData);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        console.log(name, ': ', value);
        setFormData({ ...formData, [name]: value });
        if (errors[name as keyof FormFields]) {
            const newErrors = {...errors};
            delete newErrors[name as keyof FormFields];
            setErrors(newErrors);
        }
    }

    return (
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                    <br/>
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </label>
                <label>
                    Email:
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                    <br/>
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default HookForms;
