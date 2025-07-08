import { useState } from 'react';

function ColorPicker() {
    const [backgroundColor, setBackgroundColor] = useState<string>('#242424');

    const colors: string[] = ['#ff0000', '#b8a7f5', '#a3f78c', '#d14c83', '#f7d18c', '#4da8f7', '#19c0fa'];

    const handleColorChange = (color: string) => {
        setBackgroundColor(color);
    }

    return (
        <div className='color-card' style={{backgroundColor: backgroundColor}}>
            <h1>Color</h1>
            <div className='color-palette'>
                {colors.map((color, index) => (
                    <div key={index} className='color-box' 
                        style={{backgroundColor: color}} onClick={() => handleColorChange(color)}>
                    </div>
                ))}
            </div>
            <div className='custom-color-picker'>
                <input type="color" value={backgroundColor} 
                    onChange={(e) => handleColorChange(e.target.value)}/>
            </div>
        </div>
    );
}

export default ColorPicker;
