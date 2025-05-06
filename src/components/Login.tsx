import '../styles/Login.css'

function Login() {
  return (
    <section className='login__container' >
      <div className='login__container__btn__grp'>
        <button><img src="src/assets/google-light-small.png" height={45} width={45}/><p>Sign in with Google</p></button>
      </div>
      <div className='login__container__btn__grp'>
        <button><img src="src/assets/apple-light-small.png" height={45} width={45}/><p>Sign in with Apple</p></button>
      </div>
      <div className='login__container__btn__grp'>
        <button><img src="src/assets/github-light-small.png" height={45} width={45}/><p>Sign in with Github</p></button>
      </div>
    </section>
  )
}

export default Login