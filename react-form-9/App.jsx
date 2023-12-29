import { useEffect } from 'react'
import { useRef, useState } from 'react'

function createData(){
  return{
    username: '',
    password: '',
    remember: false,
  }
}

export function MyForm(){
  const [data, setData] = useState(createData())

  const mountedRef = useRef(false)

  const inputRef = useRef(null)

  useEffect(() => {
    if (!mountedRef.current){
      mountedRef.current = true
      console.log('MOuntinf for the first time')
    } else {
      console.log('Mount again for debug purposes')
    }

    inputRef.current?.focus()
  }, [])

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

  function handleResetForm(){
    setData({
      username: '',
      password: '',
      remember: false,
    })
  }

  function handleLoginFormSubmit(event){
    event.preventDefault()
    console.log(data)
  }
  console.log(inputRef)

  return(
    <form onSubmit={handleLoginFormSubmit}>
      <h1>My Form</h1>
      <input ref = {inputRef} name = 'username' value = {data.username} onChange = {handleInputChange} />
      <input name = 'password' type = 'password' value = {data.password} onChange = {handleInputChange} />
      <input name = 'remember' type = 'checkbox' value = {data.remember} onChange = {handleInputChange} />
      <button disabled = {!data.username || !data.password}>Login</button>
      <button onClick={handleResetForm}>Reset</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  )
}