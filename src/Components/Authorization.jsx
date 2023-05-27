import React, {useState} from 'react'


const Authorization = () => {
  
  const [value, setValue] = useState({
    idInstance: "",
    apiTokenInstance: ""
  })
  
  const handleChange = (e) =>{
    const {idInstance, value} = e.target;
    setValue((prev)=>{
        return {...prev, [idInstance]: value}
    })
  };

  const handleSubmit = () => {
    console.log(value);
  }

  return (
    <>
        <div>Authorization</div>
        <form onSubmit={handleSubmit}>
            <h3>ID: </h3> <input type='text'name="idInstance" onChange={handleChange} />
            <h3>API Token: </h3> <input type='text' name="apiTokenInstance" onChange={handleChange}/> 
            <button type="submit">Send</button>
        </form>
    </>
  )
}

export default Authorization