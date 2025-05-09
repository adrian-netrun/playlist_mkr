import '../styles/Login.css'

function Login() {
  return (
    <section className='login__container' >
        <button className='login__container__btn__grp'><img src="src/assets/google-light-small.png" /><p>Sign in with Google</p></button>
        <button className='login__container__btn__grp'><img src="src/assets/apple-dark-small.png" /><p>Sign in with Apple</p></button>
    </section>
  )
}

export default Login