Changelog — Vice City Games

⸻

v1.0 — 2025-09-29

Lanzamiento Inicial — Inicio del Proyecto
	•	Andrés (Diseño UX)
• Diseñó la estética general del sitio (Miami Vice / neón).
• Definió la estructura visual, wireframes y navegación base.
• Propuso el sistema de tabs por plataforma (PS5, Xbox, Switch, PC).
	•	Juanjo (Frontend Developer)
• Construyó la estructura HTML inicial.
• Implementó el sistema básico de navegación (Home, Shop, Cart).
• Estableció la distribución principal de las tarjetas de productos.
	•	Nico (JavaScript Engineer)
• Implementó el catálogo inicial usando Maps.
• Programó los tabs por consola y filtros básicos.
• Armó la primera versión del carrito.
	•	Johan (QA / Tester)
• Probó navegación del catálogo y del carrito.
• Reportó errores de imágenes y rutas.
• Ayudó a depurar comportamientos inconsistentes de UI.

⸻

v1.1 — 2025-09-30

Primera Actualización Grande
	•	Andrés (Diseño UX)
• Refinó el diseño visual de cada plataforma (PS5 azul/rosa, Xbox verde, Switch rojo/cyan, PC neón).
• Mejoró la coherencia de colores y sombras.
• Ajustó espaciados, alineaciones y jerarquía visual.
	•	Juanjo (Frontend Developer)
• Pulió tarjetas, layout, y mejoró la barra de búsqueda.
• Corrigió estilos rotos en el tab de PC.
• Implementó contenedores más limpios para imágenes.
	•	Nico (JavaScript Engineer)
• Añadió la primera versión del chatbot ViceBot con respuestas básicas.
• Agregó validación de campos para la búsqueda.
• Ajustó condiciones en filtros y price range.
	•	Johan (QA / Tester)
• Detectó problemas de UI en el tab de Xbox.
• Reportó botones que no funcionaban en Switch.
• Verificó repetición de productos en diferentes tabs.

⸻

v1.2 — 2025-11-29

Actualización de Catálogo — Trabajo de Juanjo
	•	Juanjo (Frontend Developer)
• Actualizó el catálogo completo: precios, géneros, plataformas, y disponibilidad.
• Agregó nuevas imágenes y verificó rutas rotas.
• Duplicó elementos necesarios en /img.
• Ajustó tarjetas que no cargaban debido a rutas incorrectas.
• Adaptó el layout para el nuevo volumen de productos.
	•	Nico (JavaScript Engineer)
• Ajustó la lógica de filtros para trabajar con los nuevos datos.
• Mejoró el sistema de búsqueda global.
• Revisó funciones de ordenamiento alfabético y por precio.
	•	Johan (QA / Tester)
• Reportó errores con rutas e imágenes faltantes.
• Probó nuevamente todos los tabs para asegurar consistencia.
• Validó comportamiento de filtros con el catálogo actualizado.
	•	Andrés (Diseño UX)
• Revisó coherencia visual del catálogo expandido.
• Ajustó colores y sombras en tarjetas nuevas.
• Propuso mejoras para la versión final del carrito.

⸻

v1.3 — 2025-11-30

Mega Actualización Visual + Funcional — Trabajo de Andrés

Mejoras Visuales
	•	Eliminación de símbolos flotantes de PlayStation.
	•	Eliminación de partículas animadas y overlays morados.
	•	Restauración completa del fondo img/bg.jpg sin tintes ni efectos.
	•	Reposición de la barra de búsqueda en su lugar original.
	•	Eliminación del ticker duplicado en Home.
	•	Corrección total de rutas para imágenes (img/vicebot.png, img/bg.jpg).

Mejoras Funcionales
	•	Implementación del carrito persistente mediante localStorage.
	•	Sistema de Winter Sale:
• 50% OFF videojuegos
• 25% OFF consolas
	•	Nuevo resumen del carrito con:
• Total original
• Total con descuento
• Ahorro total
• Puntos acumulados (10 por cada 100)
• Mensaje de canje: 50 puntos = 20% OFF extra
	•	Sistema de ordenamiento por precio y alfabético.
	•	Sistema de stock:
	•	Cada producto muestra unidades disponibles.
	•	Botón “Añadir al carrito” se desactiva cuando no hay stock.
	•	Estado “Agotado” visible.

✔ Chatbot ViceBot Mejorado
	•	Respuestas sobre oferta, puntos, plataforma, navegación y filtros.
	•	Limpieza del header y avatar reparado tras corregir rutas.