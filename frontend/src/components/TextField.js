import react from 'react'

const TextField = function() {
    return (
        <form>
            <label>
                Enter a URL:
                <input type="text" name="query" />
            </label>
            <input type="submit" name="submit" />
        </form>
    );
}

export default TextField;