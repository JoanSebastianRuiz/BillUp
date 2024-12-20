const { ejecutarQuery, finalizarPool } = require("./conexion");

const express = require("express");
const path = require('path');

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
    const respuesta = await ejecutarQuery("SELECT * FROM obtenerUsuarios();");
    res.send(JSON.stringify(respuesta));
});

app.get("/usuarios/:id_usua", async (req,res)=>{
    const id_usua = req.params.id_usua;
    const respuesta = await ejecutarQuery("SELECT * FROM obtenerUsuarioId($1);",[parseInt(id_usua)]);
    //console.log(respuesta);

    res.send(JSON.stringify(respuesta));
});

app.put("/usuarios", async (req,res)=>{
    const {
        id,
        idempresa,
        idtipodocumento,
        idrol,
        idmunicipio,
        numerodocumento,
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        estado
    }=req.body;
    
    const respuesta = await ejecutarQuery(`SELECT actualizarUsuario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`,
        [
            id, 
            parseInt(idempresa), 
            parseInt(idtipodocumento), 
            parseInt(idmunicipio), 
            parseInt(idrol), 
            numerodocumento, 
            nombre, 
            apellido, 
            email, 
            telefono, 
            direccion, 
            estado
        ]);

    //console.log(respuesta);

    res.json(respuesta);
});

app.post("/usuarios/validarusuario", async(req,res)=>{
    const {usuario, password} = req.body;
    
    if (usuario && password){
        const respuesta  = await ejecutarQuery("SELECT validarUsuario($1,$2) AS usuariovalidado;",[usuario,password]);
        res.json(respuesta);
    }
    else if (!usuario){
        res.status(400).send("Error: El numero de documento del usuario es un valor requerido");
    }
    else if (!password){
        res.status(400).send("Error: La clave del usuario es un valor requerido");
    }
})

app.post("/usuarios", async(req,res)=>{
    //console.log(req.body);
    const {
        idempresa,
        idtipodocumento,
        idrol,
        idmunicipio,
        numerodocumento,
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        clave,
        estado
    }=req.body;
    
    const respuesta = await ejecutarQuery(`SELECT insertarUsuario ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`,
        [
            parseInt(idempresa), 
            parseInt(idtipodocumento), 
            parseInt(idmunicipio), 
            parseInt(idrol), 
            numerodocumento, 
            nombre, 
            apellido, 
            email, 
            telefono, 
            direccion, 
            clave,
            estado
        ]);

    res.send(JSON.stringify(respuesta));
});

app.delete("/usuarios/:id_usua", async (req,res)=>{
    const {id_usua} = req.params;
    const respuesta = await ejecutarQuery(`SELECT eliminarUsuario($1);`, [id_usua]);
    res.json(respuesta);
});

app.get("/departamentos", async (req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM departamento;");
    res.send(JSON.stringify(respuesta));
});

app.get("/municipios", async (req, res) => {
    const departamento = req.query.departamento;
    if (departamento){
        const respuesta = await ejecutarQuery(`SELECT * FROM obtenerMunicipios($1);`, [parseInt(departamento)]);
        res.send(JSON.stringify(respuesta));
    }
    else{
        res.status(400).send("Error: El departamento es un valor requerido");
    }
});

app.get("/tiposdocumento", async(req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM tipo_documento;");
    res.json(respuesta);
});

app.get("/roles", async(req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM rol;");
    res.json(respuesta);
});

app.get("/empresas", async(req,res)=>{
    const respuesta = await ejecutarQuery("SELECT * FROM empresa;");
    res.json(respuesta);
});


app.use(express.static(path.join(__dirname, 'build')));

// Redirigir todas las rutas a `index.html` (para manejar rutas en React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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