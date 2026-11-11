import './App.css'

const university = 'https://marsu.edu.ph/school-of-information-and-computing-sciences/'
const logo = 'https://www.marsu.edu.ph/assets/logo-CFyGvArd.png'

function App() {
  return (
    <div className="site" id="top">
      <div className="topbar"><div className="wrap topbar-inner"><span>MARINDUQUE STATE UNIVERSITY</span><span>Santa Cruz, Marinduque &nbsp; / &nbsp; Philippines</span></div></div>
      <header className="header">
        <div className="wrap nav">
          <a href="#top" className="brand" aria-label="CICS Santa Cruz home"><img src={logo} alt="Marinduque State University seal" /><span><strong>CICS</strong><small>SANTA CRUZ CAMPUS</small></span></a>
          <nav aria-label="Main navigation"><a href="#about">About</a><a href="#program">Academics</a><a href="#community">Our community</a><a href="#contact">Contact</a></nav>
          <a className="nav-cta" href="https://marsu.edu.ph/" target="_blank" rel="noreferrer">Visit MarSU <span>↗</span></a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy"><div className="kicker"><span className="dot" /> MARINDUQUE STATE UNIVERSITY <span className="slash">/</span> SANTA CRUZ</div><h1>Ideas grow<br /> <em>here.</em></h1><p className="hero-lead">A place for curious minds and future makers.</p><p className="hero-description">Discover the College of Information and Computing Sciences at MarSU Santa Cruz Campus.</p><div className="hero-actions"><a className="button dark" href="#program">Explore the program <span>↗</span></a><a className="text-link" href="#about">Get to know CICS <span>↓</span></a></div></div>
            <div className="hero-art" aria-label="CICS Santa Cruz graphic"><div className="art-top"><span>THE FUTURE IS<br />WHAT WE MAKE.</span><span>01 / 03</span></div><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-center"><span>LEARN</span><strong>CREATE<br />CONNECT<span>.</span></strong><small>INFORMATION &amp; COMPUTING SCIENCES</small></div><div className="art-bottom"><span>ROOTED IN MARINDUQUE</span><span>✳</span><span>OPEN TO THE WORLD</span></div></div>
          </div>
          <div className="wrap hero-foot"><span>SCROLL TO EXPLORE &nbsp; ↓</span><span>LEARNING TODAY. BUILDING TOMORROW.</span></div>
        </section>
        <section className="intro section" id="about"><div className="wrap intro-grid"><div><p className="section-label"><span>01</span> ABOUT THE COLLEGE</p><h2>Technology with<br /><em>purpose.</em></h2></div><div className="intro-copy"><p className="big-copy">Good ideas can change communities. We’re here to help them grow.</p><p>The College of Information and Computing Sciences brings together education, research, and community engagement to help develop capable computing professionals and IT-enabled individuals.</p><p>Established in 1998, the college has grown alongside the needs of Marinduque and the digital world. At Santa Cruz, that story continues through the Bachelor of Science in Information Systems.</p><a className="inline-link" href={university} target="_blank" rel="noreferrer">More about CICS at MarSU <span>↗</span></a></div></div></section>
        <section className="program section" id="program"><div className="wrap"><div className="program-head"><div><p className="section-label"><span>02</span> STUDY AT SANTA CRUZ</p><h2>Make your next<br /><em>move matter.</em></h2></div><p>Explore the intersection of people, information, and technology.</p></div><div className="program-card"><div className="program-index">01 <span>/</span> UNDERGRADUATE PROGRAM</div><div className="program-main"><div><span className="program-pill">BSIS</span><h3>Bachelor of Science in<br />Information Systems</h3><p>Learn to think about how information systems support organizations, solve problems, and connect people with technology.</p></div><div className="program-symbol" aria-hidden="true">✳</div></div><div className="program-bottom"><span>SANTA CRUZ CAMPUS</span><a href={university} target="_blank" rel="noreferrer">Explore CICS <span>↗</span></a></div></div></div></section>
        <section className="community section" id="community"><div className="wrap community-grid"><div><p className="section-label"><span>03</span> BEYOND THE CLASSROOM</p><h2>Learn. Create.<br /><em>Give back.</em></h2><p className="community-lead">Education is only the beginning. CICS connects learning with research and service to the wider community.</p></div><div className="pillars"><div><span>01</span><div><h3>Education</h3><p>Build a foundation in information and computing sciences.</p></div><b>↗</b></div><div><span>02</span><div><h3>Research</h3><p>Ask meaningful questions and explore new ideas.</p></div><b>↗</b></div><div><span>03</span><div><h3>Extension</h3><p>Put knowledge to work in service of communities.</p></div><b>↗</b></div></div></div></section>
        <section className="contact" id="contact"><div className="wrap contact-grid"><div><p className="section-label"><span>04</span> TAKE THE NEXT STEP</p><h2>Let’s build<br /><em>what’s next.</em></h2></div><div><p>Interested in studying with us? Get in touch with the college or visit the university website for current admissions information.</p><a className="button light" href="mailto:cicssc.bsis@gmail.com">Contact the college <span>↗</span></a><div className="contact-details"><div><small>EMAIL</small><a href="mailto:cicssc.bsis@gmail.com">cicssc.bsis@gmail.com</a></div><div><small>FACEBOOK</small><a href="https://www.facebook.com/CICSSantaCruz" target="_blank" rel="noreferrer">facebook.com/CICSSantaCruz ↗</a></div><div><small>FIND US</small><span>Santa Cruz Campus<br />Marinduque, Philippines</span></div></div></div></div></section>
      </main>
      <footer><div className="wrap footer-grid"><a href="#top" className="footer-brand"><img src={logo} alt="" /><span><strong>CICS</strong><small>SANTA CRUZ CAMPUS</small></span></a><p>College of Information and<br />Computing Sciences</p><div><a href="https://marsu.edu.ph/" target="_blank" rel="noreferrer">Marinduque State University ↗</a><a href="https://www.facebook.com/CICSSantaCruz" target="_blank" rel="noreferrer">Facebook ↗</a><small>© {new Date().getFullYear()} CICS Santa Cruz</small></div></div></footer>
    </div>
  )
}
export default App
