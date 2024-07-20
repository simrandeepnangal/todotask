import React from 'react'
import "./global.css"
import { useState } from 'react'
import Form from './components/forms/Form'
import Todo from './components/todo/Todo'
import toast, { Toaster } from 'react-hot-toast';


import { v4 as uuidv4 } from 'uuid';


const App = () => {
  let [state, setState] = useState({
    title: "",
    todo: "",
    id: uuidv4(),
    items: [],
  });
  console.log(uuidv4);
  let formHandle = (e) => {
    // console.log("changed");
    // console.log(e.target.value);
    // setState(e.target.value)
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // toast.success("task added");
    console.log(state);
    try {
      let newItem = {
        title: state.title,
        todo: state.todo,
        id: uuidv4(),

      };
      let updatedItems = [...state.items, newItem];
      console.log(updatedItems);

      if (state.title !== "" && state.todo !== "") {
        toast.success("task added")
        setState({
          items: updatedItems,
          id: uuidv4(),
          title: "",
          todo: "",

        });
      }
      else {
        toast.error("error add task");
      }
    }
    catch {
      console.log("error");
    }
  };
  let todoUpdate = (id) => {
    console.log("update", id);
    let staticItems = state.items.filter((obj) => {
      return obj.id !== id;
    })
    console.log(staticItems);
    let updateTodo = state.items.find((obj) => {
      return obj.id === id;
    });
    console.log(updateTodo);
    setState({
      items: staticItems,
      title: updateTodo.title,
      todo: updateTodo.todo,
      id: updateTodo.id,
    })
  };
  let todoDelete = (id) => {
    console.log("Deleted", id);
    let staticItems = state.items.filter((obj) => {
      return obj.id !== id;
    })
    // let deleteTodo = state.items.find((obj) => {
    //   return obj.id == id
    // })
    console.log(staticItems);
    setState({
      items: staticItems,
      title: "",
      todo: "",
      id: "",
    })
  }
 
  return (
    <main id='mainWrapper'>
      <Toaster />
      <article>
        <header>
          <h1>Todo list</h1>
        </header>
        <section>
          <Form
            title={state.title}
            todo={state.todo}
            formHandle={formHandle}
            handleSubmit={handleSubmit}></Form>


          <Todo items={state.items} todoUpdate={todoUpdate} todoDelete={todoDelete} />
        </section>
      </article>
    </main>
  )
}

export default App;
