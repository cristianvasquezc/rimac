# RIMAC Seguros - Reto Frontend

Este proyecto es una aplicación web responsiva desarrollada en **React**, **TypeScript** y **Vite**, que simula el flujo de cotización y adquisición de seguros para **RIMAC Seguros**. La aplicación consume servicios mock, maneja estados globales, validación de formularios y ofrece un diseño limpio, moderno e interactivo siguiendo las especificaciones del reto.

---

## 🛠️ Stack Tecnológico

La aplicación está construida con las siguientes tecnologías y librerías:

- **React 19 & TypeScript**: Desarrollo rápido con tipado seguro y componentes funcionales.
- **Vite 8**: Servidor de desarrollo ultrarrápido y empaquetador eficiente.
- **Tailwind CSS v4**: Framework de utilidades CSS integrado con Vite mediante `@tailwindcss/vite` para estilos rápidos y responsivos.
- **Zustand**: Gestor de estado global ligero y rápido para persistir y compartir los datos del usuario y el plan seleccionado.
- **React Router DOM v7**: Manejo de rutas limpias e intuitivas (`/`, `/planes`, `/resumen`).
- **React Hook Form & Zod**: Manejo y validación estricta de formularios del lado del cliente (DNI/RUC, celular, consentimientos).
- **TanStack Query (React Query) v5**: Consumo y cacheo eficiente de los endpoints del API mock.
- **Axios**: Cliente HTTP para realizar peticiones externas de forma modular.
- **Heroicons**: Set de íconos estilizados e interactivos.

---

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js** (Versión LTS recomendada, 18.x o superior)
- **npm** (Viene integrado con Node.js) o un gestor alternativo como **yarn** o **pnpm**.

---

## Instalación y Configuración

Sigue estos sencillos pasos para tener el proyecto ejecutándose localmente:

### 1. Clonar e ingresar al repositorio

Si estás en una terminal de Git:

```bash
git clone https://github.com/cristianvasquezc/rimac

cd rimac
```

### 2. Instalar las dependencias

Ejecuta el siguiente comando para instalar todos los paquetes necesarios del proyecto:

```bash
npm install
```

### 3. Configuración de Variables de Entorno

El proyecto utiliza una API base para obtener los datos de usuario y los planes disponibles.

1. Duplica el archivo de ejemplo `.env.example` y nómbralo como `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Abre el archivo `.env.local` recién creado y asegúrate de que la variable `VITE_API_BASE_URL` apunte a la API de Rimac:
   ```env
   VITE_API_BASE_URL=https://rimac-front-end-challenge.netlify.app/api
   ```

---

## Ejecución del Proyecto

### Iniciar el Servidor de Desarrollo

Para levantar el servidor local de desarrollo con Hot Module Replacement (HMR):

```bash
npm run dev
```

Una vez iniciado, abre tu navegador en: [http://localhost:5173](http://localhost:5173)

---

## Producción y Despliegue

### Compilar el proyecto

Para generar los archivos listos para producción optimizados en la carpeta `dist/`:

```bash
npm run build
```

### Vista Previa de Producción

Para validar de forma local la compilación de producción antes de desplegarla:

```bash
npm run preview
```

Esto abrirá un servidor local que sirve el bundle estático compilado en `dist/`.

### Ejecutar Linter

Para revisar y corregir automáticamente problemas de calidad de código y formateo:

```bash
npm run lint
```

---

## Estructura del Proyecto

El código fuente está estructurado de manera modular y limpia en el directorio `src/`:

```text
src/
├── assets/          # Imágenes, logos y recursos estáticos
├── components/      # Componentes reutilizables agrupados por contexto
│   ├── cards/       # Tarjetas de planes de seguros
│   ├── carousel/    # Componentes deslizables y paginaciones
│   ├── forms/       # Formulario de login y validación
│   ├── navbar/      # Cabecera de navegación
│   └── ui/          # Elementos de UI (botones, inputs, loaders)
├── fonts/           # Fuentes personalizadas del proyecto (si aplica)
├── hooks/           # Custom Hooks para modularizar lógica
├── layouts/         # Layouts base (ej. MainLayout con Navbar)
├── lib/             # Configuraciones
├── pages/           # Vistas/Páginas principales de la aplicación
│   ├── main-page.tsx    # Landing Page / Login de Cotización
│   ├── plans-page.tsx   # Panel de selección de planes (Para mí / Para otro)
│   └── summary-page.tsx # Resumen de compra final con datos guardados
├── schemas/         # Esquemas de validación Zod
├── services/        # Archivos de API y servicios de comunicación con Axios
├── store/           # Estado global con Zustand (userStore, planStore)
├── types/           # Tipados de TypeScript
├── App.tsx          # Enrutador principal y estructura general
├── index.css        # Estilos globales y configuración de Tailwind CSS
└── main.tsx         # Punto de entrada de la aplicación
```

---

## Flujo de la Aplicación

1. **Página de Login (`/`)**:
   - Ingreso de documento de identidad (DNI/RUC) y celular.
   - Validación en tiempo real con mensajes de error descriptivos.
   - Al enviar el formulario, se consulta el endpoint `/user.json` para cargar el perfil del cliente y se le redirecciona a la sección de planes.
2. **Página de Planes (`/planes`)**:
   - Barra de progreso que indica el paso actual.
   - Opción para elegir a quién asegurar: "Para mí" o "Para alguien más".
   - Si se selecciona "Para alguien más", se aplica de forma automática un **5% de descuento** en todos los planes mostrados.
   - Consumo dinámico de planes filtrando aquellos que no correspondan con la edad del usuario (calculada en base a los datos retornados por la API).
   - Tarjetas detalladas de coberturas y precios de cada plan.
3. **Página de Resumen (`/resumen`)**:
   - Vista final de confirmación con los datos del titular (DNI, Celular, Nombre completo).
   - Detalle del plan contratado y el costo mensual definitivo reflejando descuentos aplicados.
   - Opción para regresar o iniciar un nuevo flujo.
