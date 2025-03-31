# 🛍️ Proyecto Final - E-commerce en React

Este es mi proyecto final del curso de React, donde desarrollé una aplicación web de tipo e-commerce utilizando **React**, **React Router**, **Firebase (Firestore)** y **Context API** para el manejo del carrito.

---

## 🚀 Funcionalidades principales

- 📦 Listado de productos dinámico desde Firestore
- 🗂️ Filtro por categorías con React Router
- 🔍 Vista detallada de cada producto
- ➕ Selección de cantidad con control de stock (`ItemCount`)
- 🛒 Carrito global usando Context API
- 🧾 Formulario de checkout con generación de orden en Firestore
- 🔥 Conexión completa con Firebase (Firestore Database)

---

## 🧪 Tecnologías utilizadas

- React
- React Router DOM
- Context API
- Firebase (Firestore)
- Vite
- CSS base

---

## 🛠️ Estructura de componentes

src/ ├── components/ │ ├── Cart.jsx │ ├── CartWidget.jsx │ ├── CheckoutForm.jsx │ ├── ItemCount.jsx │ ├── ItemDetailContainer.jsx │ ├── ItemListContainer.jsx │ ├── ItemList.jsx │ ├── Item.jsx │ └── NotFound.jsx ├── context/ │ └── CartContext.jsx ├── firebaseConfig.js └── App.jsx

## 🔥 Configuración de Firebase

Este proyecto se conecta con Firebase usando `firebaseConfig.js`. Para poder utilizarlo localmente:

1. Crear tu propio proyecto en [Firebase Console](https://console.firebase.google.com)
2. Activar **Firestore Database**
3. Crear una colección llamada `productos` con campos como:
   - nombre (string)
   - descripcion (string)
   - categoria (string)
   - stock (number)
   - precio (number)

---

## 📂 Instalación local

```bash
git clone https://github.com/ReportFuco/ProyectoFinalFranciscoArancibia.git
cd tu-repo
npm install
npm run dev

