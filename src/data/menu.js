/**
 * MENÚ — fuente: pikosimg.docx (capturas de menú). Nombres, precios y descripciones tal como aparecen.
 * Campos: id (= foto en src/assets/products/<id>.webp) · category · name · description · price (Q) ·
 *   promo: true  → también aparece en la categoría "Promociones" (sin duplicar el producto) ·
 *   pending: true → la descripción venía cortada con "…" en la captura: CONFIRMAR (solo se ve en modo dev).
 *   lowres: true  → la foto es una miniatura recortada de la captura (pedir foto original).
 */
export const menu = [
  { id: "combo-sandwich-classic", category: "combos", name: "Combo Sandwich Classic", description: "1 Chicken sandwich con pollo empanizado + 1 salsa + 1 papas…", price: 80, promo: true, pending: true },
  { id: "combo-sandwich-deluxe", category: "combos", name: "Combo Sandwich Deluxe", description: "1 Chicken sandwich con pollo empanizado, tocino, pepinillos, queso…", price: 91, promo: true, pending: true, popular: true },
  { id: "sandwich-classic-individual", category: "individuales", name: "Sandwich Classic Individual", description: "1 Chicken sandwich con pollo empanizado + 1 salsa", price: 62, promo: true },
  { id: "sandwich-deluxe-individual", category: "individuales", name: "Sandwich Deluxe Individual", description: "1 Chicken sandwich con pollo empanizado, tocino, pepinillos, queso…", price: 72, promo: true, pending: true },
  { id: "4-tenders-1-salsa", category: "individuales", name: "4 Tenders + 1 salsa", description: "4 tenders de pechuga de pollo empanizada + 1 salsa", price: 52 },
  { id: "6-tenders-1-salsa", category: "individuales", name: "6 Tenders + 1 Salsa", description: "6 tenders de pechuga de pollo empanizada + 1 salsa", price: 66 },
  { id: "combo-20-crunchers", category: "crunchers", name: "Combo 20 Crunchers", description: "20 crunchers + 3 salsas + 3 papas medianas + 1 bebida 1.5 L (Opción de…", price: 160, pending: true },
  { id: "combo-26-crunchers", category: "crunchers", name: "Combo 26 Crunchers", description: "26 crunchers + 3 salsas + 4 papas medianas + 1 bebida 1.5 L (Opción de…", price: 190, pending: true },
  { id: "combo-36-crunchers", category: "crunchers", name: "Combo 36 Crunchers", description: "36 crunchers + 4 salsas + 5 papas medianas + 1 bebida 1.5 L (Opción de…", price: 225, pending: true },
  { id: "20-crunchers", category: "crunchers", name: "20 Crunchers", description: "20 crunchers bañados en tu salsa a elección y una refrescante pepsi de 1…", price: 152, pending: true },
  { id: "26-crunchers", category: "crunchers", name: "26 Crunchers", description: "26 crunchers bañados en tu salsa a elección y una refrescante pepsi de 1…", price: 183, pending: true },
  { id: "36-crunchers", category: "crunchers", name: "36 Crunchers", description: "36 crunchers bañados en tu salsa a elección y una refrescante pepsi de 1…", price: 233, pending: true },
  { id: "sticky-buffalo-ranch", category: "sticky-tenders", name: "Sticky tenders Buffalo de la casa + Ranch", description: "Sticky tenders hechos de pechuga de pollo con salsa Buffalo + ranch + papas…", price: 81, pending: true },
  { id: "sticky-bbq-ranch", category: "sticky-tenders", name: "Sticky tenders BBQ + Ranch", description: "Sticky tenders hechos de pechuga de pollo con salsas BBQ + ranch + papas…", price: 81, pending: true },
  { id: "sticky-asian-zing-ranch", category: "sticky-tenders", name: "Sticky tenders Asian Zing + Ranch", description: "Sticky tenders hechos de pechuga de pollo con con salsa Asian Zing + ranch + papa…", price: 81, pending: true },
  { id: "combo-4-tenders", category: "tenders", name: "Combo de 4 Tenders", description: "4 tenders de pechuga de pollo empanizada + 1 salsa + 1 papas…", price: 70, pending: true },
  { id: "combo-6-tenders", category: "tenders", name: "Combo 6 Tenders", description: "6 tenders de pechuga de pollo empanizada + 1 salsa + 1 papas…", price: 89, pending: true },
  { id: "combo-8-tenders", category: "tenders", name: "Combo de 8 Tenders", description: "8 tenders de pechuga de pollo empanizada + 2 salsas + 1 papas…", price: 106, pending: true },
  { id: "combo-12-tenders", category: "tenders", name: "Combo de 12 Tenders", description: "12 tenders de pechuga de pollo empanizada + 3 salsas + 3 papas…", price: 158, pending: true },
  { id: "bandeja-de-papas", category: "snacks", name: "Bandeja de papas", description: "Bandeja de papas", price: 22 },
  { id: "papas-fritas", category: "snacks", name: "Papas Fritas", description: "1 porción de papas fritas", price: 20 },
  { id: "ched-fries", category: "snacks", name: "Ched Fries", description: "Ched fries", price: 28 },
  { id: "la-gloriosa", category: "salsas", name: "La Gloriosa (Salsa secreta de la casa)", description: "Salsa la gloriosa", price: 7, lowres: true },
  { id: "sexy-ranch", category: "salsas", name: "Sexy Ranch (Clasica favorita)", description: "Salsa sexy ranch", price: 7, lowres: true },
  { id: "ninja-ranch", category: "salsas", name: "Ninja Ranch (Ranch con especies)", description: "Salsa ninja ranch", price: 7, lowres: true },
  { id: "buffalo-ched", category: "salsas", name: "Buffalo Ched (Salsa Buffalo con Cheddar)", description: "Salsa buffalo ched", price: 7, lowres: true },
  { id: "queso-cheddar", category: "salsas", name: "Queso cheddar", description: "Dip extra queso cheddar", price: 7, lowres: true },
  { id: "pepsi-black", category: "bebidas", name: "Pepsi Black", description: "Pepsi Black", price: 10, lowres: true },
  { id: "pepsi", category: "bebidas", name: "Pepsi", description: "Pepsi", price: 10 },
  { id: "salutaris-naranjada", category: "bebidas", name: "Salutaris Naranjada", description: "Salutaris narajna", price: 10, lowres: true },
  { id: "salutaris-limonada", category: "bebidas", name: "Salutaris Limonada", description: "Salutaris limón", price: 10, lowres: true },
  { id: "agua-pura", category: "bebidas", name: "Agua pura", description: "500 mL", price: 10 },
];
