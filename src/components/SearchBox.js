import React from 'react'

const SearchBox = ({ searchValue, setSearchValue }) => {
    return (
        <div className='col col-sm-4'>
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='form-control'
                placeholder='Type to search...'
            ></input>
        </div>
    )
}

export default SearchBox
