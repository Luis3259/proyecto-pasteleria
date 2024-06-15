import React, { useState } from "react";
import Ingredientes from "../components/Ingredientes";

const components = {/*esta parte de aca agregamos varios componenetes*/
    chocolate: {
        component: Ingredientes, props: {
            titulo: "Pastel de chocolate",
            imagen: "/Imagenes/pastel de chocolate.jpg",
            lista: `
            <ul>
              <li>1 1/2 Barras de Mantequilla a temperatura ambiente (90 g c/u)</li>
              <li>1 Lata de Leche Condensada LA LECHERA®</li>
              <li>3 Huevos</li>
              <li>1 1/2 Tazas de Harina de trigo</li>
              <li>1 Cucharadita de Polvo para hornear</li>
              <li>1 1/2 Barras de Chocolate semiamargo fundido (150 g c/u)</li>
              <li>3 Envases de Media Crema NESTLÉ® (190 g c/u)</li>
              <li>3 Barras de Chocolate semiamargo en trozos (150 g c/u)</li>
            </ul>
             `,
            preparacion: `
            <ol>
                <li>Horno precalentado a 180 °C.</li>
                <li>Para el pastel, acrema la mantequilla; agrega la Leche Condensada LA LECHERA®, los huevos, la harina, el polvo para hornear y 1 ½ barras de chocolate fundido. Vierte la preparación en un molde para pastel previamente engrasado y enharinado y llena hasta ¾ partes, hornea a 180 °C por 30 a 40 minutos o hasta que al introducir un palillo salga limpio. Retira del horno y deja enfriar.</li>
                <li>Para el betún, calienta la Media Crema NESTLÉ® y las 3 barras de chocolate picado hasta que se funda; retira del fuego y refrigera 2 horas o hasta que esté firme. Bate el betún en una batidora y reserva.</li>
                <li>Desmolda el pastel y corta en tres capas. Coloca un poco de betún en la base, una tapa de pastel, betún y la parte restante de pastel; cubre el pastel con el resto del betún, refrigera por 30 minutos y ofrece.</li>
            </ol>`
        }
    },
    pie: {
        component: Ingredientes, props: {
            titulo: "Pie de limon",
            imagen: "/Imagenes/pie de limon.png",
            lista: `
                <h3>Para la masa:</h3>
                <ul>
                    <li>2 tazas de harina sin polvos de hornear</li>
                    <li>4 cucharadas de azúcar flor</li>
                    <li>100 gr de mantequilla a temperatura ambiente</li>
                    <li>2 yemas de huevo</li>
                    <li>2 cucharaditas de Esencia de Vainilla Gourmet</li>
                </ul>

                <h3>Para el relleno:</h3>
                <ul>
                    <li>2 tarros de leche condensada</li>
                    <li>1 taza de jugo de limón</li>
                    <li>3 yemas de huevo</li>
                </ul>

                <h3>Para el merengue:</h3>
                <ul>
                    <li>4 claras de huevo</li>
                    <li>¾ taza de azúcar</li>
                    <li>1 cucharada de azúcar flor (opcional para decorar)</li>
                </ul>
                 `,
            preparacion: `
                <h2>Preparación de la masa:</h2>
                <ol>
                    <li>Juntar la harina con el azúcar flor. Agregar la mantequilla y con las manos formar migas.</li>
                    <li>Agregar la Esencia de Vainilla Gourmet y las yemas, mezclar hasta formar una masa blanda pero no pegajosa.</li>
                    <li>Poner en una bolsa plástica y refrigerar por 30 minutos.</li>
                    <li>Calentar el horno a 180°C.</li>
                    <li>Mantequillar un molde de tarta desmontable de 26 cm. Poner la masa en el fondo y lados del molde y pinchar la masa con un tenedor.</li>
                    <li>Hornear la masa por 15 minutos.</li>
                </ol>

                <h2>Preparación del relleno:</h2>
                <ol>
                    <li>Mezclar la leche condensada y el jugo de limón. Revolver hasta tener una mezcla homogénea.</li>
                    <li>Agregar las yemas de a una, revolviendo bien. Reservar.</li>
                </ol>

                <h2>Preparación del merengue:</h2>
                <ol>
                    <li>Batir las claras hasta que estén a punto de nieve.</li>
                    <li>Agregar el azúcar de a poco, batir hasta obtener un merengue firme y brillante.</li>
                    <li>Agregar el azúcar flor y batir hasta integrar.</li>
                </ol>

                <h2>Armado del Pie de Limón:</h2>
                <ol>
                    <li>Sacar la masa del horno, cubrir con el relleno de limón y luego tapar completamente con el merengue.</li>
                    <li>Volver la tarta al horno y hornear por 15 minutos o hasta que el merengue esté levemente dorado.</li>
                    <li>Enfriar, desmoldar y servir.</li>
                </ol>`
        }
    },
    cheesecake: {
        component: Ingredientes, props: {
            titulo: "cheesecake",
            imagen: "/Imagenes/cheesecake.png",
            lista: `
            <ul>
                <li>1 Barra de mantequilla derretida (90 g)</li>
                <li>30 Galletas Marías molidas</li>
                <li>3 Paquetes de queso crema a temperatura ambiente (190 g cada uno)</li>
                <li>1 Lata de Leche Condensada LA LECHERA®</li>
                <li>1 Lata de Media Crema NESTLÉ®</li>
                <li>2 Limones (su ralladura)</li>
                <li>2 Limones (su jugo)</li>
                <li>3 Sobres de grenetina (7 g cada uno), hidratada en 1/4 de taza de agua y disuelta a baño María</li>
                <li>1/4 Taza de fresas desinfectadas</li>
            </ul>
             `,
            preparacion: `
            <ol>
                <li>Para la base, mezcla la mantequilla con las galletas; vacía en un molde para pay y cubre el fondo con la mezcla de galleta.</li>
                <li>Para el relleno, bate el queso crema hasta que esté suave, agrega la Leche Condensada LA LECHERA®, la Media Crema NESTLÉ®, la ralladura y el jugo de limón; con la batidora encendida agrega la grenetina poco a poco. Vierte sobre la base y refrigera durante 2 horas o hasta que esté firme.</li>
                <li>Decora con las fresas y refrigera por 30 minutos más.</li>
            </ol>
            `
        }
    },
    brownie: {
        component: Ingredientes, props: {
            titulo: "Brownie",
            imagen: "/Imagenes/brownie.jpg",
            lista: `
            <ul>
                <li>3/4 Taza de cocoa</li>
                <li>3 Huevos batidos</li>
                <li>2 Barras de Mantequilla fundida (90 g cada una)</li>
                <li>1 1/4 Tazas de Azúcar</li>
                <li>1/3 Taza de Harina pasada por un colador</li>
                <li>4 Barras de Chocolate con leche CARLOS V® (18 g cada una)</li>
                <li>1/2 Taza de cocoa</li>
                <li>1/2 Taza de Azúcar</li>
                <li>2 Barras de Mantequilla a temperatura ambiente (90 g cada una)</li>
                <li>2 Barras de Chocolate con leche CARLOS V® (18 g cada una)</li>
            </ul>
             `,
            preparacion: `
            <ol>
                <li>Horno precalentado a 180 °C.</li>
                <li>Mezcla ¾ de taza de cocoa con los huevos, 2 barras de mantequilla, 1 ¼ tazas de azúcar y la harina hasta integrar por completo.</li>
                <li>Vierte la mezcla en un molde para pastel previamente engrasado y enharinado; coloca encima 4 barras de Chocolate con Leche CARLOS V® troceadas. Hornea a 180 °C durante 35 minutos o hasta que el centro esté firme, retira del horno, deja enfriar y desmolda.</li>
                <li>Para la crema de chocolate, bate ½ taza de cocoa con ½ taza de azúcar y 2 barras de mantequilla hasta integrar; coloca la crema en una manga pastelera con duya y decora el pastel. Coloca 2 barras de Chocolate con Leche CARLOS V® y ofrece.</li>
            </ol>
            `
        }
    },
    chispas: {
        component: Ingredientes, props: {
            titulo: "Galletas con chispas de chocolate",
            imagen: "/Imagenes/chispas.png",
            lista: `
            <ul>
                <li>1 1/2 Barras de Mantequilla sin sal a temperatura ambiente (135 g)</li>
                <li>1 Lata de Leche Condensada LA LECHERA®</li>
                <li>1 Cucharadita de Esencia de vainilla</li>
                <li>1 Huevo</li>
                <li>2 1/2 Tazas de Harina de trigo</li>
                <li>1 Cucharadita de Polvo para hornear</li>
                <li>1 Taza de Chocolate semiamargo en chispas</li>
            </ul>
             `,
            preparacion: `
            <ol>
                <li>Horno precalentado a 180 °C.</li>
                <li>Bate la mantequilla hasta que esponje, agrega la Leche Condensada LA LECHERA®, el extracto de vainilla y el huevo; bate hasta integrar completamente. Añade poco a poco la harina junto con el polvo para hornear previamente pasados por un colador y por último las chispas de chocolate. Refrigera la masa por 30 minutos.</li>
                <li>En una charola cubierta con papel encerado, coloca un poco de la mezcla anterior con ayuda de una cuchara y aplana ligeramente.</li>
                <li>Hornea a 180 °C por 15 minutos o hasta que las orillas estén doradas. Retira del horno y deja enfriar. Ofrece.</li>
            </ol>
            `
        }
    },
};

function Recetas() {
    const [selectedComponentKey/*Primer componente*/, setSelectedComponentKey/*seleccion de componente*/] = useState("chocolate");
    const { component: SelectedComponent, props: selectedProps } = components[selectedComponentKey];/*aqui establesemos que propiedades vamos a llamar*/

    return (
        <div className="container">
            <div className="row">
                <h1 className="title">Algunas recetas para hacer en casa</h1>
                <div className="col-4 rounded-start border p-5">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-4 w-100"
                        onClick={() => setSelectedComponentKey("chocolate")}/*actualiza el componente*/
                    >
                        Pastel de chocolate
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-4 mt-4 w-100"
                        onClick={() => setSelectedComponentKey("pie")}
                    >
                        Pie de limon
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-4 mt-4 w-100"
                        onClick={() => setSelectedComponentKey("cheesecake")}
                    >
                        Cheesecake
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-4 mt-4 w-100"
                        onClick={() => setSelectedComponentKey("chispas")}
                    >
                        Galletas con chispas de chocolate
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-4 mt-4 w-100"
                        onClick={() => setSelectedComponentKey("brownie")}
                    >
                        Brownie
                    </button>
                </div>
                <div className="col-8 rounded-end border">
                    <SelectedComponent {...selectedProps} /> {/*aqui*/}
                </div>
            </div>
        </div>
    );
}

export default Recetas;
