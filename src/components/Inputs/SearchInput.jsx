import React from 'react'

const SearchInput = ({ onChange, placeholder }) => {

    const handleChange = val => {
        onChange(val);
    }

    return (
        <input type="text" name="search" placeholder={placeholder} value={text} onChange={handleChange} />
    )
}

SearchInput.defaultProps = {
    onChange: Function.prototype,
    placeholder: 'Search for name, status, ...'
}

export default SearchInput