# Portafolio de Emil Heredia — listo para GitHub Pages

Este paquete contiene el sitio completo. No necesita instalar programas, compilar código ni mantener servicios adicionales.

## 1. Comprueba el diseño

Descomprime el ZIP y abre `index.html` en Chrome o Edge. Mantén `styles.css`, `app.js` y la carpeta `assets` junto a `index.html`.

## 2. Crea tu repositorio

En GitHub, crea un repositorio público llamado `TUUSUARIO.github.io`, reemplazando `TUUSUARIO` por tu nombre de usuario real. Por ejemplo, si tu usuario fuera `emil-ejemplo`, el nombre sería `emil-ejemplo.github.io` (es solo un ejemplo, no una cuenta verificada).

Si ese repositorio ya existe y tiene una página, no la reemplaces sin revisar sus archivos. Puedes crear otro repositorio llamado `portafolio`; en ese caso la dirección incluirá `/portafolio/`.

## 3. Sube los archivos

En tu repositorio usa **Add file > Upload files**. Arrastra el contenido descomprimido: `index.html`, `styles.css`, `app.js`, la carpeta `assets`, `.nojekyll` y esta guía. No subas solamente el ZIP: GitHub no lo descomprime para publicar.

`index.html` debe quedar directamente en la raíz del repositorio, junto a `assets`. No coloques una carpeta adicional que encierre todos los archivos. Pulsa **Commit changes** para guardarlos en la rama `main`.

## 4. Activa GitHub Pages

Entra en **Settings > Pages**.

- En **Source**, selecciona **Deploy from a branch**.
- En **Branch**, selecciona **main**.
- En la carpeta, selecciona **/(root)**.
- Pulsa **Save**.

GitHub mostrará la dirección publicada. La primera publicación puede tardar hasta unos 10 minutos. Tu URL será `https://TUUSUARIO.github.io/`, o `https://TUUSUARIO.github.io/portafolio/` si elegiste ese nombre de repositorio. Estos formatos son ejemplos: usa la dirección que GitHub muestre para tu cuenta.

## Qué contiene

- Portafolio de una página, en tonos azules y con tipografía ampliada.
- Retrato de Emil con su cámara profesional, editado a partir de sus fotos.
- Seis publicidades con visor ampliable.
- Marcas en movimiento y enlaces a TikTok.
- Correo: emiljesusheredia@gmail.com.
- Teléfono: +51 982 667 180.
- Navegación por secciones, versión móvil y soporte de movimiento reducido.

Los archivos usan rutas relativas y funcionan tanto en el dominio principal como en un repositorio de proyecto. El correo abre la aplicación de correo del visitante; el teléfono abre la función de llamadas cuando el dispositivo la admite.

## Para hacer cambios

El contenido está en `index.html`, los colores y tamaños en `styles.css`, y la galería y animaciones en `app.js`. Tus fotografías y diseños están dentro de `assets`. No hace falta ejecutar `npm` ni instalar dependencias.

## Fuentes de las instrucciones

- https://docs.github.com/es/pages/quickstart
- https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

La tipografía Nimbus Sans incluye su licencia en `assets/FONT-LICENSE.txt`.
