import { useState } from 'react';
import PageHead from '../components/PageHead';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import { Arrow, Pin } from '../components/Icons';
import { getAsset } from '../lib/assets';
import usePageTitle from '../lib/usePageTitle';
import { useOrder } from '../context';
import { locations, directionsLink, mapEmbedLink, mapsLink } from '../data/locations';

function LocationCard({ loc }) {
  const { open } = useOrder();
  const [showMap, setShowMap] = useState(false);

  return (
    <article className="loc">
      <div className="loc__media">
        {getAsset(`locations/${loc.id}`) ? (
          <Photo src={`locations/${loc.id}`} label={loc.name} ratio="16/10" />
        ) : (
          <div className="loc__nophoto" style={{ aspectRatio: '16/10' }} aria-hidden="true">
            <Pin />
            <span className="display">{loc.name.replace('Píkos ', '')}</span>
          </div>
        )}
        <span className="loc__badge marker">
          <Pin /> Sucursal
        </span>
      </div>

      <div className="loc__body">
        <h2 className="display loc__name">{loc.name}</h2>
        <p className="loc__addr">{loc.address}</p>
        {loc.hours && <p className="loc__hours">Horario: {loc.hours}</p>}

        <div className="loc__actions">
          <a className="btn btn--sm" href={directionsLink(loc)} target="_blank" rel="noopener noreferrer">
            Cómo llegar <Arrow className="btn__ico" />
          </a>
          <a className="btn btn--sm btn--white" href={mapsLink(loc)} target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
          <button type="button" className="btn btn--sm btn--white" onClick={open}>
            Ordenar
          </button>
        </div>

        <button
          type="button"
          className="loc__toggle"
          aria-expanded={showMap}
          onClick={() => setShowMap((v) => !v)}
        >
          {showMap ? 'Ocultar mapa' : 'Ver mapa aquí'}
        </button>

        {showMap && (
          <div className="loc__map">
            <iframe
              title={`Mapa de ${loc.name}`}
              src={mapEmbedLink(loc)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default function Ubicaciones() {
  usePageTitle('Ubicaciones');

  return (
    <section className="view">
      <PageHead kicker="Encuéntranos" title="Ubicaciones">
        {locations.length} sucursales. Visítanos o pide a domicilio.
      </PageHead>

      <div className="wrap locs">
        {locations.length === 0 ? (
          <div className="empty">
            <p className="display empty__title">Pronto</p>
            <p>Estamos actualizando nuestras sucursales.</p>
          </div>
        ) : (
          locations.map((l, i) => (
            <Reveal key={l.id} delay={i * 90}>
              <LocationCard loc={l} />
            </Reveal>
          ))
        )}
      </div>
    </section>
  );
}
