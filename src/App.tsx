import './App.css'

const apps = [
  { name: 'AIMS', url: 'https://aims.marsu-cics.com', desc: 'Academic Information Management System' },
  { name: 'Edocs', url: 'https://edocs.marsu-cics.com', desc: 'Document management & OCR' },
  { name: 'ESIMS', url: 'https://esims.marsu-cics.com', desc: 'Enrollment / Student Information System' },
  { name: 'Gym', url: 'https://gym.marsu-cics.com', desc: 'Gym & fitness management' },
  { name: 'Lakbay', url: 'https://lakbay.marsu-cics.com', desc: 'Field trips & excursions' },
  { name: 'PMS', url: 'https://pms.marsu-cics.com', desc: 'Property / Project Management' },
  { name: 'REMMS', url: 'https://remms.marsu-cics.com', desc: 'Resource & Equipment Management' },
  { name: 'Student Care', url: 'https://student-care.marsu-cics.com', desc: 'Student welfare services' },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">marsu-cics.com</p>
        <h1>MARSU CICS</h1>
        <p className="tagline">
          Campus systems hub — one portal for the school's applications.
        </p>
      </header>

      <main className="grid">
        {apps.map((app) => (
          <a key={app.url} className="card" href={app.url}>
            <h2>{app.name}</h2>
            <p>{app.desc}</p>
            <span className="host">{app.url.replace('https://', '')}</span>
          </a>
        ))}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} marsu-cics.com</p>
      </footer>
    </div>
  )
}

export default App
