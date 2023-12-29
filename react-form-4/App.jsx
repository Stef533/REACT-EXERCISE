import { useState } from 'react'

export function MyForm(){
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  })

  function handleInputChange(event){
    const name = event.target.name
    const value = event.target.value 
    const checked = event.target.checked 
    const type = event.target.type 

    setData((data) => {
      return{
        ...data,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handlePrintResult(){
    return(
      <h2>Loged</h2>
    )
  }

  function handleResetForm(){
    setData({
      username: '',
      password: '',
      session: false,
    })
  }

  return(
    <div>
      <h1>Exercise</h1>
      <input name='username' value = {data.username} onChange={handleInputChange} />
      <input name='password' type='password' value={data.password} onChange={handleInputChange} />
      <input name='remember' type='checkbox' value={data.remember} onChange={handleInputChange} />
      <button onClick={handlePrintResult} disabled = {!data.username || !data.password}>Login</button> 
      <button onClick={handleResetForm}>Reset</button>
    </div>
  )
}