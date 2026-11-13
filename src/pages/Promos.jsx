import PageHead from '../components/PageHead';
import PromoBand from '../components/PromoBand';
import Reveal from '../components/Reveal';
import usePageTitle from '../lib/usePageTitle';
import { promos } from '../data/promos';

export default function Promos() {
  usePageTitle('Promos');

  return (
    <section className="view">
      <PageHead kicker="Combos y antojos" title="Promos" art="promos">
        Elige tu promo y pídela por delivery.
      </PageHead>

      {promos.length === 0 ? (
        <div className="wrap promos">
          <div className="empty">
            <p className="display empty__title">Pronto, más promos</p>
            <p>Estamos preparando nuevas promociones. Síguenos en Instagram @pikos.gt.</p>
          </div>
        </div>
      ) : (
        <div className="bands">
          {promos.map((p, i) => (
            <Reveal key={p.id}>
              <PromoBand promo={p} index={i} />
            </Reveal>
          ))}
        </div>
      )}

      {promos.length > 0 && (
        <p className="wrap promos__legal">
          Aplican restricciones. Consulta las condiciones de cada promoción en el pedido.
        </p>
      )}
    </section>
  );
}
