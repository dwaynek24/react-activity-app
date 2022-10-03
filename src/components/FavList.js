import React from 'react';

function FavList({addActivity}, props) {
    return (
        <div>
            <button onClick={addActivity}>Add</button>
        
            <p>{props.fav}</p>
            </div>
    );
}

export default FavList;