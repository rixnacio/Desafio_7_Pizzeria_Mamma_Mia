# Hito 7 - Pizzería Mamma Mía

Hito 7 de React Router II.

## Requisitos
- Node.js y npm instalados.

## Ejecutar el backend
1. Abrir una terminal dentro de `backend`.
2. Ejecutar `npm install`.
3. Si el proyecto necesita variables de entorno, copiar `.env.example` como `.env` y completar la clave privada.
4. Ejecutar `npm start`. El servidor estará disponible en `http://localhost:5000`.

## Ejecutar el frontend
1. Abrir otra terminal dentro de `frontend`.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.
4. Abrir la dirección local indicada por Vite.

## Requerimientos implementados
1. `useParams` obtiene el identificador de la URL y `Pizza.jsx` consulta `GET /api/pizzas/:id`.
2. `UserContext` almacena el token simulado, inicialmente `true`, y ofrece `logout()` para cambiarlo a `false`.
3. `Navbar.jsx` utiliza `UserContext`: muestra Profile/Logout con token verdadero y Login/Register con token falso. Home y Total permanecen visibles.
4. `Cart.jsx` deshabilita el botón Pagar cuando el token es falso.
5. Las rutas `/profile`, `/login` y `/register` están protegidas según el estado del token.

## Nota
La autenticación es simulada, según la pauta del hito. No se valida una sesión real contra el backend.
