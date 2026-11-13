/**
 * Enlaces de delivery — SOLO URLs halladas en páginas públicas de cada plataforma (búsqueda nov-2026).
 * Ninguna URL se inventó ni se armó a mano. Estado de verificación (campo `check`):
 *
 *   'ficha'   → la ficha pública de la sucursal apareció en la búsqueda con su nombre, dirección y menú.
 *   'sitemap' → la URL está en el sitemap oficial de PedidosYa (sitemap_1.xml), pero la ficha NO se pudo
 *               abrir desde aquí → ABRIR MANUALMENTE antes de presentar y borrar la fila si falla.
 *
 * Uber Eats (7 sucursales con ficha pública):
 *   Zona 10, Vía Majadas (Zona 11), Zona 14, Zona 15, Zona 16, Sankris Mall, Carretera a El Salvador (Km 16.3).
 *   · Eskala Roosevelt: no se encontró ficha en Uber Eats → NO aparece en Uber Eats.
 *   · Algunas fichas mostraban "Entrega no disponible" en un momento dado (Zona 16, Majadas, Sankris Mall):
 *     es un estado por horario/cobertura; la ficha sigue existiendo y en otras lecturas aparece activa.
 *   · Pikos Zona 14: la ficha comparte el teléfono de la sucursal Zona 10 y la marca/menú es de Píkos, pero
 *     no figura en el Linktree oficial → CONFIRMAR CON EL CLIENTE.
 *
 * PedidosYa (6 sucursales):
 *   Zona 10 (ficha abierta y confirmada), Zona 11 Vía Majadas, Zona 15, Zona 16, Eskala Roosevelt, Sankris Mall.
 *   · Zona 11 y Zona 16 tienen DOS entradas en el sitemap (una normal y una "-b2c"); se usa la normal.
 *     Alternativas por si la normal falla:
 *       Zona 11 b2c: .../pikos-zona-11-b2c-8a567d00-4b41-403c-b86b-33fb9468e777-menu
 *       Zona 16 b2c: .../pikos-zona-16-b2c-ffe82a80-dc82-44d8-837b-9bb27da7b358-menu
 *   · Zona 15 y Eskala Roosevelt: solo se encontró una entrada (Zona 15 es "-b2c").
 *   · Zona 14 y Carretera a El Salvador: no se encontró ficha en PedidosYa → NO aparecen en PedidosYa.
 */
const PY = 'https://www.pedidosya.com.gt/restaurantes/ciudad-de-guatemala/';
const UE = 'https://www.ubereats.com/';

export const delivery = {
  ubereats: {
    id: 'ubereats',
    name: 'Uber Eats',
    stores: [
      { id: 'zona-10', label: 'Píkos Zona 10', area: '13 Calle 05-19, Zona 10', check: 'ficha', url: `${UE}gt/store/pikos-zona-10/IPlgSB1PXb2AMgMXCZ1rMg` },
      { id: 'majadas', label: 'Píkos Vía Majadas', area: 'C.C. Vía Majadas, Zona 11', check: 'ficha', url: `${UE}gt/store/pikos-majadas/6Lnp8G9STJi5q5a6_hteYA` },
      { id: 'zona-14', label: 'Píkos Zona 14', area: '5 Calle y 9 Avenida, Zona 14', check: 'ficha', url: `${UE}gt-en/store/pikos-zona-14/z_izyq4pRyaeXj-0x-kDiQ` },
      { id: 'zona-15', label: 'Píkos Zona 15', area: 'Vista Hermosa, Zona 15', check: 'ficha', url: `${UE}gt/store/pikos-zona-15/g5Kwg4Y8WfCigogWJy9WKw` },
      { id: 'zona-16', label: 'Píkos Zona 16', area: 'C.C. Santa Amelia, Zona 16', check: 'ficha', url: `${UE}gt/store/pikos-zona-16/je7lhA2-XzC1p6FKfHy1gA` },
      { id: 'sankris', label: 'Píkos Sankris Mall', area: 'C.C. Sankris, Zona 8 de Mixco', check: 'ficha', url: `${UE}gt/store/pikos-sankris-mall/fK4bSiMiWcmyPw31NVFmUg` },
      { id: 'carretera-el-salvador', label: 'Píkos Carretera a El Salvador', area: 'Km 16.3, Santa Catarina Pinula', check: 'ficha', url: `${UE}gt/store/pikos-carr-a-el-salvador/FRi0Pg8LWf2ugtB3qQA0bw` },
    ],
  },
  pedidosya: {
    id: 'pedidosya',
    name: 'PedidosYa',
    stores: [
      { id: 'zona-10', label: 'Píkos Zona 10', area: '13 Calle 05-19, Zona 10', check: 'ficha', url: `${PY}pikos-zona-10-0ee6a358-fbdc-4116-ad36-f36423251328-menu` },
      { id: 'majadas', label: 'Píkos Vía Majadas', area: 'C.C. Vía Majadas, Zona 11', check: 'sitemap', url: `${PY}pikos-zona-11-d9a92fc2-cced-485e-9cea-2601aa197e75-menu` },
      { id: 'zona-15', label: 'Píkos Zona 15', area: 'Vista Hermosa, Zona 15', check: 'sitemap', url: `${PY}pikos-zona-15-b2c-56473b62-8379-4f61-b860-92a315e96307-menu` },
      { id: 'zona-16', label: 'Píkos Zona 16', area: 'C.C. Santa Amelia, Zona 16', check: 'sitemap', url: `${PY}pikos-zona-16-9fb9d90b-38bd-4d84-bb3b-714b477b2c87-menu` },
      { id: 'eskala-roosevelt', label: 'Píkos Eskala Roosevelt', area: 'C.C. Eskala Roosevelt, Mixco', check: 'sitemap', url: `${PY}pikos-eskala-roosevelt-494033a9-8a84-4419-8527-f38a9d9042fc-menu` },
      { id: 'sankris', label: 'Píkos Sankris Mall', area: 'C.C. Sankris, Zona 8 de Mixco', check: 'sitemap', url: `${PY}pikos-sankris-mall-c0d3065f-8cbb-48c5-a042-5b1ffa39f8ff-menu` },
    ],
  },
};

export const platforms = [delivery.ubereats, delivery.pedidosya];

export const INSTAGRAM_URL = 'https://www.instagram.com/pikos.gt/';
