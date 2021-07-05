import React from 'react'

const searchBox = ({ searchValue, setSearchValue }) => {

    const inputHandler = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    return (
        <div className='col col-sm-4'>

            <input
                onChange={inputHandler}
                value={searchValue}
                className='form-control'
                placeholder='Type to search...'
            />

        </div>
    )
}

export default searchBox
