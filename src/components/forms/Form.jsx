

import React from 'react'

const Form = ({title,todo,formHandle,handleSubmit}) => {
    // console.log(state);
  return (
    <main id='formWrapper'>
        <form>
            <div className='form-group'>
                <label htmlFor="">Title</label><br /> <br />
                <input type="text" placeholder='enter Title' value={ title } name="title" onChange={formHandle}/>
            </div>
            <div className='form-group'>
                <label htmlFor="todo">Todo</label><br />
                <input type="text" placeholder='enter todo' value={ todo } name="todo" onChange={formHandle}/>
            </div>
            <div className='form-group'>
           <button onClick={handleSubmit} >Submit</button>
            </div>
        </form>
      
    </main>
  );
};

export default Form;

