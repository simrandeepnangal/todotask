import React from 'react'

const Todo = ({ items,todoUpdate,todoDelete }) => {
  console.log("todoComp------>",items);
  console.log( items.length );
  if (items.length === 0) {
    return <h1 className='noTask'>No Tasks Available</h1>
  } else {
    return (
      <div id="todoContainer">
        
        <h1>Todo</h1>
        {items.map(({ title, todo, id }) => {
          console.log(title, todo, id);
          return (
            <section id="todoWrapper" key={id}>
              <h1>title</h1>
              <p>{todo.slice(0,35)}...</p>
              <article className='todobtn'>
                <button onClick={()=>todoUpdate(id)}>update</button>
                <button onClick={()=>todoDelete(id)}>Delete</button>
              </article>
            </section>
         
          );
          })}
          </div>);
  };
};
export default Todo;
