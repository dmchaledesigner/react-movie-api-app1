import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const AddFavourite = () => {
    return (
        <>
            <span className='mr-2'>Add to Favourites</span>
            <FontAwesomeIcon icon={faHeart} className="iconHeart" size="xs" />
        </>
    )
}

export default AddFavourite
