import React,{createContext,useState} from 'react'
export const MyContext =createContext();
 export function MyProvider (props){

    const [isSideOpen, setIsSideOpen] = useState(false);
  
    const [msg, setMsg] = useState('Нажмите ОТМЕНА, чтобы выйти  без сохранения');
    
    const [importance] = useState([
        {id:'1',name:'Срочная важная'},
        {id:'2',name:'Срочная неважная'},
        {id:'3',name:'Не срочная важная'},
        {id:'4',name:'Не срочная неважная'}]);
    
    const [todos, setTodos] = useState([
        {id:1,isCompleted: 'Потом', name:'Встретится с Другом', description:'В 2 часа на проспекте.',date:new Date(2019,3,23).toISOString().substring(0,10),importance:importance[0].name,tegs:'#meeting'},
        {id:2,isCompleted: 'Потом', name:'Почитать книгу', description:'Алхимик Пауло Коэльо',date:new Date(2019,3,24).toISOString().substring(0,10),importance:importance[3].name,tegs:'#reading'},
        {id:3,isCompleted: 'Потом', name:'Забрать справку', description:'Мед. осмотр в поликлинике. Кабинет 12',date:new Date(2019,3,25).toISOString().substring(0,10),importance:importance[0].name,tegs:'#trip'}
    ]);
    
   
    const deleteTodo = (id) =>{
        var newTodos = todos.filter(todo=>(todo.id!==id))
        setTodos(newTodos)
        return 'deleted'
    }

    const [initTodo, setInitTodo] = useState({});
    const [openSnack, setOpenSnack] = useState(false);

    const addTodo = () =>{
            console.log('add entry initTodo',initTodo)
            var newtodo = {isCompleted:'Потом'}


            var del = new Promise( function(resolve,reject){
                var newTodos = todos.filter(todo=>(todo.id!=initTodo.id))
                setTodos(newTodos)
                console.log('todosin del',newTodos)

                resolve(newTodos);
            })
            del.then((res)=>{
                console.log('todos',res)
                Object.entries(initTodo).forEach(row=>{
                    if(row[0] !=='id')
                        newtodo[row[0]] = row[1] 
                    })
                    newtodo.id = (todos.length!==0) ? todos[todos.length-1].id+1 : 1
                    console.log('inside',newtodo)
                    var newTodos = [...res,newtodo]
                    console.log('newTodossss', newTodos)
                    setTodos(newTodos)
                    setInitTodo({date: new Date().toISOString().substring(0,10)})
                })
    }

    

    const setTodoStatus = (id,status)=>{
        var editTodo = todos.find(todo=>(todo.id===id))
        editTodo.isCompleted = status;
        const newTodos = [...todos]
        newTodos.sort((a,b)=>(a.id-b.id))
        setTodos(newTodos)
        
    }
    const editTodo = (id) =>{
        var editTodo = todos.find(todo=>(todo.id===id))
        setInitTodo({
            id: id,
            name:editTodo.name,
            description:editTodo.description,
            date:editTodo.date,
            importance:editTodo.importance,
            tegs: editTodo.tegs
        })
        // deleteTodo(id)
        setIsSideOpen(true)
    }

    return(
        <MyContext.Provider value = {{todos,
                                        deleteTodo,
                                        importance,
                                        addTodo,
                                        isSideOpen,
                                        setIsSideOpen,
                                        editTodo,
                                        initTodo,
                                        setInitTodo,
                                        setTodoStatus,
                                        openSnack,
                                        msg,
                                        setMsg,
                                        setOpenSnack}}>
            {props.children}
        </MyContext.Provider>
    )
}

// export  Provider
   