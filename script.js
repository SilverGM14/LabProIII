function mostrarInfo(etiqueta) {
    switch (etiqueta) {
        case 1:
            document.querySelector('.background-info').innerHTML = `
                <p>HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear páginas web. Define la estructura y el contenido de una página utilizando una variedad de etiquetas y elementos.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_html.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
            case 2:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta DOCTYPE define el tipo de documento y la versión de HTML utilizada en una página web. Especifica la sintaxis que el navegador debe usar para interpretar la página correctamente.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_doctype.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 3:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;head&gt; contiene información sobre el documento, como el título de la página, enlaces a archivos CSS y JavaScript, metadatos y más. Esta sección no se muestra en el navegador, pero proporciona información importante sobre el documento.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_head.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 4:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;meta&gt; se utiliza para especificar metadatos adicionales sobre un documento HTML, como el conjunto de caracteres, la descripción, las palabras clave y otros datos que los navegadores y motores de búsqueda pueden utilizar.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_meta.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 5:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;link&gt; se utiliza para enlazar un documento HTML con recursos externos, como archivos CSS, fuentes o iconos. Especifica la relación entre el documento actual y el recurso enlazado.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_link.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 6:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;body&gt; define el cuerpo del documento HTML y contiene todo el contenido visible, como texto, imágenes, enlaces, elementos multimedia, etc.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_body.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 7:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;footer&gt; define el pie de página de un documento HTML o de una sección específica dentro de un documento. Contiene información como derechos de autor, enlaces de contacto, etc.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_footer.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 8:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;section&gt; define una sección en un documento HTML. Se utiliza para agrupar contenido temáticamente relacionado y a menudo se presenta con un título.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_section.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 9:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;header&gt; define la cabecera de un documento HTML o de una sección específica dentro de un documento. Generalmente contiene el encabezado de la página, como el logotipo, el título, la navegación, etc.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_header.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 10:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;nav&gt; define una sección de navegación en un documento HTML. Se utiliza para contener enlaces de navegación, como menús, listas de enlaces o barras de navegación.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_nav.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
                case 11:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;article&gt; se utiliza para definir un artículo independiente, como un post de blog o un artículo de periódico, en un documento HTML. Contiene contenido autónomo que puede existir y ser reutilizado de forma independiente del resto del contenido del sitio web.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_article.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 12:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;aside&gt; se utiliza para definir contenido relacionado, como barras laterales o notas marginales, en un documento HTML. Contiene información secundaria que es relevante para el contenido principal, pero que puede existir de forma independiente.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_aside.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 13:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;main&gt; se utiliza para definir el contenido principal o el contenido principal de un documento HTML. Debería contener el contenido central de la página, excluyendo barras laterales, encabezados y pies de página.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_main.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 14:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;figure&gt; se utiliza para representar contenido autónomo, como imágenes, gráficos, ilustraciones, diagramas, etc., en un documento HTML. Se puede utilizar con la etiqueta &lt;figcaption&gt; para proporcionar una descripción o título para el contenido.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_figure.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 15:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;figcaption&gt; se utiliza junto con la etiqueta &lt;figure&gt; para proporcionar una descripción o título para el contenido autónomo en un documento HTML, como una imagen o un diagrama.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_figcaption.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 16:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;details&gt; se utiliza para crear un elemento desplegable en un documento HTML. Puede contener información adicional que se puede mostrar u ocultar al hacer clic en su título.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_details.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 17:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;title&gt; se utiliza para definir el título de un documento HTML. Aparece en la barra de título del navegador o en la pestaña de la página y proporciona información sobre el contenido del documento.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_title.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 18:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;style&gt; se utiliza para agregar estilos CSS en línea a un documento HTML. Define estilos para el contenido del documento, como colores, fuentes, márgenes, etc.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_style.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 19:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;script&gt; se utiliza para incrustar o referenciar un script en un documento HTML. Puede contener scripts JavaScript, scripts de cliente o enlaces a archivos externos de script.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_script.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 20:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;noscript&gt; se utiliza para proporcionar contenido alternativo para usuarios que tienen JavaScript deshabilitado en su navegador. El contenido dentro de esta etiqueta se muestra solo si JavaScript está desactivado o no es compatible.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_noscript.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
        case 21:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;base&gt; especifica la URL base para todas las URL relativas en una página. Se utiliza dentro del elemento &lt;head&gt; y proporciona una URL base para las URL relativas en el documento.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_base.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 22:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;br&gt; define un salto de línea en un texto. Se utiliza para separar contenido en una línea sin iniciar un nuevo párrafo.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_br.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 23:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;hr&gt; representa un quiebre temático en un documento HTML. Se utiliza para separar contenido, como un cambio de tema o una transición entre secciones.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_hr.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 24:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;img&gt; se utiliza para insertar imágenes en un documento HTML. Es un elemento vacío, lo que significa que no tiene contenido y no requiere una etiqueta de cierre.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_img.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 26:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;object&gt; se utiliza para incrustar objetos multimedia, como videos, audio, imágenes, mapas y más, en un documento HTML.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_object.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 27:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;param&gt; se utiliza junto con la etiqueta &lt;object&gt; para proporcionar parámetros y valores para objetos incrustados, como archivos Flash, Java, etc.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_param.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 28:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;video&gt; se utiliza para reproducir videos o películas en una página web. Es compatible con varios formatos de video y ofrece controles integrados para reproducir, pausar y ajustar el volumen del video.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_video.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 29:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;audio&gt; se utiliza para reproducir archivos de audio en una página web. Permite a los desarrolladores web incorporar audio en una página con controles de reproducción integrados.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_audio.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 30:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;source&gt; especifica múltiples fuentes para medios como videos y audio. Permite al navegador elegir la fuente más adecuada según el tipo de medio y el formato compatible.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_source.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 31:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;track&gt; se utiliza junto con la etiqueta &lt;video&gt; o &lt;audio&gt; para especificar subtítulos, subtítulos o descripciones de pistas de audio y video.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_track.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 32:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;canvas&gt; se utiliza para dibujar gráficos, gráficos, animaciones y más en una página web utilizando JavaScript. Proporciona un área de dibujo dinámica en la que los desarrolladores pueden dibujar contenido de forma programática.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_canvas.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 33:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;map&gt; se utiliza junto con la etiqueta &lt;area&gt; y la etiqueta &lt;img&gt; para crear imágenes sensibles al clic. Define áreas sensibles en una imagen y los hipervínculos asociados a esas áreas.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_map.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 34:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;area&gt; se utiliza junto con la etiqueta &lt;map&gt; y la etiqueta &lt;img&gt; para definir áreas sensibles al clic en una imagen. Cada área puede tener un hipervínculo asociado.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_area.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 35:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;table&gt; se utiliza para crear tablas en un documento HTML. Permite organizar datos en filas y columnas, lo que facilita la visualización y comprensión de la información.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_table.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 36:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;caption&gt; se utiliza dentro de la etiqueta &lt;table&gt; para proporcionar una descripción o título para una tabla. Se muestra sobre la tabla y ayuda a los usuarios a comprender su contenido.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_caption.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 37:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;colgroup&gt; se utiliza para agrupar columnas en una tabla y aplicar estilos comunes a esas columnas. Permite especificar propiedades de estilo para varias columnas al mismo tiempo.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_colgroup.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 38:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;col&gt; se utiliza dentro de la etiqueta &lt;colgroup&gt; para definir propiedades de estilo para columnas individuales en una tabla HTML. Es una forma de aplicar estilos a columnas específicas.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_col.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 39:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;tbody&gt; se utiliza para agrupar filas en una tabla HTML. Define el cuerpo de la tabla y contiene una o más filas de datos que se muestran dentro de la tabla.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_tbody.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 40:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;thead&gt; se utiliza para agrupar filas de encabezado en una tabla HTML. Define la parte superior de la tabla y contiene una o más filas de encabezado que describen el contenido de las columnas.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_thead.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 41:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;tfoot&gt; se utiliza para agrupar filas de pie de página en una tabla HTML. Define la parte inferior de la tabla y contiene una o más filas de resumen o totales.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_tfoot.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 42:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;tr&gt; se utiliza para definir una fila en una tabla HTML. Contiene una o más celdas de tabla (&lt;td&gt; o &lt;th&gt;) que forman las columnas de esa fila.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_tr.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 43:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;td&gt; se utiliza para definir una celda de datos en una tabla HTML. Se encuentra dentro de una fila (&lt;tr&gt;) y contiene el contenido real de esa celda.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_td.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 44:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;th&gt; se utiliza para definir una celda de encabezado en una tabla HTML. Se encuentra dentro de una fila de encabezado (&lt;tr&gt;) y contiene el encabezado de esa columna.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_th.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 45:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;form&gt; se utiliza para crear un formulario en una página web. Contiene elementos de entrada como campos de texto, botones, casillas de verificación, botones de opción, etc.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_form.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 46:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;label&gt; se utiliza para asociar un texto descriptivo con un elemento de formulario en HTML. Mejora la accesibilidad y la usabilidad de los formularios al proporcionar etiquetas descriptivas para los campos de entrada.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_label.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 47:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;input&gt; se utiliza para crear controles de formulario interactivos en una página web. Puede ser de varios tipos, como texto, contraseña, casilla de verificación, botón de radio, botón de opción, etc.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_input.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 48:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;button&gt; se utiliza para crear un botón en una página web. Puede contener texto, imágenes u otros elementos y puede realizar acciones cuando se hace clic.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_button.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 49:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;select&gt; se utiliza para crear listas desplegables en formularios HTML. Permite a los usuarios seleccionar una opción de una lista predefinida de opciones.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_select.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 50:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;datalist&gt; se utiliza junto con la etiqueta &lt;input&gt; para proporcionar una lista de opciones para autocompletar el valor de entrada. Permite a los usuarios seleccionar una opción de una lista predefinida mientras escriben en el campo de entrada.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_datalist.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 51:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;optgroup&gt; se utiliza dentro de la etiqueta &lt;select&gt; para agrupar opciones relacionadas en una lista desplegable. Permite organizar opciones en categorías para facilitar la selección.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_optgroup.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 52:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;option&gt; se utiliza dentro de la etiqueta &lt;select&gt; o &lt;datalist&gt; para definir una opción en una lista desplegable o una lista de opciones. Especifica el valor y el texto visible de la opción.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_option.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 53:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;textarea&gt; se utiliza para crear áreas de texto en un formulario HTML. Permite a los usuarios ingresar texto de varias líneas en un campo de entrada.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_textarea.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
            case 54:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;textarea&gt; se utiliza para crear un área de texto de múltiples líneas en un formulario HTML. Los usuarios pueden ingresar texto largo en este campo, que se enviará al servidor cuando se envíe el formulario.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_textarea.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
        case 55:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;output&gt; se utiliza para mostrar los resultados de un cálculo o proceso en un formulario HTML. Puede mostrar el resultado en forma de texto o cualquier otro tipo de contenido HTML.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_output.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 56:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;progress&gt; se utiliza para mostrar el progreso de una tarea en un formulario HTML, como la carga de un archivo o la realización de un proceso largo. Puede indicar visualmente cuánto se ha completado una tarea.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_progress.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 57:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;meter&gt; se utiliza para medir y mostrar el valor dentro de un rango conocido o un intervalo. Puede ser útil para indicar el progreso, la capacidad o cualquier otra medida cuantificable.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_meter.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 58:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;fieldset&gt; se utiliza para agrupar elementos de formulario relacionados en HTML y proporcionar una estructura visual para el formulario. Puede incluir una leyenda para describir el propósito del grupo de campos.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_fieldset.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 59:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;legend&gt; se utiliza junto con la etiqueta &lt;fieldset&gt; para proporcionar una descripción o título para el grupo de campos en un formulario HTML. Ayuda a mejorar la accesibilidad y la usabilidad del formulario.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_legend.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 60:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;summary&gt; se utiliza junto con la etiqueta &lt;details&gt; para proporcionar un resumen o título visible para el contenido desplegable en HTML. Ayuda a los usuarios a comprender el contenido y la función del elemento &lt;details&gt;.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_summary.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 61:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;command&gt; se utiliza para definir un comando en un menú contextual o de navegación. Se usa principalmente en combinación con la etiqueta &lt;menu&gt;.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_command.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 62:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;dialog&gt; se utiliza para crear una ventana de diálogo o una ventana emergente en una página web. Puede contener contenido HTML personalizado y ser controlado mediante JavaScript.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_dialog.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 63:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;template&gt; se utiliza para definir fragmentos de contenido HTML que se pueden clonar y usar en la página web mediante JavaScript. Es útil para crear componentes reutilizables y dinámicos.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_template.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 64:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;datagrid&gt; se utilizaba en HTML para definir un control de datos interactivo. Sin embargo, ha sido eliminado de las especificaciones HTML5 y ya no se recomienda su uso.</p>
                <p>Ejemplo de uso:</p>
                <p>Esta etiqueta no es compatible con HTML5.</p>`;
            break;
        case 65:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;hgroup&gt; se utilizaba en HTML para agrupar los elementos de encabezado (&lt;h1&gt; a &lt;h6&gt;) cuando formaban parte de un tema o sección común en una página web. Sin embargo, ha sido eliminado de las especificaciones HTML5 y ya no se recomienda su uso.</p>
                <p>Ejemplo de uso:</p>
                <p>Esta etiqueta no es compatible con HTML5.</p>`;
            break;
        case 66:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;mark&gt; se utiliza para resaltar o marcar partes de texto en una página web. El texto marcado suele aparecer resaltado en amarillo en la mayoría de los navegadores.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_mark.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 67:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;meter&gt; se utiliza para medir y mostrar el valor dentro de un rango conocido o un intervalo. Puede ser útil para indicar el progreso, la capacidad o cualquier otra medida cuantificable.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_meter.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 68:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;time&gt; se utiliza para representar fechas y horarios en HTML. Proporciona una forma estandarizada de mostrar información relacionada con el tiempo en una página web.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_time.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 69:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;ruby&gt; se utiliza junto con las etiquetas &lt;rt&gt; y &lt;rp&gt; para representar la pronunciación de caracteres o palabras en idiomas asiáticos como el japonés o el chino. Ayuda a mejorar la comprensión de los textos para los lectores.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_ruby.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 70:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;rt&gt; se utiliza junto con la etiqueta &lt;ruby&gt; para especificar la pronunciación de caracteres o palabras en idiomas asiáticos como el japonés o el chino. Se coloca justo después del texto que se pronuncia de manera diferente.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_rt.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 71:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;rp&gt; se utiliza junto con la etiqueta &lt;ruby&gt; para proporcionar una alternativa de presentación para los navegadores que no admiten la representación correcta de la pronunciación en idiomas asiáticos. Se coloca justo después de la etiqueta &lt;rt&gt;.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_rp.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 72:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;data&gt; se utiliza para asociar datos a elementos HTML, como gráficos o diagramas. Puede contener información adicional sobre el elemento y ser accesible mediante scripts.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_data.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 73:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;keygen&gt; se utiliza para generar una clave privada y pública para su uso en formularios HTML. Es útil para la autenticación y la seguridad en línea.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_keygen.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
        case 74:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;sub&gt; se utiliza para representar texto o contenido que debe mostrarse como subíndice en una página web. Se utiliza comúnmente para fórmulas químicas, ecuaciones matemáticas y notas al pie.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_sub.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
            case 75:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;sup&gt; se utiliza para representar texto o contenido que debe mostrarse como superíndice en una página web. Se utiliza comúnmente para exponentes, fechas y notas al pie.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_sup.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 76:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;code&gt; se utiliza para representar fragmentos de código o texto que deben mostrarse en una fuente monoespaciada en una página web. Se utiliza comúnmente para mostrar código fuente y ejemplos de programación.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_code.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 77:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;blockquote&gt; se utiliza para representar citas largas o bloques de texto citado en una página web. Puede incluir atributos para indicar la fuente de la cita.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_blockquote.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 78:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;abbr&gt; se utiliza para representar una abreviatura o un acrónimo en una página web. Puede incluir un atributo title para proporcionar una descripción completa de la abreviatura.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_abbr.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 79:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;cite&gt; se utiliza para representar el título de una obra, como un libro, una película o un artículo, en una página web. Proporciona un formato especial para resaltar el título de la obra.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_cite.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 80:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;dfn&gt; se utiliza para representar la definición de un término en una página web. Proporciona un formato especial para resaltar la definición y ayudar a los lectores a comprender su significado.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_dfn.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 81:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;kbd&gt; se utiliza para representar la entrada del teclado, como las teclas, en una página web. Se muestra en una fuente monoespaciada por defecto para distinguirla del texto normal.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_kbd.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 82:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;samp&gt; se utiliza para representar la salida de un programa, como el resultado de un script o un fragmento de código, en una página web. Se muestra en una fuente monoespaciada por defecto para distinguirla del texto normal.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_samp.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 83:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;var&gt; se utiliza para representar una variable en un contexto matemático o técnico en una página web. Se muestra en una fuente cursiva por defecto para distinguirla del texto normal.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_var.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 84:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;small&gt; se utiliza para representar texto o contenido que debe mostrarse en un tamaño de fuente más pequeño en una página web. Es útil para notas al pie, advertencias y texto legal.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_small.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 85:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;bdi&gt; se utiliza para representar texto que debe ser aislado del resto del texto y, posiblemente, formateado de manera diferente, como para direcciones de texto en idiomas bidireccionales.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_bdi.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 86:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;bdo&gt; se utiliza para controlar la dirección del texto, como de derecha a izquierda (RTL) o de izquierda a derecha (LTR), en una página web. Es útil para idiomas con escritura no estándar.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_bdo.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 87:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;wbr&gt; se utiliza para especificar un posible punto de quiebre dentro de una palabra en una página web. Indica al navegador dónde es seguro dividir una palabra si es necesario.</p>
                    <p>Ejemplo de uso:</p>
                    <a href='https://www.w3schools.com/tags/tag_wbr.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                break;
            case 88:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;datagrid&gt; se utilizaba en HTML para definir un control de datos interactivo. Sin embargo, ha sido eliminado de las especificaciones HTML5 y ya no se recomienda su uso.</p>
                    <p>Ejemplo de uso:</p>
                    <p>Esta etiqueta no es compatible con HTML5.</p>`;
                break;
            case 89:
                document.querySelector('.background-info').innerHTML = `
                    <p>La etiqueta &lt;hgroup&gt; se utilizaba en HTML para agrupar los elementos de encabezado (&lt;h1&gt; a &lt;h6&gt;) cuando formaban parte de un tema o sección común en una página web. Sin embargo, ha sido eliminado de las especificaciones HTML5 y ya no se recomienda su uso.</p>
                    <p>Ejemplo de uso:</p>
                    <p>Esta etiqueta no es compatible con HTML5.</p>`;
                break;
            case 90:
            document.querySelector('.background-info').innerHTML = `
                <p>La etiqueta &lt;mark&gt; se utiliza para resaltar o marcar partes de texto en una página web. El texto marcado suele aparecer resaltado en amarillo en la mayoría de los navegadores.</p>
                <p>Ejemplo de uso:</p>
                <a href='https://www.w3schools.com/tags/tag_mark.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
            break;
                case 91:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;meter&gt; se utiliza para medir y mostrar el valor dentro de un rango conocido o un intervalo. Puede ser útil para indicar el progreso, la capacidad o cualquier otra medida cuantificable.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_meter.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 92:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;progress&gt; se utiliza para representar el progreso de una tarea en una página web. Puede ser útil para mostrar el estado de carga de una página, la duración de una descarga o cualquier otra tarea en curso.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_progress.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 93:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;time&gt; se utiliza para representar fechas y horarios en HTML. Proporciona una forma estandarizada de mostrar información relacionada con el tiempo en una página web.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_time.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 94:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;ruby&gt; se utiliza para representar texto con anotaciones fonéticas o caracteres de otro idioma en una página web. Es útil para mostrar pronunciaciones, traducciones y otros detalles relacionados con el texto.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_ruby.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 95:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;rt&gt; se utiliza junto con la etiqueta &lt;ruby&gt; para definir las anotaciones fonéticas o los caracteres de otro idioma asociados con un texto en una página web. Se coloca después del texto principal y proporciona la pronunciación o la traducción del texto.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_rt.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 96:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;rp&gt; se utiliza junto con la etiqueta &lt;ruby&gt; para proporcionar texto de relleno o alternativo para navegadores que no admiten la representación de anotaciones fonéticas. Se coloca antes y después de la etiqueta &lt;rt&gt; en esos navegadores.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_rp.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 97:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;data&gt; se utiliza para asociar un valor a un elemento HTML, como un gráfico o un medidor, en una página web. Puede ser útil para almacenar datos que se pueden utilizar con scripts o estilos personalizados.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_data.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 98:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;keygen&gt; se utiliza para generar pares de claves pública y privada en una página web. Es útil para crear certificados digitales y otros mecanismos de autenticación.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_keygen.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 99:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;sub&gt; se utiliza para representar texto o contenido que debe mostrarse como subíndice en una página web. Se utiliza comúnmente para fórmulas químicas, ecuaciones matemáticas y notas al pie.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_sub.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 100:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;sup&gt; se utiliza para representar texto o contenido que debe mostrarse como superíndice en una página web. Se utiliza comúnmente para exponentes, fechas y notas al pie.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_sup.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 101:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;samp&gt; se utiliza para representar la salida de un programa, como el resultado de un script o un fragmento de código, en una página web. Se muestra en una fuente monoespaciada por defecto para distinguirla del texto normal.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_samp.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;
                case 102:
                    document.querySelector('.background-info').innerHTML = `
                        <p>La etiqueta &lt;dfn&gt; se utiliza para representar la definición de un término en una página web. Es útil para resaltar y definir términos técnicos, acrónimos y otras palabras específicas en el contexto de un documento.</p>
                        <p>Ejemplo de uso:</p>
                        <a href='https://www.w3schools.com/tags/tag_dfn.asp' target='_blank' rel='noopener noreferrer'>Ver ejemplo en W3Schools</a>`;
                    break;                                         
                        }       
}