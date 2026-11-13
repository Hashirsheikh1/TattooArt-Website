import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Search, MapPin, Instagram, SlidersHorizontal, Clock3, Users, Heart, MessageCircle, Plus, ChevronDown, Sun, Moon } from 'lucide-react'

const works = [
  { id: 1, title: 'Traditional piece, Upper arm', style: 'Traditional', artist: 'Ada Kirchner', placement: 'Upper arm', condition: 'Healed', image: null },
  { id: 2, title: 'Traditional piece, Full sleeve', style: 'Traditional', artist: 'Juno Alvarez', placement: 'Full sleeve', condition: 'Fresh', image: null },
  { id: 3, title: 'Neo-Traditional piece, Full sleeve', style: 'Neo-Traditional', artist: 'Ada Kirchner', placement: 'Full sleeve', condition: 'Healed', image: null },
  { id: 4, title: 'Traditional piece, Hand', style: 'Traditional', artist: 'Ada Kirchner', placement: 'Hand', condition: 'Healed', image: null },
  { id: 5, title: 'Neo-Traditional piece, Hand', style: 'Neo-Traditional', artist: 'Ines Varga', placement: 'Hand', condition: 'Fresh', image: null },
  { id: 6, title: 'Realism piece, Hand', style: 'Realism', artist: 'Tomas Reyes', placement: 'Hand', condition: 'Healed', image: null },
  { id: 7, title: 'Neo-Traditional piece, Chest', style: 'Neo-Traditional', artist: 'Anouk Peeters', placement: 'Chest', condition: 'Healed', image: null },
  { id: 8, title: 'Realism piece, Chest', style: 'Realism', artist: 'Delia Fontaine', placement: 'Chest', condition: 'Fresh', image: null },
  { id: 9, title: 'Portrait piece, Chest', style: 'Portrait', artist: 'Delia Fontaine', placement: 'Chest', condition: 'Healed', image: null },
  { id: 10, title: 'Realism piece, Back', style: 'Realism', artist: 'Dov Sharman', placement: 'Back', condition: 'Healed', image: null },
  { id: 11, title: 'Portrait piece, Back', style: 'Portrait', artist: 'Pilar Otxoa', placement: 'Back', condition: 'Fresh', image: null },
  { id: 12, title: 'Blackwork piece, Back', style: 'Blackwork', artist: 'Ada Kirchner', placement: 'Back', condition: 'Healed', image: null },
  { id: 13, title: 'Portrait piece, Ribs', style: 'Portrait', artist: 'Delia Fontaine', placement: 'Ribs', condition: 'Healed', image: null },
  { id: 14, title: 'Blackwork piece, Ribs', style: 'Blackwork', artist: 'Mira Halvorsen', placement: 'Ribs', condition: 'Fresh', image: null },
  { id: 15, title: 'Dotwork piece, Ribs', style: 'Dotwork', artist: 'Mira Halvorsen', placement: 'Ribs', condition: 'Healed', image: null },
  { id: 16, title: 'Blackwork piece, Stomach', style: 'Blackwork', artist: 'Bram Ostler', placement: 'Stomach', condition: 'Healed', image: null },
  { id: 17, title: 'Dotwork piece, Stomach', style: 'Dotwork', artist: 'Nell Farraday', placement: 'Stomach', condition: 'Fresh', image: null },
  { id: 18, title: 'Japanese piece, Stomach', style: 'Japanese', artist: 'Juno Alvarez', placement: 'Stomach', condition: 'Healed', image: null },
  { id: 19, title: 'Dotwork piece, Thigh', style: 'Dotwork', artist: 'Mira Halvorsen', placement: 'Thigh', condition: 'Healed', image: null },
  { id: 20, title: 'Japanese piece, Thigh', style: 'Japanese', artist: 'Juno Alvarez', placement: 'Thigh', condition: 'Fresh', image: null },
]
const styles = ['Traditional', 'Neo-Traditional', 'Realism', 'Portrait', 'Blackwork', 'Dotwork', 'Japanese', 'Fine Line', 'Geometric', 'Ornamental', 'Illustrative', 'Watercolour', 'Script', 'Lettering', 'Chicano', 'Trash Polka', 'New School', 'Minimalist', 'Biomechanical', 'Tribal']
const artists = [
  { name: 'Ada Kirchner', specialty: 'Traditional specialist, Manchester', styles: ['Traditional', 'Neo-Traditional', 'Blackwork'], services: 'Appointments · Walk-ins', city: 'Manchester, England, GB', studio: 'Ironhand Tattoo Collective', rate: '£85–125/hr', booking: true, image: null },
  { name: 'Sena Okafor', specialty: 'Fine Line specialist, Bristol', styles: ['Fine Line', 'Minimalist'], services: 'Appointments', city: 'Bristol, England, GB', studio: 'Quietwater Studio', rate: '£115–155/hr', booking: true, image: null },
  { name: 'Juno Alvarez', specialty: 'Japanese specialist, Glasgow', styles: ['Traditional', 'Japanese'], services: 'Appointments', city: 'Glasgow, Scotland, GB', studio: 'Saltmarket Tattoo', rate: '£100–140/hr', booking: true, image: null },
  { name: 'Mira Halvorsen', specialty: 'Geometric specialist, Bristol', styles: ['Blackwork', 'Dotwork', 'Geometric'], services: 'Appointments · Home visits', city: 'Bristol, England, GB', studio: 'Quietwater Studio', rate: '£130–170/hr', booking: true, image: null },
  { name: 'Ines Varga', specialty: 'Neo-Traditional specialist, Manchester', styles: ['Neo-Traditional', 'Illustrative'], services: 'Appointments', city: 'Manchester, England, GB', studio: 'Ironhand Tattoo Collective', rate: '£115–155/hr', booking: true, image: null },
  { name: 'Tomas Reyes', specialty: 'Realism specialist, Leeds', styles: ['Realism', 'Illustrative'], services: 'Appointments', city: 'Leeds, England, GB', studio: 'Nightshift Ink', rate: '£145–185/hr', booking: true, image: null },
  { name: 'Nell Farraday', specialty: 'Dotwork specialist, Dublin', styles: ['Dotwork', 'Ornamental'], services: 'Appointments', city: 'Dublin, Leinster, IE', studio: 'Harbourline Tattoo', rate: '£130–170/hr', booking: true, image: null },
  { name: 'Dov Sharman', specialty: 'Biomechanical specialist, Leeds', styles: ['Realism', 'Biomechanical'], services: 'Appointments', city: 'Leeds, England, GB', studio: 'Nightshift Ink', rate: '£85–125/hr', booking: true, image: null },
  { name: 'Kit Marlowe', specialty: 'Ornamental specialist, Dublin', styles: ['Fine Line', 'Ornamental'], services: 'Appointments · Walk-ins', city: 'Dublin, Leinster, IE', studio: 'Harbourline Tattoo', rate: '£145–185/hr', booking: true, image: null },
  { name: 'Sasha Renko', specialty: 'Watercolour specialist, London', styles: ['Illustrative', 'Watercolour'], services: 'Appointments · Home visits', city: 'London, England, GB', studio: 'Lantern Row Tattoo', rate: '£160–200/hr', booking: true, image: null },
  { name: 'Rosa Linden', specialty: 'Script specialist, Dublin', styles: ['Fine Line', 'Script'], services: 'Appointments · Home visits', city: 'Dublin, Leinster, IE', studio: 'Harbourline Tattoo', rate: '£130–170/hr', booking: true, image: null },
  { name: 'Rue Delacroix', specialty: 'Lettering specialist, Leeds', styles: ['Script', 'Lettering'], services: 'Appointments · Walk-ins', city: 'Leeds, England, GB', studio: 'Nightshift Ink', rate: '£85–125/hr', booking: true, image: null },
]
const studios = [
  { name: 'Ironhand Tattoo Collective', description: 'Six chairs, walk-ins Thursday to Saturday', services: 'Appointments · Walk-ins', city: 'Manchester, England, GB', hours: '11:00 – 20:00', artists: 3, image: works[0].image },
  { name: 'Quietwater Studio', description: 'Private, appointment only', services: 'Appointments', city: 'Bristol, England, GB', hours: '10:00 – 16:00', artists: 3, image: works[2].image },
  { name: 'Lantern Row Tattoo', description: 'Custom work by consultation', services: 'Appointments · Home visits', city: 'London, England, GB', hours: '11:00 – 20:00', artists: 4, image: works[6].image },
  { name: 'Nightshift Ink', description: 'Open late, seven days', services: 'Appointments · Walk-ins', city: 'Leeds, England, GB', hours: '12:00 – 23:00', artists: 4, image: works[8].image },
  { name: 'Saltmarket Tattoo', description: 'Traditional and Japanese, east end of the city', services: 'Appointments · Walk-ins', city: 'Glasgow, Scotland, GB', hours: '11:00 – 20:00', artists: 3, image: works[1].image },
  { name: 'Harbourline Tattoo', description: 'Fine line and ornamental, by the docks', services: 'Appointments · Walk-ins', city: 'Dublin, Leinster, IE', hours: '11:00 – 20:00', artists: 3, image: works[7].image },
]

function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  // Internal navigation only; page-enter animations are applied to the content area.
  const navigate = (to) => {
    if (to === window.location.pathname) return
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  return [path, navigate]
}

function Link({ to, navigate, children, className = '', onClick, ...props }) {
  return <a href={to} className={className} onClick={e => { onClick?.(e); if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) { e.preventDefault(); navigate(to) } }} {...props}>{children}</a>
}

// Empty media area. Add your own images here later if needed; no placeholder text is displayed.
function ImageSlot({ label = '' }) {
  return <div className="image-slot" aria-hidden="true" />
}

function Header({ navigate, theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const links = [['Gallery', '/gallery'], ['Artists', '/artists'], ['Shops', '/shops'], ['Social', '/social']]
  return <header className="site-header"><div className="nav-inner"><Link to="/" navigate={navigate} className="brand brand-original" aria-label="Tattoo Hub">Tattoo Hub</Link><nav className="desktop-nav">{links.map(([label, to]) => <Link key={to} to={to} navigate={navigate}>{label}</Link>)}</nav><div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button><Link to="/sign-in" navigate={navigate} className="sign-in">Sign in</Link><Link to="/artists" navigate={navigate} className="nav-cta">Browse artists <ArrowUpRight size={14} /></Link></div><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-nav">{links.map(([label, to]) => <Link key={to} to={to} navigate={navigate} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></Link>)}<Link to="/sign-in" navigate={navigate} onClick={() => setOpen(false)}>Sign in <ArrowUpRight size={16} /></Link><button className="mobile-theme-toggle" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />} Switch to {theme === 'dark' ? 'light' : 'dark'} mode</button><Link to="/artists" navigate={navigate} onClick={() => setOpen(false)}>Browse artists <ArrowUpRight size={16} /></Link></div>}</header>
}

function Footer({ navigate }) {
  return <footer className="footer"><div className="footer-top"><div><Link to="/" navigate={navigate} className="brand footer-brand">Tattoo<span> Hub</span></Link><p>Find the artist whose work you actually want on your skin. Browse portfolios, compare prices, check real availability and book a session.</p></div><div className="footer-col"><b>Explore</b>{[['Gallery', '/gallery'], ['Tattoo Artists', '/artists'], ['Tattoo Shops', '/shops'], ['Social Hub', '/social']].map(([x, u]) => <Link key={u} to={u} navigate={navigate}>{x}</Link>)}</div><div className="footer-col"><b>Community</b><span className="footer-static">Groups</span><span className="footer-static">Promotions</span></div><div className="footer-col"><b>Company</b><span className="footer-static">About</span><span className="footer-static">Contact</span></div><div className="footer-col"><b>Legal</b><span className="footer-static">Privacy Policy</span><span className="footer-static">Terms &amp; Conditions</span><span className="footer-static">Cookie Policy</span></div></div><div className="footer-bottom"><span>© 2026 TattooHub. All rights reserved.</span><span>Tattooing is permanent. Always choose a licensed artist and follow their aftercare advice.</span></div></footer>
}

function PageIntro({ kicker, title, children, count }) {
  return <section className="page-intro"><div className="intro-copy"><p className="eyebrow">{kicker}</p><h1 className="display">{title}</h1>{children && <p className="intro-description">{children}</p>}</div>{count && <div className="intro-count">{count}</div>}</section>
}

function ArtworkCard({ item, index, navigate }) {
  return <Link to={`/work/${item.id}`} navigate={navigate} className="art-card-link" aria-label={`View details for ${item.title}`}>
    <article className={`art-card reveal-card ${index === 0 ? 'art-card-feature' : ''}`}>
      <div className="art-image"><ImageSlot label={item.title} /><span className="art-number">{String(item.id).padStart(2, '0')}</span><span className="art-view-cta">View artwork <ArrowUpRight size={14} /></span></div>
      <div className="art-meta"><div><p>{item.style} <span>·</span> {item.placement}</p><h3>{item.title}</h3></div><span className="artist-name">{item.artist}</span></div>
    </article>
  </Link>
}

function Home({ navigate }) {
  return <>
    <section className="home-hero original-hero"><div className="hero-photo"><img src="https://tattooart.io/storage/1/conversions/traditional-piece-upper-arm-traditional-0-full.jpg" alt="Traditional tattoo artwork" /></div><div className="hero-shade" /><div className="hero-content"><p className="eyebrow light hero-kicker">Artists · Studios · Original ink</p><h1 className="display">Find the artist<br />whose work you<br /><i>actually want</i><br />to wear.</h1><div className="hero-links"><Link to="/artists" navigate={navigate} className="button-light artist-explore-cta">Browse artists <ArrowUpRight size={16} /></Link><Link to="/gallery" navigate={navigate} className="text-link">Explore the gallery <ArrowUpRight size={15} /></Link></div></div><div className="hero-index"><span>Scroll to explore <span className="hero-index-line" /></span></div></section>
    <section className="home-work section-wrap"><div className="section-heading reveal"><div><p className="eyebrow">Fresh ink</p><h2 className="display">Latest <i>work</i></h2></div><Link to="/gallery" navigate={navigate} className="under-link">See the full gallery <ArrowUpRight size={15} /></Link></div><div className="home-work-grid">{works.slice(0, 4).map((w, i) => <ArtworkCard key={w.id} item={w} index={i} navigate={navigate} />)}</div></section>
    <section className="home-directions"><div className="direction-head reveal"><p className="eyebrow">Find your next chapter</p><h2 className="display">Good art starts<br />with the <i>right people.</i></h2></div><div className="direction-grid">{[{ num: '01', title: 'Gallery', desc: 'Thousands of finished pieces, filterable by style, placement and artist. Find a reference before you find an artist.', to: '/gallery' }, { num: '02', title: 'Artists', desc: 'Full portfolios with pricing, studio location and a real calendar. Send a booking request in a couple of minutes.', to: '/artists' }, { num: '03', title: 'Shops', desc: 'Studios with opening hours, resident artists and directions, so you know exactly where you are going.', to: '/shops' }, { num: '04', title: 'Social', desc: 'Show healed work, ask for advice, join a group and catch flash drops and promotions before they go.', to: '/social' }].map(x => <Link key={x.num} to={x.to} navigate={navigate} className="direction-card"><div className="direction-img"><ImageSlot label={""} /><span>{x.num}</span></div><div className="direction-copy"><div><h3>{x.title}</h3><p>{x.desc}</p></div><ArrowUpRight /></div></Link>)}</div></section>
    <section className="home-note"><p className="eyebrow">Tattoo Hub</p><h2 className="display">Tattooing is<br /><i>permanent.</i></h2><p className="home-note-copy">Always choose a licensed artist and follow their aftercare advice.</p><Link to="/artists" navigate={navigate} className="button-dark">Browse artists <ArrowUpRight size={16} /></Link></section>
  </>
}

function GalleryPage({ navigate }) {
  const [query, setQuery] = useState('')
  const [style, setStyle] = useState('')
  const [placement, setPlacement] = useState('')
  const [healed, setHealed] = useState(false)
  const [city, setCity] = useState('')
  const [sort, setSort] = useState('recent')
  const filtered = useMemo(() => works.filter(w => (!style || w.style === style) && (!placement || w.placement === placement) && (!healed || w.condition === 'Healed') && (!city || artists.find(a => a.name === w.artist)?.city.startsWith(city)) && `${w.title} ${w.artist} ${w.style}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === 'popular' ? a.title.localeCompare(b.title) : b.id - a.id), [query, style, placement, healed, city, sort])
  return <main className="directory-page"><PageIntro kicker="The work" title={<>Gallery<span className="title-dot">.</span></>} /><div className="directory-tools"><label className="search-box"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by subject, artist or keyword" /></label><div className="filter-label"><SlidersHorizontal size={15} /> Filters</div></div><div className="filter-panel"><div className="filter-group"><span>Style</span><div className="chips">{styles.map(s => <button key={s} onClick={() => setStyle(style === s ? '' : s)} className={style === s ? 'active' : ''}>{s}</button>)}</div></div><div className="filter-selects"><label>Placement<select value={placement} onChange={e => setPlacement(e.target.value)}><option value="">Any placement</option>{['Upper arm', 'Full sleeve', 'Hand', 'Chest', 'Back', 'Ribs', 'Stomach', 'Thigh', 'Calf'].map(x => <option key={x}>{x}</option>)}</select></label><label>City<select value={city} onChange={e => setCity(e.target.value)}><option value="">Any city</option>{['Manchester', 'Bristol', 'Glasgow', 'Leeds', 'Dublin', 'London'].map(x => <option key={x}>{x}</option>)}</select></label><label className="check-label"><input type="checkbox" checked={healed} onChange={e => setHealed(e.target.checked)} /> <span>Healed work only</span><small>Shows how a piece settles once it has aged.</small></label></div></div><div className="results-bar"><span>{`${filtered.length} pieces`}</span><label>Sort <select value={sort} onChange={e => setSort(e.target.value)}><option value="recent">Recently added</option><option value="popular">Title A–Z</option></select></label></div><div className="gallery-grid">{filtered.map((w, i) => <ArtworkCard key={w.id} item={w} index={i} navigate={navigate} />)}</div>{filtered.length === 0 && <p className="empty-state">No pieces match those filters.</p>}</main>
}

function WorkDetailPage({ id, navigate }) {
  const work = works.find(item => String(item.id) === String(id))
  if (!work) return <main className="directory-page"><PageIntro kicker="The gallery" title={<>Work <i>not found.</i></>} /><Link to="/gallery" navigate={navigate} className="under-link">Back to gallery <ArrowRight size={15} /></Link></main>
  const artist = artists.find(person => person.name === work.artist)
  const related = works.filter(item => item.id !== work.id && (item.artist === work.artist || item.style === work.style)).slice(0, 3)
  return <main className="work-detail-page">
    <div className="work-detail-back"><Link to="/gallery" navigate={navigate}><ArrowDown size={14} /> Back to gallery</Link><span>ARTWORK / {String(work.id).padStart(2, '0')}</span></div>
    <section className="work-detail-hero"><div className="work-detail-image"><ImageSlot label={work.title} /></div><div className="work-detail-copy"><p className="eyebrow">{work.style} · {work.condition} work</p><h1 className="display">{work.title.split(',')[0]}<br /><i>{work.placement}.</i></h1><p className="work-detail-description">Explore this {work.style.toLowerCase()} tattoo, placed on the {work.placement.toLowerCase()}. Browse the artist's profile to discover more of their work and send a booking request.</p><div className="work-detail-facts"><div><small>Style</small><b>{work.style}</b></div><div><small>Placement</small><b>{work.placement}</b></div><div><small>Condition</small><b>{work.condition}</b></div><div><small>Artist</small><b>{work.artist}</b></div></div>{artist && <Link to={`/artists/${artist.name.toLowerCase().replace(/\s+/g, '-')}`} navigate={navigate} className="button-light">View artist & booking <ArrowUpRight size={15} /></Link>}</div></section>
    {related.length > 0 && <section className="work-related"><div className="section-heading"><div><p className="eyebrow">Keep exploring</p><h2 className="display">Related <i>work.</i></h2></div><Link to="/gallery" navigate={navigate} className="under-link">Full gallery <ArrowUpRight size={15} /></Link></div><div className="gallery-grid">{related.map((item, index) => <ArtworkCard key={item.id} item={item} index={index} navigate={navigate} />)}</div></section>}
  </main>
}

function ArtistsPage({ navigate }) {
  const [query, setQuery] = useState('')
  const [style, setStyle] = useState('')
  const [onlyBooking, setOnlyBooking] = useState(false)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [service, setService] = useState('')
  const [rate, setRate] = useState('')
  const [sort, setSort] = useState('featured')
  const filtered = artists.filter(a => (!style || a.styles.includes(style)) && (!onlyBooking || a.booking) && (!country || a.city.includes(country)) && (!city || a.city.startsWith(city)) && (!service || (service === 'Book an appointment' ? a.services.includes('Appointments') : service === 'Walk-in' ? a.services.includes('Walk-ins') : a.services.includes('Home visits'))) && (!rate || Number(a.rate.match(/£(\d+)/)?.[1] || 0) <= Number(rate)) && `${a.name} ${a.specialty} ${a.city} ${a.studio}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : 0)
  return <main className="directory-page"><PageIntro kicker="Directory" title={<>Tattoo<br /><i>artists.</i></>} count={`${artists.length} artists`} /><div className="directory-tools"><label className="search-box"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name, style or city" /></label><div className="filter-label"><SlidersHorizontal size={15} /> Filters</div></div><div className="filter-panel artist-filters"><div className="filter-selects"><label>Country<select value={country} onChange={e => setCountry(e.target.value)}><option value="">Any country</option><option>England</option><option>Scotland</option><option>Ireland</option></select></label><label>City<select value={city} onChange={e => setCity(e.target.value)}><option value="">Any city</option>{['Manchester', 'Bristol', 'Glasgow', 'Leeds', 'Dublin', 'London'].map(x => <option key={x}>{x}</option>)}</select></label><label>Service type<select value={service} onChange={e => setService(e.target.value)}><option value="">Any service</option><option>Book an appointment</option><option>Walk-in</option><option>Home service</option></select></label></div><div className="filter-group"><span>Style</span><p className="filter-help">Picking more than one narrows to artists who do all of them.</p><div className="chips">{styles.map(s => <button key={s} onClick={() => setStyle(style === s ? '' : s)} className={style === s ? 'active' : ''}>{s}</button>)}</div></div><div className="artist-filter-bottom"><label>Max hourly rate <input type="number" placeholder="Any" min="0" value={rate} onChange={e => setRate(e.target.value)} /></label><p>Artists who haven't published a rate are still shown.</p><label className="check-label compact"><input type="checkbox" checked={onlyBooking} onChange={e => setOnlyBooking(e.target.checked)} /> Only artists taking bookings</label></div></div><div className="results-bar"><span>{`${filtered.length} artists`}</span><label>Sort <select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="name">Name</option></select></label></div><div className="artist-grid">{filtered.map((a, i) => <Link to={`/artists/${a.name.toLowerCase().trim().replace(/\s+/g, '-')}`} navigate={navigate} className="artist-card artist-card-link reveal-card" key={a.name} aria-label={`View ${a.name}'s profile and booking calendar`}><div className="artist-photo"><ImageSlot label={"Tattoo artist in their studio"} /><span className="featured-tag">{i < 4 ? 'Featured' : ''}</span><span className="artist-profile-cta">View profile <ArrowUpRight size={14} /></span></div><div className="artist-card-body"><h2>{a.name}</h2><p className="artist-specialty">{a.specialty}</p><div className="chips artist-chips">{a.styles.map(s => <span key={s}>{s}</span>)}</div><p className="service-line">{a.services}</p><div className="artist-details"><div><small>Location</small><span><MapPin size={13} />{a.city}</span></div><div><small>Studio</small><span>{a.studio}</span></div></div><div className="artist-rate"><b>{a.rate}</b><span>Taking bookings</span></div><div className="artist-book-link">View profile &amp; request a booking <ArrowUpRight size={14} /></div></div></Link>)}</div></main>
}

function ArtistProfilePage({ slug, navigate }) {
  const artist = artists.find(a => a.name.toLowerCase().trim().replace(/\s+/g, '-') === slug);
  const [sent, setSent] = useState(false);
  const portfolio = works.filter(w => w.artist === artist?.name);
  if (!artist) return <main className="directory-page"><PageIntro kicker="Artist profile" title={<>Artist <i>not found.</i></>} /><Link to="/artists" navigate={navigate} className="under-link">Back to artists <ArrowRight size={15} /></Link></main>
  return <main className="artist-profile-page">
    <div className="artist-profile-back"><Link to="/artists" navigate={navigate}><ArrowDown size={14} /> All artists</Link><span>ARTIST PROFILE / {artist.name.toUpperCase()}</span></div>
    <section className="artist-profile-hero"><div className="artist-profile-image"><ImageSlot label={"Tattoo artist in their studio"} /></div><div className="artist-profile-intro"><p className="eyebrow">{artist.specialty}</p><h1 className="display">{artist.name.split(' ')[0]}<br /><i>{artist.name.split(' ').slice(1).join(' ')}.</i></h1><p className="artist-profile-summary">Custom tattoo work shaped around your idea, placement and personal style. Browse selected work, then send a booking request with your preferred time and a few details about your piece.</p><div className="artist-profile-tags">{artist.styles.map(style => <span key={style}>{style}</span>)}</div><div className="artist-profile-facts"><div><small>Location</small><b>{artist.city}</b></div><div><small>Studio</small><b>{artist.studio}</b></div><div><small>Hourly rate</small><b>{artist.rate}</b></div></div><a href="#request-booking" className="button-light">Request a booking <ArrowUpRight size={15} /></a></div></section>
    <section className="artist-profile-work"><div className="section-heading"><div><p className="eyebrow">Selected portfolio</p><h2 className="display">The <i>work.</i></h2></div><span>{portfolio.length} featured pieces</span></div><div className="artist-profile-gallery">{(portfolio.length ? portfolio : works.slice(0, 3)).map((work, i) => <article key={work.id} className="artist-profile-piece"><ImageSlot label={work.title} /><div><b>{work.style} piece</b><span>{work.placement} · {work.condition}</span></div></article>)}</div></section>
    <section className="artist-booking-section" id="request-booking"><div><p className="eyebrow">Start your piece</p><h2 className="display">Request a <i>booking.</i></h2><p>Pick a preferred date and time, describe your idea, and {artist.name} will review your request. Your request is not a confirmed appointment.</p><div className="booking-rate"><span>Hourly rate</span><b>{artist.rate}</b></div></div><form className="artist-booking-form" onSubmit={e => { e.preventDefault(); setSent(true) }}><label>Your name<input required name="name" placeholder="Full name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><div className="booking-form-row"><label>Preferred date<input required type="date" name="date" min={new Date().toISOString().slice(0, 10)} /></label><label>Preferred time<select required name="time" defaultValue=""><option value="" disabled>Select time</option><option>10:00 – 12:00</option><option>12:00 – 14:00</option><option>14:00 – 16:00</option><option>16:00 – 18:00</option></select></label></div><label>Tell us about your tattoo<textarea required name="details" rows="4" placeholder="Style, placement, approximate size and your idea..." /></label><button className="button-light" type="submit">Send booking request <ArrowUpRight size={15} /></button>{sent && <p className="booking-success" role="status">Your request details are ready. This demo does not send them to the artist yet.</p>}<small>Nothing is charged here. The artist will confirm or decline your request.</small></form></section>
  </main>
}

function ShopsPage() {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [service, setService] = useState('')
  const [sort, setSort] = useState('featured')
  const filtered = studios.filter(s => (!country || s.city.includes(country)) && (!city || s.city.startsWith(city)) && (!service || (service === 'Book an appointment' ? s.services.includes('Appointments') : service === 'Walk-in' ? s.services.includes('Walk-ins') : s.services.includes('Home visits'))) && `${s.name} ${s.city} ${s.description}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : 0)
  return <main className="directory-page"><PageIntro kicker="Directory" title={<>Tattoo<br /><i>shops.</i></>} count="6 studios" /><div className="directory-tools"><label className="search-box"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by studio name or city" /></label><div className="filter-label"><SlidersHorizontal size={15} /> Filters</div></div><div className="filter-panel"><div className="filter-selects"><label>Country<select value={country} onChange={e => setCountry(e.target.value)}><option value="">Any country</option><option>England</option><option>Scotland</option><option>Ireland</option></select></label><label>City<select value={city} onChange={e => setCity(e.target.value)}><option value="">Any city</option>{['Manchester', 'Bristol', 'London', 'Leeds', 'Glasgow', 'Dublin'].map(x => <option key={x}>{x}</option>)}</select></label><label>Service type<select value={service} onChange={e => setService(e.target.value)}><option value="">Any service</option><option>Book an appointment</option><option>Walk-in</option><option>Home service</option></select></label><span className="footer-static" title="Live opening status requires a backend">Opening hours listed below</span></div></div><div className="results-bar"><span>{filtered.length} studios</span><label className="map-label">Sort <select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="name">Name</option></select></label></div><div className="shop-grid">{filtered.map((s, i) => <article className="shop-card reveal-card" key={s.name}><div className="shop-photo"><ImageSlot label={"Tattoo artwork"} /><span className="featured-tag">{i < 3 ? 'Featured' : ''}</span></div><div className="shop-body"><h2>{s.name}</h2><p>{s.description}</p><div className="service-line">{s.services}</div><div className="shop-details"><span><MapPin size={14} />{s.city}</span><span><Clock3 size={14} />{s.hours}</span><span><Users size={14} />{s.artists} artists</span></div><span className="under-link">Studio information <ArrowUpRight size={14} /></span></div></article>)}</div></main>
}

function SocialPage() {
  const [tab, setTab] = useState('Everything')
  const [query, setQuery] = useState('')
  return <main className="directory-page social-page"><PageIntro kicker="Community" title={<>Social<br /><i>hub.</i> </>} /><div className="social-layout"><section className="feed-column"><label className="search-box"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search posts" /></label><div className="social-actions"><p>Sign in to post, comment and join groups.</p><div><button onClick={() => setTab('Everything')} className={tab === 'Everything' ? 'active' : ''}>Everything</button><button onClick={() => setTab('Promotions')} className={tab === 'Promotions' ? 'active' : ''}>Promotions</button></div></div>{(tab === 'Everything' && 'Mohamed Ali Belkouri'.toLowerCase().includes(query.toLowerCase())) && <article className="post-card"><div className="post-author"><span className="avatar">M</span><div><b>Mohamed Ali Belkouri</b><small>@dali · 2 months ago</small></div></div><h2>greeting</h2><p>yoo there</p><div className="post-actions"><span><Heart size={15} /> 1 like</span><span><MessageCircle size={15} /> 0 comments</span></div></article>}{tab === 'Promotions' && <div className="empty-state">No promotions to show right now.</div>}</section><aside className="social-sidebar"><div className="side-panel"><p className="eyebrow">Artists to follow</p>{[['N', 'Nell Farraday'], ['S', 'Sena Okafor'], ['K', 'Kit Marlowe']].map(([i, n]) => <div className="follow-row" key={n}><span className="avatar">{i}</span><b>{n}</b><span className="footer-static" title="Follow requires user accounts">Follow</span></div>)}</div><div className="side-panel rules-panel"><p className="eyebrow">House rules</p><ul><li>Credit the artist when you post their work.</li><li>No medical advice — if a tattoo looks infected, see a doctor.</li><li>Keep critique about the work, not the person wearing it.</li><li>Report anything that breaks this and a moderator will look.</li></ul></div></aside></div></main>
}

function SignInPage({ navigate }) {
  const [mode, setMode] = useState('sign-in')
  const [submitted, setSubmitted] = useState(false)
  return <main className="auth-page"><div className="auth-panel"><p className="eyebrow">Tattoo Hub</p><h1 className="display">{mode === 'sign-in' ? 'Sign in.' : 'Create account.'}</h1><p className="auth-lead">{mode === 'sign-in' ? 'Welcome back.' : 'Join the community.'}</p><form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
    {mode === 'register' && <label>Full name<input type="text" required placeholder="Your name" autoComplete="name" /></label>}
    <label>Email address<input type="email" required placeholder="you@example.com" autoComplete="email" /></label>
    <label>Password<input type="password" minLength={6} required placeholder="Password" autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'} /></label>
    <button className="button-light auth-submit" type="submit">{mode === 'sign-in' ? 'Sign in' : 'Create account'} <ArrowUpRight size={16} /></button>
    {submitted && <p className="auth-notice" role="status">This is a frontend preview. Account access needs a backend connection.</p>}
  </form><button className="auth-switch" type="button" onClick={() => { setMode(mode === 'sign-in' ? 'register' : 'sign-in'); setSubmitted(false) }}>{mode === 'sign-in' ? 'New here? Create an account' : 'Already have an account? Sign in'}</button>
    <div><Link to="/" navigate={navigate} className="under-link">Back to home <ArrowRight size={14} /></Link></div>
  </div></main>
}

function IntroLoader({ onDone }) {
  useEffect(() => { const t = window.setTimeout(onDone, 3400); return () => window.clearTimeout(t) }, [onDone])
  return <div className="intro-loader" role="status" aria-live="polite" aria-label="Loading Tattoo Hub"><span className="intro-loader-brand">Tattoo <i>Hub</i></span><div className="loader-stage"><span className="intro-loader-overline">THE ART OF EXPRESSION</span><span className="intro-loader-title">ART IS<br /><em>PERSONAL.</em></span><span className="intro-loader-caption">DISCOVER THE ARTIST BEHIND THE INK</span></div><div className="intro-loader-bottom"><span>INITIALIZING EXPERIENCE</span><div className="intro-loader-bar"><span /></div><span>01 — 100</span></div></div>
}

function App() {
  const [path, navigate] = usePath()
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => localStorage.getItem('tattoohub-theme') || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('tattoohub-theme', theme)
  }, [theme])
  // Watch every current and newly rendered section; trigger motion only when it enters view.
  useEffect(() => {
    if (loading) return
    const root = document.querySelector('.page-content')
    if (!root) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return
    let destroyed = false
    const observed = new WeakSet()
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' })
    const select = '.reveal, .reveal-card, .direction-card, .section-heading, .direction-head, .home-note > *, .page-intro, .shop-card, .post-card, .artist-profile-hero > *, .work-detail-hero > *, .artist-profile-piece, .side-panel'
    function observeNew() {
      if (destroyed) return
      root.querySelectorAll(select).forEach(el => {
        if (observed.has(el)) return
        observed.add(el)
        // Keep content already above the viewport immediately visible.
        const rect = el.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top < window.innerHeight * 0.12) {
          el.classList.add('is-visible')
        } else {
          el.classList.add('motion-reveal')
          observer.observe(el)
        }
      })
    }
    const raf = requestAnimationFrame(() => { root.classList.add('motion-ready'); observeNew() })
    const mutation = new MutationObserver(observeNew)
    mutation.observe(root, { childList: true, subtree: true })
    return () => { destroyed = true; cancelAnimationFrame(raf); mutation.disconnect(); observer.disconnect(); root.classList.remove('motion-ready') }
  }, [path, loading])

  useEffect(() => {
    let ticking = false
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      const ratio = height > 0 ? window.scrollY / height : 0
      document.documentElement.style.setProperty('--scroll-progress', `${Math.max(0, Math.min(100, ratio * 100))}%`)
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [path])
  // Desktop wheel scroll easing. Native touch, keyboard, and reduced-motion behavior stay intact.
  useEffect(() => {
    if (loading || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    let frame = 0
    let target = window.scrollY
    let current = window.scrollY
    let last = 0
    let animating = false
    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    const tick = () => {
      const gap = target - current
      current += gap * 0.115
      if (Math.abs(gap) <= 0.45) {
        current = target
        animating = false
      }
      window.scrollTo(0, current)
      if (animating) frame = requestAnimationFrame(tick)
    }
    const isScrollableChild = (node, dy) => {
      for (let el = node instanceof Element ? node : null; el && el !== document.body; el = el.parentElement) {
        const style = getComputedStyle(el)
        if (!/(auto|scroll)/.test(style.overflowY) || el.scrollHeight <= el.clientHeight + 2) continue
        if ((dy < 0 && el.scrollTop > 0) || (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1)) return true
      }
      return false
    }
    const onWheel = e => {
      if (e.ctrlKey || e.metaKey || e.defaultPrevented || e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      if (isScrollableChild(e.target, e.deltaY)) return
      const delta = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1)
      if (!delta) return
      const now = performance.now()
      if (!animating || now - last > 180) {
        current = window.scrollY
        target = current
      }
      last = now
      const next = Math.max(0, Math.min(maxScroll(), target + Math.max(-260, Math.min(260, delta))))
      if (next === target && !animating) return
      e.preventDefault()
      target = next
      if (!animating) { animating = true; frame = requestAnimationFrame(tick) }
    }
    const resync = () => {
      if (animating) return
      target = window.scrollY
      current = target
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', resync, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', resync)
    }
  }, [loading, path])

  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')

  const normalized = path.replace(/\/$/, '') || '/'
  let content
  if (normalized === '/gallery') content = <GalleryPage navigate={navigate} />
  else if (normalized.startsWith('/work/')) content = <WorkDetailPage id={normalized.split('/')[2]} navigate={navigate} />
  else if (normalized === '/artists') content = <ArtistsPage navigate={navigate} />
  else if (normalized.startsWith('/artists/')) content = <ArtistProfilePage slug={normalized.split('/')[2]} navigate={navigate} />
  else if (normalized === '/shops') content = <ShopsPage />
  else if (normalized === '/social') content = <SocialPage />
  else if (normalized === '/sign-in' || normalized === '/login' || normalized === '/register') content = <SignInPage navigate={navigate} />
  else content = <Home navigate={navigate} />
  return <div className="app-shell" data-theme={theme}>{loading && <IntroLoader onDone={() => setLoading(false)} />}{!loading && <><Header navigate={navigate} theme={theme} toggleTheme={toggleTheme} /><div key={normalized} className="page-content page-enter">{content}</div><Footer navigate={navigate} /></>}</div>
}

export default App
