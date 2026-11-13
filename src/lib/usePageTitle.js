import { useEffect } from 'react';

const BASE = 'Píkos Guatemala';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : `${BASE} — Less drama. More crunch.`;
  }, [title]);
}
