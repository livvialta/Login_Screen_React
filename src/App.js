import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-form-wrap">

          <form className='login-form'>
            <img src='https://mentorprofissional.com.br/wp-content/uploads/2018/12/senai-1.png' width="300" height="100"></img>
    
            <input type='email' name='email' placeholder='Email' required/>
            <input type='password' name='password' placeholder='Senha' required/>

            <button type='submit' className='btn-login'>Entrar</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;



