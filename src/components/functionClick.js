//rfce

import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick= {clickHandler}> Click </button> 
            {/* do not add () to the clickHandler */}
        </div>
    )
}

export default FunctionClick




