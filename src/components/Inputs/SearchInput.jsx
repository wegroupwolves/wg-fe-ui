import React from 'react'
import { func, string } from 'prop-types';


const SearchInput = ({ onChange, placeholder, text }) => {

    const handleChange = val => {
        onChange(val);
    }

    return (
        <input type="text" name="search" placeholder={placeholder} value={text} onChange={handleChange} />
    )
}

SearchInput.defaultProps = {
    onChange: Function.prototype,
    placeholder: 'Search for name, status, ...',
    text: ''
}

SearchInput.propTypes = {
    onChange: func,
    placeholder: string,
    text: string
}

export default SearchInput