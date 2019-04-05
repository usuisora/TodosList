import React,{createContext,useState} from 'react'

 export const MyContext =createContext();
 export function MyProvider (props){

    const [importance, setImportance] = useState([
        {id:'1',name:'Срочная важная'},
        {id:'2',name:'Срочная неважная'},
        {id:'3',name:'Не срочная важная'},
        {id:'4',name:'Не срочная неважная'}]);
    
    const [todos, setTodos] = useState([
        {id:1,isCompleted: true, name:'Встретится с Другом', description:'В 2 часа на проспекте.',date:new Date(2019,3,23),importance:importance[0],tegs:'#meeting'},
        {id:1,isCompleted: true, name:'Почитать книгу', description:'Алхимик Пауло Коэльо',date:new Date(2019,3,24),importance:importance[0],tegs:'#meeting'},
        {id:1,isCompleted: true, name:'Забрать справку', description:'Мед. осмотр в поликлинике. Кабинет 12',date:new Date(2019,3,25),importance:importance[0],tegs:'#meeting'}
    ]);
    

    return(
        <MyContext.Provider value = {{todos,importance}}>
            {props.children}
        </MyContext.Provider>
    )
}

// export  Provider
   