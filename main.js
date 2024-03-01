// importamos la librería
import * as d3 from "d3";

// cargamos el archivo json que hemos generado previamente
// en este caso, el archvio lo hemos ubicado en un servidor apache
d3.json("http://localhost/countries.json").then(geodata => {

  // almacenamos en una variable la proyección a utilizar
  // en este caso, utilizamos la proyección Natural Earth (http://www.shadedrelief.com/NE_proj/)
  let projection = d3.geoNaturalEarth1()

  // creamos el elemento SVG asignándole la proyección definida anteriormente
  let generator = d3.geoPath().projection(projection);

  // añadimos el SVG en el fichero html, justo en la etiqueta que hemos creado con el nombre svg.
  d3.select("svg")

    .selectAll("path")

    // añadimos los datos
    .data(geodata.features)

    .join("path")

    .attr("d", generator)

    // añadimos algunos estilos básicos en el mapa
    .attr('stroke', '#000')

    .attr('fill', '#fff')

});