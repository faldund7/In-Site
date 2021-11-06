import { useState } from 'react';

const TextField = function() {
    const [text, setText] = useState("");

    const handleSubmit = function(event){
        event.preventDefault();
        alert('Pressed Submit!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="query" class="input-field" placeholder="Enter a sentence" onChange={e => setText(e.target.value)}/>
            </label>
            <input type="submit" name="submit" className="style-button"/>
        </form>
    );
}

export default TextField;