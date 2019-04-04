import React from 'react'
import {MyContext} from '../Provider'
function Person() {
  return (
    <div className="person">
        <MyContext.Consumer>
            {
                (context)=>(
                    <React.Fragment>
                    <p>Name : {context.person.name}</p>
                    <p>Age : {context.person.age}</p>
                    <p>cool: {context.person.cool ? 'Yes': 'No'}</p>
                    <button onClick={context.incAge}>+1</button>
                    </React.Fragment>
                )
            }
        </MyContext.Consumer>
    </div>
  )
}

export default Person
