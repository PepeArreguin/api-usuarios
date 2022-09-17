console.log("Entro al main.js");

const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblUsuarios = document.getElementById("tblUsuarios");

function cargarUsuarios () {
//Es una promesa
fetch(base_url_api + "/Main/alumnos")
  .then(response => response.json())
  .then(result => {
    console.log(result);
    tblUsuarios.innerHTML = "";
    //hacer un ciclo para que pinte en la tabla, es mas comodo hacer un for of
    for (const usuario of result.data) {
        let tr = `<tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        </tr>`;
        tblUsuarios.innerHTML += tr;
    }

})
  .catch((error) => {
    console.log("Error detectado");
    });


}


function agregarUsuario(){
    console.log("entro a agregar user");
}

cargarUsuarios();