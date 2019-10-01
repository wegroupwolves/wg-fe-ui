import React from 'react'
import { string, func } from 'prop-types';

const SearchInput = ({ className, onChange, placeholder, value }) => {

    const handleChange = val => {
        onChange(val);
    }

    return (
        <input className={className} type="text" name="search" placeholder={placeholder} value={value} onChange={handleChange} />
    )
}

SearchInput.defaultProps = {
    className: '',
    onChange: Function.prototype,
    placeholder: 'Search for name, status, ...',
    value: ''
}

SearchInput.propTypes = {
    className: string,
    onChange: func,
    placeholder: string,
    value: string
}

export default SearchInput