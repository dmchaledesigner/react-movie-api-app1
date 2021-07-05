import React from 'react';

const SearchBox = ({ searchValue, setSearchValue }) => {

    const getValue = (e) => {
        const value = e.target.value;
        setSearchValue(value)

    }

    return (
        <div className='col col-sm-4'>

            <input
                className='form-control'
                onChange={getValue}
                value={searchValue}
                placeholder='Type to search...' >

            </input>

        </div>
    );
};

export default SearchBox;
