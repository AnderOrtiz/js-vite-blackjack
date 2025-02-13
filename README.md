
```markdown
# js-vite-blackjack

Este repositorio contiene el proyecto *Vite Blackjack*, el cual está dividido en dos ramas principales:

- **master**: Esta rama es utilizada para el *deploy* en GitHub Pages. Puedes acceder a la versión desplegada del proyecto en el siguiente enlace:  
  [https://anderortiz.github.io/js-vite-blackjack/](https://anderortiz.github.io/js-vite-blackjack/)

- **localhost**: Esta rama es utilizada para correr el proyecto localmente con Vite. Aquí es donde puedes desarrollar y realizar cambios antes de hacer el *deploy*.

## Instrucciones

### 1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/anderortiz/js-vite-blackjack.git
```

Luego navega al directorio del proyecto:

```bash
cd js-vite-blackjack
```

### 2. Instalar las dependencias

Una vez dentro del directorio del proyecto, instala las dependencias con `npm`:

```bash
npm install
```

### 3. Correr el proyecto localmente

Para correr el proyecto en tu máquina local, asegúrate de estar en la rama `localhost`:

```bash
git checkout localhost
```

Después, ejecuta el siguiente comando para iniciar el servidor de desarrollo con Vite:

```bash
npm run dev
```

Esto iniciará un servidor en `http://localhost:5173` (por defecto) donde podrás ver el proyecto en acción.

### 4. Despliegue en GitHub Pages

Si deseas hacer un *deploy* en GitHub Pages, asegúrate de estar en la rama `master`:

```bash
git checkout master
```

Luego, sube los cambios al repositorio de GitHub:

```bash
git push origin master
```

Esto actualizará la página desplegada en:  
[https://anderortiz.github.io/js-vite-blackjack/](https://anderortiz.github.io/js-vite-blackjack/)

## Notas

- Asegúrate de tener `node` y `npm` instalados en tu máquina. Puedes verificar las versiones instaladas con:

  ```bash
  node -v
  npm -v
  ```

- Si necesitas ayuda adicional con Vite, puedes consultar la [documentación oficial de Vite](https://vitejs.dev/).

