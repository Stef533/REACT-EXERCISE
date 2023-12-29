export function MyNewForm(){
    function handleFormSubmit(event){
      event.preventDefault()
  
      const username = event.target.elements.namedItem('username').value
      const password = event.target.elements.namedItem('password').value
      const remember = event.target.elements.namedItem('remember').checked
  
      const data = {
        username,
        password,
        remember
      }
      
      console.log(data)
    }
  
    return(
      <form onSubmit={ handleFormSubmit }>
      <h1>Uncontroller form exercise</h1>
      <input name = 'username' />
      <input name = 'password' type="password" />
      <input name = 'remember' type="checkbox"/>
      <button>Login</button>
      <button type="reset"> Reset </button>
      </form>
    )
  }