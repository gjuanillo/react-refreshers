import React, { useState, type ChangeEvent } from "react";

type FormFields = {
    name: string
    email: string
}

function HookForms() {
    const [formData, setFormData] = useState<FormFields>({
        name: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted', formData);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name,': ', e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default HookForms;
