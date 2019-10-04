import React from 'react'
import { object, func, string } from 'prop-types';


const SearchInput = ({ className, onChange, placeholder, text, ...otherProps }) => {

    const handleChange = val => {
        onChange(val);
    }

    return (
        <input className={className} type="text" name="search" placeholder={placeholder} value={text} onChange={handleChange} {...otherProps} />
    )
}

SearchInput.defaultProps = {
    className: '',
    onChange: Function.prototype,
    placeholder: 'Search for name, status, ...',
    text: '',
    otherProps: {}
}

SearchInput.propTypes = {
    className: string,
    onChange: func,
    placeholder: string,
    text: string,
    otherProps: object
}

export default SearchInput