import './App.css'
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

    const handleChange = (e) => {
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

                <div className='form-field'>
                    <label>
                        <input type='checkbox' name='checkbox' checked={formData.checkbox} onChange={handleChange} />
                        Checkbox
                    </label>
                </div>
            </form>
        </div>
    );
}

export default App;
