import React,{createContext,useState} from 'react'

 export const MyContext =createContext();

export function MyProvider (props){
    const [person, setPerson] = useState({
        name: 'Kevin',
        age: 12,
        cool:true
    });

    const incAge =  ()=> {
       setPerson({
           ...person,
           age: person.age+1
       })
    }
    return(
        <MyContext.Provider value = {{person,incAge}}>
            {props.children}
        </MyContext.Provider>
    )
}

// export  Provider
   