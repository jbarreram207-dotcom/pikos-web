import { createContext, useCallback, useContext, useMemo, useState } from 'react';

/* ---------- App (estado global: ¿ya terminó la pantalla de carga?) ---------- */
const AppContext = createContext({ ready: true });
export const useApp = () => useContext(AppContext);

export function AppProvider({ ready = true, children }) {
  const value = useMemo(() => ({ ready }), [ready]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/* ---------- Order (modal de pedido: PedidosYa / Uber Eats) ---------- */
const OrderContext = createContext({ isOpen: false, open: () => {}, close: () => {} });
export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
