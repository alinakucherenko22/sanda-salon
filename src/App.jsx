import { useState, useEffect } from 'react'
import {
  Gem,
  Leaf,
  Star,
  Microscope,
  Syringe,
  Sun,
  Scissors,
  Hand,
  Eye,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Instagram,
  MessageCircle
} from 'lucide-react'
import './index.css'

// Import local images
import ref1 from './assets/ref1.jpg'
import ref2 from './assets/ref2.jpg'
import ref3 from './assets/ref3.jpg'
import ref4 from './assets/ref4.jpg'
import ref5 from './assets/ref5.jpg'
import logo from './assets/logo.jpg'

/* ===== NAVBAR ===== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Основная навигация">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" aria-label="Sandra Beauty Salon">
          <img src={logo} alt="Sandra Beauty Studio Logo" className="logo-img" />
        </a>

        <ul className="navbar-links">
          {[
            ['#about', 'О нас'],
            ['#services', 'Услуги'],
            ['#portfolio', 'Портфолио'],
            ['#reviews', 'Отзывы'],
            ['#contact', 'Контакты'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <a href="#booking" className="btn-primary" id="navbar-booking-btn">Записаться</a>
        </div>
      </div>
    </nav>
  )
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Главный баннер">
      <div className="hero-content">
        <div className="hero-badge">✦ Премиальный салон</div>

        <h1 className="hero-title">
          Красота и Уверенность
          <br />
          <span className="highlight">в Sandra</span>
        </h1>

        <p className="hero-subtitle">
          Исключительная забота и современные процедуры, созданные подчеркнуть вашу природную красоту. Наши специалисты объединяют искусство и науку для вашего совершенства.
        </p>

        <div className="hero-actions">
          <a href="#booking" className="btn-primary" id="hero-booking-btn">
            ✦ Записаться на приём
          </a>
          <a href="#services" className="btn-outline" id="hero-services-btn">
            Посмотреть услуги →
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="number">12+</div>
            <div className="label">Лет безупречного качества</div>
          </div>
          <div className="hero-stat">
            <div className="number">5000+</div>
            <div className="label">Довольных клиентов</div>
          </div>
          <div className="hero-stat">
            <div className="number">30+</div>
            <div className="label">Процедур и услуг</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== ABOUT ===== */
function About() {
  const features = [
    { icon: <Gem size={28} strokeWidth={1.5} />, title: 'Экспертиза', desc: 'Лидеры в области современных методик красоты' },
    { icon: <Leaf size={28} strokeWidth={1.5} />, title: 'Премиальные продукты', desc: 'Только высококачественные бренды косметики' },
    { icon: <Star size={28} strokeWidth={1.5} />, title: 'Индивидуальный подход', desc: 'Внимание к каждому клиенту и задаче' },
    { icon: <Microscope size={28} strokeWidth={1.5} />, title: 'Современные методики', desc: 'Аппаратная косметология и инновации' },
  ]

  return (
    <section className="about" id="about" aria-label="О нас">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-block">
            <div className="about-image-main">
              <img
                src={ref1}
                alt="Интерьер салона Sandra"
                loading="lazy"
              />
            </div>
            <div className="about-floating-card">
              <div className="title">Год основания</div>
              <div className="value">2012</div>
            </div>
          </div>

          <div className="about-text">
            <span className="section-tag">Наша История</span>
            <h2 className="section-title">
              Посвящение искусству красоты
            </h2>
            <p className="section-subtitle">
              Посвятив себя искусству красоты, салон Sandra сочетает многолетний опыт с индивидуальным подходом к каждому клиенту. Мы верим, что истинная красота рождается из уверенности, и наша миссия — помочь вам почувствовать себя безупречно.
            </p>

            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature" key={f.title}>
                  <div className="icon" style={{ color: 'var(--primary)' }}>{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== SERVICES ===== */
const SERVICES = [
  {
    icon: <Syringe size={32} strokeWidth={1.5} />,
    title: 'Инъекционные процедуры',
    desc: 'Мезотерапия, биоревитализация и контурная пластика от профессионалов.',
  },
  {
    icon: <Sun size={32} strokeWidth={1.5} />,
    title: 'Аппаратная косметология',
    desc: 'Чистка лица, пилинги и современные аппаратные методики омоложения.',
  },
  {
    icon: <Scissors size={32} strokeWidth={1.5} />,
    title: 'Парикмахерские услуги',
    desc: 'Сложное окрашивание, афрокудри, свадебные и вечерние прически.',
  },
  {
    icon: <Hand size={32} strokeWidth={1.5} />,
    title: 'Ногтевые процедуры',
    desc: 'Маникюр, педикюр, наращивание и японский уход для ваших рук.',
  },
  {
    icon: <Leaf size={32} strokeWidth={1.5} />,
    title: 'Массаж',
    desc: 'Оздоровительный, антицеллюлитный, релаксирующий и лимфодренажный массаж.',
  },
  {
    icon: <Eye size={32} strokeWidth={1.5} />,
    title: 'Ресницы и брови',
    desc: 'Ламинирование, коррекция и профессиональное окрашивание бровей и ресниц.',
  },
  {
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    title: 'Эпиляция',
    desc: 'Профессиональная лазерная эпиляция для безупречно гладкой кожи.',
  },
]

function Services() {
  return (
    <section className="services" id="services" aria-label="Наши услуги">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Наши Услуги</span>
          <h2 className="section-title">
            Выберите своё преображение
          </h2>
          <p className="section-subtitle">
            Выберите подходящую процедуру для вашего преображения и отдыха.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title} tabIndex={0} role="article" aria-label={s.title}>
              <div className="service-icon" style={{ color: 'var(--primary)' }}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== PORTFOLIO ===== */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Стильное окрашивание',
    img: ref2,
  },
  {
    id: 2,
    title: 'Изящный маникюр',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Уход за кожей',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Вечерние укладки',
    img: ref3,
  },
  {
    id: 5,
    title: 'Ламинирование ресниц',
    img: ref4,
  },
  {
    id: 6,
    title: 'Спа-уход',
    img: ref5,
  },
]

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-label="Наши работы">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-tag">Наши Работы</span>
          <h2 className="section-title">
            Результаты преображений
          </h2>
          <p className="section-subtitle">
            Взгляните на результаты преображений от наших мастеров.
          </p>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item) => (
            <div className="portfolio-item" key={item.id} tabIndex={0} role="img" aria-label={item.title}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== REVIEWS ===== */
const REVIEWS = [
  {
    id: 1,
    text: 'Нашла своего косметолога — Дина. Проф в своей работе. Отличный салон 🌹',
    name: 'Диана Рахимова',
    role: 'Постоянный клиент',
    avatar: 'ДР',
    stars: 5,
  },
  {
    id: 2,
    text: 'Если ищете место, где работают действительно хорошие специалисты, очень советую Sandra на Мангелик',
    name: 'Илья',
    role: 'Рекомендует салон',
    avatar: 'И',
    stars: 5,
  },
  {
    id: 3,
    text: 'Великолепный сервис, уютная атмосфера и профессиональные мастера. Стала постоянным клиентом!',
    name: 'Анна С.',
    role: 'Постоянный клиент',
    avatar: 'АС',
    stars: 5,
  },
]

function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-label="Отзывы клиентов">
      <div className="container">
        <div className="reviews-header">
          <span className="section-tag">Отзывы</span>
          <h2 className="section-title">Отзывы Наших Клиентов</h2>
          <p className="section-subtitle">
            Мнения тех, кто уже доверился нашим мастерам.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r) => (
            <article className="review-card" key={r.id} aria-label={`Отзыв от ${r.name}`}>
              <div className="review-stars" style={{ color: 'var(--primary-light)' }} aria-label={`${r.stars} из 5 звёзд`}>
                {'★'.repeat(r.stars)}
              </div>
              <p className="review-text">«{r.text}»</p>
              <div className="review-author">
                <div className="review-avatar" aria-hidden="true">{r.avatar}</div>
                <div className="review-author-info">
                  <div className="name">{r.name}</div>
                  <div className="role">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== BOOKING ===== */
function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="booking" id="booking" aria-label="Запись на процедуру">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-content">
            <span className="section-tag">Онлайн-запись</span>
            <h2 className="section-title">
              Записаться на процедуру
            </h2>
            <p className="section-subtitle">
              Выберите услугу и удобное время. Мы подтвердим запись через WhatsApp.
            </p>
          </div>

          <div className="booking-form">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Заявка отправлена!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Мы свяжемся с вами через WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Форма записи">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="booking-name">Ваше имя</label>
                    <input
                      id="booking-name"
                      type="text"
                      placeholder="Введите имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="booking-phone">Телефон</label>
                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="booking-service">Услуга</label>
                  <select
                    id="booking-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    required
                  >
                    <option value="" disabled>Выберите услугу</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="booking-date">Дата и время</label>
                  <input
                    id="booking-date"
                    type="datetime-local"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="booking-submit-btn">
                  Записаться через WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== CONTACTS ===== */
function Contacts() {
  return (
    <section className="contacts" id="contact" aria-label="Контакты">
      <div className="container">
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          <span className="section-tag">Наши Контакты</span>
          <h2 className="section-title">Найдите нас</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Мы находимся в центре Астаны и готовы принять вас ежедневно.
          </p>
        </div>

        <div className="contacts-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon" style={{ color: 'var(--primary)' }}><MapPin size={24} /></div>
              <div>
                <div className="label">Адрес</div>
                <div className="value">
                  Проспект Мангилик Ел, 41/3<br />
                  Есильский район, Астана
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon" style={{ color: 'var(--primary)' }}><Phone size={24} /></div>
              <div>
                <div className="label">Телефон</div>
                <div className="value">
                  <a href="tel:+77027774115" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +7‑702‑777‑41‑15
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon" style={{ color: 'var(--primary)' }}><Clock size={24} /></div>
              <div>
                <div className="label">Часы работы</div>
                <div className="value">Ежедневно: 10:00 — 20:00<br />Без выходных</div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                id="instagram-link"
                aria-label="Instagram"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="https://wa.me/77027774115"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                id="whatsapp-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="map-placeholder">
            <iframe
              title="Карта салона Sandra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.3!2d71.424073!3d51.128207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzQxLjUiTiA3McKwMjUnMjYuNiJF!5e0!3m2!1sru!2skz!4v1710000000000!5m2!1sru!2skz"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: 'none' }} /* Removes dark mode inversion */
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="footer" aria-label="Подвал сайта">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="navbar-logo" style={{ marginBottom: 0 }} aria-label="Sandra Beauty Salon">
              <img src={logo} alt="Sandra Beauty Studio Logo" className="logo-img" />
            </a>
            <p>
              Современная эстетика и профессиональный уход. Мы создаём пространство, где ваша красота становится вдохновением.
            </p>
          </div>

          <div className="footer-col">
            <h4>Навигация</h4>
            <ul>
              {[
                ['#about', 'О салоне'],
                ['#services', 'Услуги'],
                ['#portfolio', 'Портфолио'],
                ['#contact', 'Контакты'],
              ].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>График работы</h4>
            <ul>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Пн — Вс</span></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>10:00 — 20:00</span></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Без выходных</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Подписка</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 12, lineHeight: 1.6 }}>
              Узнавайте об акциях первыми.
            </p>
            <div className="footer-subscribe">
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email для подписки"
                id="footer-email-input"
              />
              <button
                type="button"
                onClick={() => { if (email) setEmail('') }}
                id="footer-subscribe-btn"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Sandra Beauty Studio. Все права защищены. Элегантность в каждой детали.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Астана, Казахстан
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ===== APP ===== */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
