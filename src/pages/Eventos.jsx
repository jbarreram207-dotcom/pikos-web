import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import Burst from '../components/Burst';
import { Arrow, Bolt, Flame } from '../components/Icons';
import usePageTitle from '../lib/usePageTitle';
import { events } from '../data/events';
import { INSTAGRAM_URL } from '../data/delivery';

const toDate = (iso) => new Date(`${iso}T00:00:00`);
const MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
const longDate = (d) =>
  new Intl.DateTimeFormat('es-GT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(d);

function EventCard({ ev, past = false }) {
  const d = toDate(ev.date);
  return (
    <article className={`event ${past ? 'event--past' : ''}`}>
      <div className="event__media">
        <Photo src={`events/${ev.id}`} label={ev.title} ratio="16/10" />
        <time className="event__date" dateTime={ev.date}>
          <span className="event__day">{d.getDate()}</span>
          <span className="event__mon">{MONTHS[d.getMonth()]}</span>
        </time>
      </div>
      <div className="event__body">
        <h3 className="display event__title">{ev.title}</h3>
        <p className="event__meta">
          {longDate(d)}
          {ev.time ? ` · ${ev.time}` : ''}
          {ev.place ? ` · ${ev.place}` : ''}
        </p>
        {ev.description && <p className="event__desc">{ev.description}</p>}
        {ev.participate && (
          <p className="event__how">
            <strong>Cómo participar:</strong> {ev.participate}
          </p>
        )}
        {ev.link && (
          <a className="btn btn--sm event__btn" href={ev.link.url} target="_blank" rel="noopener noreferrer">
            {ev.link.label} <Arrow className="btn__ico" />
          </a>
        )}
      </div>
    </article>
  );
}

function EmptyEvents({ compact = false }) {
  return (
    <div className={`soon ${compact ? 'soon--compact' : ''}`}>
      <Flame className="soon__flame" />
      <Bolt className="soon__bolt" />
      <div className="soon__copy">
        <p className="marker soon__kicker">Estamos cocinando algo</p>
        <h2 className="display soon__title">Pronto, más Píkos</h2>
        <p className="soon__text">
          Aún no hay eventos confirmados. Síguenos en Instagram para enterarte primero.
        </p>
        <div className="soon__actions">
          <a className="btn btn--ink" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram @pikos.gt <Arrow className="btn__ico" />
          </a>
          <Link className="btn btn--white" to="/promos">
            Ver promos
          </Link>
        </div>
      </div>
      {!compact && (
        <Burst className="soon__burst">
          Más
          <br />
          crunch
        </Burst>
      )}
    </div>
  );
}

export default function Eventos() {
  usePageTitle('Eventos');

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sorted = [...events].sort((a, b) => toDate(a.date) - toDate(b.date));
  const upcoming = sorted.filter((e) => toDate(e.date) >= today);
  const past = sorted.filter((e) => toDate(e.date) < today).reverse();

  return (
    <section className="view">
      <PageHead kicker="Más Píkos" title="Eventos">
        Actividades, experiencias y todo lo que pasa en la comunidad Píkos.
      </PageHead>

      <div className="wrap events">
        {events.length === 0 && (
          <Reveal>
            <EmptyEvents />
          </Reveal>
        )}

        {events.length > 0 && (
          <>
            <h2 className="display events__h">Próximos eventos</h2>
            {upcoming.length > 0 ? (
              <div className="events__grid">
                {upcoming.map((e, i) => (
                  <Reveal key={e.id} delay={i * 90}>
                    <EventCard ev={e} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <EmptyEvents compact />
            )}

            {past.length > 0 && (
              <>
                <h2 className="display events__h events__h--past">Eventos anteriores</h2>
                <div className="events__grid">
                  {past.map((e, i) => (
                    <Reveal key={e.id} delay={i * 70}>
                      <EventCard ev={e} past />
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
