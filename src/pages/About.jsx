import Card from '../components/ui/Card.jsx'
import team1 from '../assets/team-1.svg'
import team2 from '../assets/team-2.svg'
import team3 from '../assets/team-3.svg'

const values = [
  {
    title: 'Mission',
    description:
      'Help teams build modern products that look beautiful, feel effortless, and stay reliable at scale.',
  },
  {
    title: 'Vision',
    description:
      'Become the go-to partner for design-forward engineering—where craft, safety, and speed come together.',
  },
  {
    title: 'Values',
    description:
      'Clarity in communication, integrity in delivery, and continuous improvement in every sprint.',
  },
]

const team = [
  { name: 'Tech Lead', img: team3, bio: 'Architecture, performance, and maintainable systems.' },
  { name: 'Design Partner', img: team2, bio: 'UX strategy, polished UI, and brand-consistent experiences.' },
  { name: 'Delivery Engineer', img: team1, bio: 'Reliable deployments, QA discipline, and iteration loops.' },
]

export default function About() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div>
            <div className="section-kicker">About</div>
            <div className="section-title">We build products teams love to ship</div>
          </div>
          <div className="muted" style={{ marginTop: 14, lineHeight: 1.7, maxWidth: 860 }}>
            Tech Panjab is a modern web engineering studio focused on high-quality interfaces and production-ready
            delivery. We combine design clarity with engineering discipline—so every release is dependable and
            delightful.
          </div>

          <div style={{ marginTop: 22 }} className="grid-3">
            {values.map((v, idx) => (
              <div key={v.title} className="reveal" style={{ animationDelay: `${idx * 120 + 40}ms` }}>
                <Card>
                  <div className="chip">{v.title}</div>
                  <div style={{ marginTop: 12, fontWeight: 900, fontSize: 18 }}>{v.title}</div>
                  <div className="muted" style={{ marginTop: 8, lineHeight: 1.7, fontSize: 14 }}>
                    {v.description}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <div className="section-head">
              <div>
                <div className="section-kicker">Team</div>
                <div className="section-title">Small team, big craft</div>
              </div>
              <div className="section-lead">
                We bring design, engineering, and delivery skills under one roof—so your project stays coherent.
              </div>
            </div>

            <div style={{ marginTop: 18 }} className="grid-3">
              {team.map((m, idx) => (
                <div key={m.name} className="reveal" style={{ animationDelay: `${idx * 120 + 90}ms` }}>
                  <Card>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 12,
                      }}
                    >
                      <img
                        src={m.img}
                        alt={`${m.name} portrait`}
                        style={{ width: 130, height: 130, borderRadius: 36, border: '1px solid rgba(255,255,255,0.12)' }}
                      />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 950 }}>{m.name}</div>
                      <div className="muted" style={{ marginTop: 8, lineHeight: 1.7, fontSize: 14 }}>
                        {m.bio}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
