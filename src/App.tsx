import './App.css'
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { FormDataType } from './FormDataType';


function App() {

    const [formData, setFormData] = useState<FormDataType>(
        {
            text: 'Input Text Here',
            checkbox: false,
            radio: '',
            select: ''
        }
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement
        const { name, value, type, checked } = target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

    };
    return (
        <div className='form-container'>
            <h1>Form Example</h1>
            <form>
                {/* Text Input */}
                <div className='form-field'>
                    <label>Text: </label>
                    <input type='text' name='text' value={formData.text} onChange={handleChange} />
                </div>

                {/* Checkbox */}
                <div className='form-field'>
                    <label>
                        <input type='checkbox' name='checkbox' checked={formData.checkbox} onChange={handleChange} />
                        Checkbox
                    </label>

                    {/* Radio */}
                    <div className='form-field'>
                        <label>Radio: </label>
                        <label>
                            <input type='radio' name='radio' value='Radio1'
                                checked={formData.radio === 'option1'} onChange={handleChange} />
                            option 1
                        </label>
                        <label>
                            <input type='radio' name='radio' value='Radio2'
                                checked={formData.radio === 'option2'} onChange={handleChange} />
                            option 2
                        </label>
                    </div>

                    {/* Selection */}
                    <div className='form-field'>
                        <label>Select: </label>
                        <select name='select' value={formData.select} onChange={handleChange}>
                            <option value="">Choose an Option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </div>

                    <div className='form-data'>
                        <h3>Form Data</h3>
                        <p><strong>Text:</strong> {formData.text || ''}</p>
                        <p><strong>Checkbox:</strong> {formData.checkbox ? 'checked' : 'unchecked'}</p>
                        <p><strong>Radio:</strong> {formData.radio || ''}</p>
                        <p><strong>Selection:</strong> {formData.select || ''}</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
