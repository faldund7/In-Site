import react from 'react';

const TextField = function() {
    return (
        <form>
            <label>
                <input type="text" name="query" class="input-field" placeholder="Enter a sentence"/>
            </label>
            <input type="submit" name="submit" className="style-button"/>
        </form>
    );
}

export default TextField;