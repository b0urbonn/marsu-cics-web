import './App.css'

const programs = [
  {
    code: 'BSCS',
    name: 'Bachelor of Science in Computer Science',
    desc: 'Software development, algorithms, databases, and systems design.',
  },
  {
    code: 'BSIT',
    name: 'Bachelor of Science in Information Technology',
    desc: 'IT infrastructure, networks, web systems, and technical support.',
  },
  {
    code: 'BSIS',
    name: 'Bachelor of Science in Information Systems',
    desc: 'Business processes, enterprise systems, and data management.',
  },
  {
    code: 'DIT',
    name: 'Diploma in Information Technology',
    desc: 'A two-year technical program focused on practical IT skills.',
  },
  {
    code: 'ACT',
    name: 'Associate in Computer Technology',
    desc: 'Foundational computing skills for entry-level IT careers.',
  },
  {
    code: 'CAP',
    name: 'Computer Applications Program',
    desc: 'Short courses in office productivity and digital literacy.',
  },
]

const news = [
  {
    date: 'Nov 10, 2026',
    title: 'CICS students place in regional programming competition',
    tag: 'Achievement',
  },
  {
    date: 'Nov 5, 2026',
    title: 'New computer laboratory opens at Santa Cruz Campus',
    tag: 'Campus',
  },
  {
    date: 'Oct 28, 2026',
    title: 'Open enrollment for SY 2026–2027 now available',
    tag: 'Admissions',
  },
  {
    date: 'Oct 15, 2026',
    title: 'Guest lecture: AI in industry by industry practitioners',
    tag: 'Academics',
  },
]

const quickLinks = [
  { name: 'AIMS', url: 'https://aims.marsu-cics.com' },
  { name: 'Edocs', url: 'https://edocs.marsu-cics.com' },
  { name: 'ESIMS', url: 'https://esims.marsu-cics.com' },
  { name: 'PMS', url: 'https://pms.marsu-cics.com' },
  { name: 'REMMS', url: 'https://remms.marsu-cics.com' },
]

const stats = [
  { value: '500+', label: 'Enrolled Students' },
  { value: '25+', label: 'Faculty Members' },
  { value: '6', label: 'Degree & Diploma Programs' },
  { value: '10+', label: 'Years of Service' },
]

function App() {
  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">CICS</span>
            <span className="brand-text">
              College of Information &amp; Computing Sciences
              <small>Santa Cruz Campus</small>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">MARSU · Santa Cruz Campus</p>
          <h1>College of Information<br />&amp; Computing Sciences</h1>
          <p className="hero-sub">
            Shaping future technologists, developers, and information
            professionals through quality education and hands-on training.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#admissions">
              Apply Now
            </a>
            <a className="btn btn-ghost" href="#programs">
              View Programs
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-inner">
          <p className="eyebrow">About Us</p>
          <h2>Educating the digital workforce of tomorrow</h2>
          <div className="about-grid">
            <div>
              <h3>Our History</h3>
              <p>
                Founded to serve the growing demand for computing professionals
                in the region, the College of Information and Computing
                Sciences has grown into a center of excellence for IT education.
                Our Santa Cruz Campus continues this legacy with modern
                facilities and industry-aligned curricula.
              </p>
            </div>
            <div>
              <h3>Mission &amp; Vision</h3>
              <p>
                <strong>Mission:</strong> To provide accessible, quality
                education in information and computing sciences that produces
                competent and ethical professionals.
              </p>
              <p>
                <strong>Vision:</strong> To be a leading college of computing
                sciences recognized for innovation, service, and student
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="programs">
        <div className="section-inner">
          <p className="eyebrow">Academics</p>
          <h2>Programs Offered</h2>
          <p className="section-sub">
            Choose a path that matches your career goals — from short courses
            to bachelor's degrees.
          </p>
          <div className="program-grid">
            {programs.map((p) => (
              <article key={p.code} className="program-card">
                <span className="program-code">{p.code}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="admissions">
        <div className="section-inner narrow">
          <p className="eyebrow">Admissions</p>
          <h2>How to Enroll</h2>
          <ol className="steps">
            <li>
              <strong>Submit an application.</strong> Fill out the online
              application form or visit the admissions office.
            </li>
            <li>
              <strong>Submit requirements.</strong> Prepare your birth
              certificate, report card / transcript, and two 2×2 ID photos.
            </li>
            <li>
              <strong>Take the entrance assessment.</strong> A scheduling
              notice will be sent to your registered email and phone number.
            </li>
            <li>
              <strong>Complete enrollment.</strong> Once accepted, settle the
              downpayment and claim your class schedule.
            </li>
          </ol>
          <p className="note">
            For details, visit the <a href="https://esims.marsu-cics.com">ESIMS portal</a> or
            contact the registrar's office.
          </p>
        </div>
      </section>

      <section className="section section-alt" id="news">
        <div className="section-inner">
          <p className="eyebrow">Stay Updated</p>
          <h2>News &amp; Events</h2>
          <div className="news-grid">
            {news.map((n) => (
              <article key={n.title} className="news-card">
                <span className="news-tag">{n.tag}</span>
                <time>{n.date}</time>
                <h3>{n.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apps">
        <div className="section-inner">
          <p className="eyebrow">Campus Systems</p>
          <h2>Student &amp; Faculty Portals</h2>
          <p className="section-sub">
            Quick access to our campus applications.
          </p>
          <div className="apps-grid">
            {quickLinks.map((a) => (
              <a key={a.url} className="app-chip" href={a.url}>
                {a.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta" id="contact">
        <div className="section-inner narrow center">
          <h2>Visit Us</h2>
          <p>
            College of Information and Computing Sciences
            <br />
            Santa Cruz Campus, MARSU
          </p>
          <p className="muted">
            Email: info@marsu-cics.com · Mon–Fri, 8:00 AM – 5:00 PM
          </p>
          <a className="btn btn-primary" href="mailto:info@marsu-cics.com">
            Contact Us
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} College of Information and Computing
          Sciences — Santa Cruz Campus · marsu-cics.com
        </p>
      </footer>
    </div>
  )
}

export default App
