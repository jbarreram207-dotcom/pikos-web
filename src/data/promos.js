/**
 * PROMOCIONES — edita este archivo para actualizar la página de Promos y el adelanto del Inicio.
 *
 * Campos:
 *  id          identificador
 *  img         clave de la foto SIN extensión (por defecto "promos/<id>"); ej. "products/combo-sandwich-classic"
 *  title / tag / description / price / note / theme ('red' | 'ink' | 'yellow')
 *
 * Fuente: imagen promocional de Píkos Days y la sección "Promociones" del documento de menú.
 * Retiradas por no aparecer en el documento (restaurar si siguen vigentes): "Crunch Crew" (Q76,
 * 12 crunchers + 2 salsas + 1 bandeja de papas + 2 bebidas) y "Ched Fries" (Q22).
 */
export const promos = [
  {
    id: 'pikos-days',
    title: 'Píkos Days',
    tag: 'Martes y jueves',
    description: 'Combo con 4 tenders, 1 papa mediana y 1 bebida de 355 ml.',
    price: 40,
    poster: true, // la imagen original ya incluye el sello Q40
    note: 'Aplican restricciones. Válido solo martes y jueves.',
    theme: 'red',
  },
  {
    id: 'sandwich-classic-individual',
    img: 'products/sandwich-classic-individual',
    title: 'Sandwich Classic Individual',
    tag: 'Promoción',
    description: '1 Chicken sandwich con pollo empanizado + 1 salsa.',
    price: 62,
    theme: 'yellow',
  },
  {
    id: 'combo-sandwich-classic',
    img: 'products/combo-sandwich-classic',
    title: 'Combo Sandwich Classic',
    tag: 'Promoción',
    description: '1 Chicken sandwich con pollo empanizado + 1 salsa + 1 papas…',
    price: 80,
    theme: 'ink',
  },
  {
    id: 'sandwich-deluxe-individual',
    img: 'products/sandwich-deluxe-individual',
    title: 'Sandwich Deluxe Individual',
    tag: 'Promoción',
    description: '1 Chicken sandwich con pollo empanizado, tocino, pepinillos, queso…',
    price: 72,
    theme: 'yellow',
  },
  {
    id: 'combo-sandwich-deluxe',
    img: 'products/combo-sandwich-deluxe',
    title: 'Combo Sandwich Deluxe',
    tag: 'Popular',
    description: '1 Chicken sandwich con pollo empanizado, tocino, pepinillos, queso…',
    price: 91,
    theme: 'ink',
  },
];
