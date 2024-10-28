const { ejecutarQuery, finalizarPool } = require("./conexion");

const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.listen(5000);
console.log(`Server escuchando en el puerto 5000`);

process.on('SIGINT', async () => {
    await finalizarPool();
    process.exit();
});

app.get("/usuarios", async (req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM usuario;");
    res.send(JSON.stringify(respuesta));
});

app.get("/departamentos", async (req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM departamento;");
    res.send(JSON.stringify(respuesta));
});

app.get("/municipios", async (req, res) => {
    const departamento = req.query.departamento;
    if (departamento){
        const respuesta = await ejecutarQuery(`SELECT * FROM municipio WHERE id_depa=${parseInt(departamento)};`);
        res.send(JSON.stringify(respuesta));
    }
    else{
        res.status(400).send("Error: el departamento es un valor requerido");
    }
});

app.get("/tiposDocumento", async(req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM tipo_documento;");
    res.json(respuesta);
})

app.post("/usuarios", async(req,res)=>{
    console.log(req.body);

    const idempresausuario = req.body.idempresausuario;
    const idtipodocumentousuario = req.body.idtipodocumentousuario;
    const iddepartamentousuario = req.body.iddepartamentousuario;
    const idmunicipiousuario = req.body.idmunicipiousuario;
    const numerodocumentousuario = req.body.numerodocumentousuario;
    const nombreusuario = req.body.nombreusuario;
    const apellidousuario = req.body.apellidousuario;
    const correousuario = req.body.correousuario;
    const telefonousuario = req.body.telefonousuario;
    const direccionusuario = req.body.direccionusuario;
    const claveusuario  = req.body.claveusuario;
    const estadousuario  = req.body.estadousuario;
    
    const respuesta = await ejecutarQuery(`SELECT insertarUsuario (
        ${parseInt(idempresausuario)},
        ${parseInt(idtipodocumentousuario)},
        ${parseInt(idmunicipiousuario)},
        '${numerodocumentousuario}',
        '${nombreusuario}',
        '${apellidousuario}',
        '${correousuario}',
        '${telefonousuario}',
        '${direccionusuario}',
        '${claveusuario}',
        ${estadousuario});`);
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

    {
    "idusuario": 2,
    "idempresausuario": 1,
    "idtipodocumentousuario": 1,
    "iddepartamentousuario": 1,
    "idmunicipiousuario": 1,
    "numerodocumentousuario": "1045256321",
    "nombreusuario": "Joan",
    "apellidousuario": "Ruiz",
    "correousuario": "joan@gmail.com",
    "telefonousuario": "3054521002",
    "direccionusuario": "Calle 100",
    "claveusuario": "1",
    "estadousuario": true
}
] */