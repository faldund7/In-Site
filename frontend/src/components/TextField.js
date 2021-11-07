import { useState } from 'react';

const TextField = function() {
    const [text, setText] = useState("");

    const handleSubmit = function(event){
        event.preventDefault();
        alert('Query: ' + text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field-with-submit">
                <input type="text" name="query" className="input-field" placeholder="Enter a sentence" onChange={e => setText(e.target.value)}/>
                <input type="submit" name="submit" className="style-button"/>
            </div>
        </form>
    );
}

export default TextField;