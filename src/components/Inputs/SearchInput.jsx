import React, { useState } from 'react'

const SearchInput = ({ onChange, placeholder }) => {

    const handleChange = val => {
        setText(val);
        onChange(val);
    }

    const [text, setText] = useState();

    return (
        <input type="text" name="search" placeholder={placeholder} value={text} onChange={handleChange} />
    )
}

SearchInput.defaultProps = {
    onChange: Function.prototype,
    placeholder: 'Search for name, status, ...'
}

export default SearchInput