import react from 'react';
import './textfield.css';
import './submit.css';

const TextField = function() {
    return (
        <form>
            <label>
                <input type="text" name="query" class="input-field" placeholder="Enter a URL"/>
            </label>
            <input type="submit" name="submit" className="style-button"/>
        </form>
    );
}

export default TextField;