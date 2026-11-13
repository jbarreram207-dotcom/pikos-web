/**
 * EVENTOS — edita este archivo para publicar eventos (no hay que tocar JSX).
 * Mientras el arreglo esté vacío, la página muestra un estado vacío atractivo.
 * Los eventos con fecha de hoy o futura aparecen en "Próximos"; los demás pasan solos a "Anteriores".
 *
 * Campos:
 *  id           identificador único (la foto se busca en src/assets/events/<id>.jpg)
 *  title        nombre del evento
 *  date         fecha en formato 'AAAA-MM-DD'
 *  time         hora o rango, texto libre (opcional)   ej. '5:00 pm'
 *  place        lugar (opcional)
 *  description  descripción
 *  participate  cómo participar (opcional)
 *  link         { label, url } botón externo (opcional)
 *
 * Ejemplo (NO descomentar con datos inventados; usar solo eventos confirmados):
 *
 * {
 *   id: 'nombre-del-evento',
 *   title: 'Nombre del evento',
 *   date: '2026-12-05',
 *   time: '5:00 pm',
 *   place: 'Píkos Zona 10',
 *   description: 'Descripción confirmada del evento.',
 *   participate: 'Instrucciones confirmadas para participar.',
 *   link: { label: 'Más información', url: 'https://…' },
 * },
 */
export const events = [];
