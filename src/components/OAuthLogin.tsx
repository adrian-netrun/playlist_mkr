import React from 'react'
import '../styles/OAuthLogin.sass'

export default function OAuthLogin() {
  return (
    <section className='OAuthLogin-cont' >
      <div className='btn-login-grp'>
        <img src="src/assets/google-light-small.png" height={45} width={45}/><a href="http://google.com">Sign in with Google</a>
      </div>
      <div className='btn-login-grp'>
        <img src="src/assets/apple-light-small.png" height={45} width={45}/><a href="http://apple.com">Sign in with Apple</a>
      </div>
      <div className='btn-login-grp'>
        <img src="src/assets/github-light-small.png" height={45} width={45}/><a href="http://github.com">Sign in with Github</a>
      </div>
    </section>
  )
}