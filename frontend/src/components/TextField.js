import react from 'react'
import './textfield.css'

const TextField = function() {
    return (
        <form>
            <label>
                Enter a URL:
                <input type="text" name="query" class="input-field"/>
            </label>
            <input type="submit" name="submit" />
        </form>
    );
}

export default TextField;