/**
 * SUCURSALES — fuente: Linktree oficial de Píkos (linktr.ee/pikos.gt), que lista 6 puntos con
 * enlace de Waze. Las direcciones completas solo están confirmadas para Zona 10 y Vía Majadas
 * (fichas públicas de Uber Eats); en las demás se usa el nombre del punto tal como lo publica Píkos.
 *
 * Campos:
 *  id       también es el nombre de la foto: src/assets/locations/<id>.webp
 *  name     nombre de la sucursal
 *  address  dirección / punto de referencia
 *  hours    horario (texto) o null si no está confirmado → no se muestra
 *  waze     enlace oficial de Waze (botón "Cómo llegar"), o null
 *  mapsUrl  enlace propio de Google Maps, o null para generar uno de búsqueda
 */
export const locations = [
  {
    id: 'zona-10',
    name: 'Píkos Zona 10',
    address: '13 Calle 05-19 Zona 10, Ciudad de Guatemala',
    hours: null,
    waze: 'https://www.waze.com/en/live-map/directions/pikos-zona-10-13-calle-zona-10,-guatemala?place=w.176619666.1766131124.37123516',
    mapsUrl: null,
  },
  {
    id: 'eskala-roosevelt',
    name: 'Píkos Eskala Roosevelt',
    address: 'C.C. Eskala Roosevelt, Calzada Roosevelt km 13.8, Zona 3 de Mixco',
    hours: null,
    waze: 'https://waze.com/ul/h9fxe68ryn',
    mapsUrl: null,
  },
  {
    id: 'zona-15',
    name: 'Píkos Zona 15',
    address: '2da. calle 19-46, Zona 15, Vista Hermosa, Edificio Vhista, Local 101, Ciudad de Guatemala',
    hours: null,
    waze: null,
    mapsUrl: null,
  },
  {
    id: 'via-majadas',
    name: 'Píkos Vía Majadas',
    address: '6a Calle 26-50 Zona 11, C.C. Vía Majadas, Local 15, Ciudad de Guatemala',
    hours: null,
    waze: 'https://www.waze.com/en/live-map/directions/pikos-via-majadas-interior-via-majadas-zona-11,-guatemala?place=w.176554130.1765803446.37136386',
    mapsUrl: null,
  },
  {
    id: 'santa-amelia',
    name: 'Píkos Santa Amelia',
    address: 'C.C. Santa Amelia, Zona 16, Ciudad de Guatemala',
    hours: null,
    waze: 'https://waze.com/ul/h9fxejnrvz',
    mapsUrl: null,
  },
  {
    id: 'punto-16',
    name: 'Píkos Punto 16',
    address: 'C.C. Punto 16, Local 5, Carretera a El Salvador',
    hours: null,
    waze: 'https://www.waze.com/en/live-map/directions?latlng=14.54816362%2C-90.4552567',
    mapsUrl: null,
  },
  {
    id: 'sankris-mall',
    name: 'Píkos Sankris Mall',
    address: 'C.C. Sankris Mall, Mixco',
    hours: null,
    waze: 'https://www.waze.com/en/live-map/directions/gt/guatemala/mixco/centro-comercial-sankris-mall?place=ChIJDbIN53cLiYURvtFXthhmNIc',
    mapsUrl: null,
  },
];

const q = (loc) => encodeURIComponent(`Pikos ${loc.address}`);

/** Ver la sucursal en Google Maps */
export const mapsLink = (loc) =>
  loc.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${q(loc)}`;

/** "Cómo llegar": enlace oficial de Waze si existe; si no, ruta en Google Maps */
export const directionsLink = (loc) =>
  loc.waze ?? `https://www.google.com/maps/dir/?api=1&destination=${q(loc)}`;

/** Mapa incrustado (sin API key) */
export const mapEmbedLink = (loc) => `https://www.google.com/maps?q=${q(loc)}&output=embed`;
