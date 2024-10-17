const { ejecutarQuery } = require("./conexion");

const express = require("express");

const app = express();

app.listen(3000);
console.log(`Server escuchando en el puesto 3000`);

app.get("/usuarios", async (req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM usuario;");
    res.send(JSON.stringify(respuesta));
});

app.post("/usuarios", async(req,res)=>{
    const respuesta = await ejecutarQuery();
    res.send(JSON.stringify(respuesta));
});

//Thunder client para peticiones

//Cuando ingresan una ruta que no existe, maneja las peticiones que no existen
app.use((req,res)=>{
    res.status(404).send("No existen recursos para esta ruta");
});

/*   
{
    idusuario: 1,
    idempresausuario: 1,
    idtipodocumentousuario: 1,
    iddepartamentousuario: 1,
    idmunicipiousuario: 1,
    numerodocumentousuario: '1045256321',
    nombreusuario: 'Joan',
    apellidousuario: 'Ruiz',
    correousuario: 'joan@gmail.com',
    telefonousuario: '3054521002',
    direccionusuario: 'Calle 100',
    claveusuario: '1',
    estadousuario: true
}
] */