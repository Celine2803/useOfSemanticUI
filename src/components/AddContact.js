import React from 'react';

class AddContact extends React.Component{
    render(){ 
        return(
            <div className='ui main'>
        <form className='ui form'>
            <h1>ADD NAME</h1>
            <div className='field'>
                <label>Name</label>
            <input type='text'name='name'placeholder='name'/>
            </div>
            <div className='field'>
            <label>Email</label>
            <input type='email'name='name'placeholder='email'/>
            </div>
            <button className='ui button blue'>ADD</button>
        </form>
        </div>
    )}
       
    
}

export default AddContact;