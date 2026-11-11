import './App.css'

const programs = [
  {
    code: 'BSIS',
    name: 'BS Information Systems',
    desc: 'Business processes, enterprise systems, databases, and data management.',
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
  { value: '1', label: 'Degree Program' },
  { value: '10+', label: 'Years of Service' },
]

const steps = [
  {
    title: 'Submit an application',
    desc: 'Fill out the online application form or visit the admissions office.',
  },
  {
    title: 'Submit requirements',
    desc: 'Birth certificate, report card / transcript, and two 2×2 ID photos.',
  },
  {
    title: 'Entrance assessment',
    desc: 'A scheduling notice will be sent to your registered email and phone.',
  },
  {
    title: 'Complete enrollment',
    desc: 'Once accepted, settle the downpayment and claim your schedule.',
  },
]

function App() {
  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">CICS</span>
            <span className="brand-name">Santa Cruz Campus</span>
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
        <div className="container">
          <p className="eyebrow">College of Information &amp; Computing Sciences</p>
          <h1>Educating the digital workforce of tomorrow</h1>
          <p className="hero-sub">
            Quality education and hands-on training in information and
            computing sciences at the Santa Cruz Campus.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#admissions">
              Apply Now
            </a>
            <a className="btn btn-outline" href="#programs">
              View Programs
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Our College</h2>
          </div>
          <div className="about-grid">
            <div>
              <h3>History</h3>
              <p>
                Founded to serve the growing demand for computing professionals
                in the region, the College of Information and Computing
                Sciences has grown into a center of excellence for IT
                education. Our Santa Cruz Campus continues this legacy with
                modern facilities and industry-aligned curricula.
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
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Academics</p>
            <h2>Programs Offered</h2>
            <p className="section-sub">
              Our flagship degree program at the Santa Cruz Campus.
            </p>
          </div>
          <div className="program-list">
            {programs.map((p) => (
              <div key={p.code} className="program-row">
                <span className="program-code">{p.code}</span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="admissions">
        <div className="container container-narrow">
          <div className="section-head">
            <p className="eyebrow">Admissions</p>
            <h2>How to Enroll</h2>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.title} className="step">
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="note">
            For details, visit the{' '}
            <a href="https://esims.marsu-cics.com">ESIMS portal</a> or contact
            the registrar's office.
          </p>
        </div>
      </section>

      <section className="section section-alt" id="news">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Stay Updated</p>
            <h2>News &amp; Events</h2>
          </div>
          <div className="news-list">
            {news.map((n) => (
              <article key={n.title} className="news-row">
                <span className="news-tag">{n.tag}</span>
                <time>{n.date}</time>
                <h3>{n.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apps">
        <div className="container container-narrow">
          <div className="section-head">
            <p className="eyebrow">Campus Systems</p>
            <h2>Student &amp; Faculty Portals</h2>
          </div>
          <div className="apps-row">
            {quickLinks.map((a) => (
              <a key={a.url} className="app-link" href={a.url}>
                {a.name}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta" id="contact">
        <div className="container container-narrow center">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Visit Us</h2>
          </div>
          <p>
            College of Information and Computing Sciences
            <br />
            Santa Cruz Campus, MARSU
          </p>
          <p className="muted">
            info@marsu-cics.com · Mon–Fri, 8:00 AM – 5:00 PM
          </p>
          <a className="btn btn-primary" href="mailto:info@marsu-cics.com">
            Contact Us
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} College of Information and Computing
            Sciences — Santa Cruz Campus
          </span>
          <span>marsu-cics.com</span>
        </div>
      </footer>
    </div>
  )
}

export default App
