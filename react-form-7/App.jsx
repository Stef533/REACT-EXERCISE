export function MyNewForm() {
    function handleFormSubmit(event) {
      event.preventDefault();
  
      const formData = new FormData(event.target);
  
      const username = formData.get('username');
      const password = formData.get('password');
      const remember = formData.get('remember');
  
      const data = {
        username,
        password,
        remember: remember === 'on', 
      };
  
      console.log(data);
    }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <h1>Uncontrolled form exercise</h1>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
  
  
  // Vantaggi nell'uso del formData API possono essere:
  // 1. una raccolta più rapida e semplice dei dati di un modulo
  // 2. la capacità di adattarsi al moduso del FormData, in modo che se apportiamo delle modifiche non bisogno modificare manualmente la logica per la raccolta dei dati.
  // 3. Ottimo funzionamento con controlli di HTML con caselle di controllo, pulsanti e altro.
  
  // Svantaggi:
  // 1. La struttura dei dati non è tipizzata
  // 2. Possibili problemi di sicurezza, ad esempio l'inivio involontario di dati sensibili.
  // 3. Problemi nella compatibbilità con vecchi browser