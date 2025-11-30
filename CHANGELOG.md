📘 Changelog — Vice City Games

⸻

v1.0 — 2025-09-29

Lanzamiento Inicial — Inicio del Proyecto
	•	Andrés (Diseño UX) — Diseñó la estética general del sitio (Miami Vice / neón), definió la estructura de la página principal y los tabs de consolas.
	•	Juanjo (Frontend Developer) — Construyó la estructura HTML básica y el sistema de navegación (Home, Shop, Cart).
	•	Nico (JavaScript Engineer) — Implementó el catálogo inicial usando Maps, tabs de consola, filtros y lógica del carrito.
	•	Johan (QA / Tester) — Probó navegación del catálogo, carrito y ayudó a depurar problemas de imágenes.

⸻

v1.1 — 2025-09-30

Primera Actualización Grande
	•	Andrés (Diseño UX) — Mejoró el diseño visual de los tabs de plataforma (PS5 azul/rosa, Xbox verde, Switch rojo/cyan, PC).
	•	Juanjo (Frontend Developer) — Pulió tarjetas, layout y mejoró la barra de búsqueda.
	•	Nico (JavaScript Engineer) — Añadió el chatbot ViceBot con funciones básicas.
	•	Johan (QA / Tester) — Detectó issues de UI en Xbox y verificó botones de compra por plataforma.

⸻

v1.2 — 2025-11-29

Actualización de Catálogo — Trabajo de Juanjo
	•	Juanjo (Frontend Developer) —
	•	Actualizó el catálogo completo: precios, géneros y plataformas.
	•	Añadió nuevas imágenes, verificó rutas y duplicó elementos necesarios en la carpeta /img.
	•	Ajustó tarjetas que no cargaban por rutas incorrectas.
	•	Validó el funcionamiento de los filtros con los nuevos productos.
	•	Johan (QA / Tester) —
	•	Reportó errores con rutas, imágenes faltantes y botones que no cargaban correctamente.

⸻

v1.3 — 2025-11-30

Mega Actualización Visual + Funcional — Trabajo de Andrés

✔ Mejoras Visuales
	•	Eliminación de:
	•	Símbolos flotantes de PlayStation.
	•	Partículas/Orbs animadas.
	•	Vignette y overlays que teñían la pantalla de morado.
	•	Restauración completa del fondo img/bg.jpg sin filtros raros ni distorsiones.
	•	Reposición de la barra de búsqueda a su posición original, centrada y fija.
	•	Eliminación del ticker duplicado dentro del Home (ahora solo hay uno debajo del header).
	•	Corrección total de rutas para imágenes (img/vicebot.png, img/bg.jpg).

✔ Mejoras Funcionales
	•	Implementación de carrito persistente con localStorage (no se pierde al recargar).
	•	Sistema de Winter Sale:
	•	50% OFF en videojuegos.
	•	25% OFF en consolas.
	•	Nuevo resumen del carrito con:
	•	Total original, total con descuento, ahorro total.
	•	Puntos acumulados (10 puntos por cada $100).
	•	Nota para canjear 50 puntos por 20% OFF adicional.
	•	Sistema de ordenamiento por precio y alfabético.
	•	Sistema de stock:
	•	Cada producto muestra unidades disponibles.
	•	Botón “Añadir al carrito” se desactiva cuando no hay stock.
	•	Estado “Agotado” visible.

✔ Chatbot ViceBot Mejorado
	•	Respuestas sobre oferta, puntos, plataforma, navegación y filtros.
	•	Limpieza del header y avatar reparado tras corregir rutas.