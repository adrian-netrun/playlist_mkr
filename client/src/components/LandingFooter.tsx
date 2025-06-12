import '../styles/Footer_landing.css'

function LandingFooter() {
  return (
    <div className="landing__footer__">
      <div className='landing__footer__about__head'>
        <h4>About</h4>
          <p>
          Built to demonstrate my understanding of frontend web technologies and my ability to use external APIs
          </p>
      </div>
      <div className='landing__footer__tech__head'>
        <h4>Tech Used</h4>
        <p>Fetch decent icons later</p>
      </div>
      <div className='landing__footer__portfolio__head'>
        <h4>Author</h4>
          <p>
            Adrian Viljoen  - <a href="https://github.com/adrian-netrun"> my portfolio</a>
          </p>
      </div>
    </div>
  )
}

export default LandingFooter