create database billup;
use billup;

create table pais(
idPais int not null,
nombrePais varchar(50) not null,
isoAlfa2Pais varchar(2) not null,
isoNumericoPais varchar(3) not null,
primary key (idPais)
);

create table departamento(
idDepartamento int not null,
nombreDepartamento varchar(50) not null,
codDepartamento varchar(5) not null,
primary key (idDepartamento)
);

create table municipio(
idMunicipio int not null,
nombreMunicipio varchar(50) not null,
codMunicipio varchar(5) not null,
primary key (idMunicipio)
);

create table tipoDocumento(
idTipoDocumento int not null,
nombreTipoDocumento varchar(50) not null,
abreviaturaTipoDocumento varchar(5) not null,
estadoTipoDocumento int not null,
primary key (idTipoDocumento)
);

create table tipoPersona(
idTipoPersona int not null,
tipoPersona varchar(20),
primary key (idTipoPersona)
);

create table regimenContribuyente(
idRegimenContribuyente int not null,
nombreRegimenContribuyente varchar(30) not null,
responsabilidadRegimenContribuyente varchar(10) not null,
primary key (idRegimenContribuyente)
);

create table rol(
idRol int not null,
nombreRol varchar(50) not null,
estadoRol int not null,
primary key (idRol)
);

create table ubicacionVenta(
idUbicacionVenta int not null,
nombreUbicacionVenta varchar(50) not null,
estadoUbicacionVenta int not null,
primary key (idUbicacionVenta)
);

create table tipoMedioPago(
idTipoMedioPago int not null,
nombreTipoMedioPago varchar(50) not null,
estadoTipoMedioPago int not null,
primary key (idTipoMedioPago)
);

create table gravamen(
idGravamen int not null,
nombreGravamen varchar(50) not null,
estadoGravamen int not null,
negativoGravamen int not null,
porcentajeGravamen double not null,
primary key (idGravamen)
);

create table empresa (
idEmpresa int not null,
idTipoPersonaEmpresa int not null,
idregimenContribuyenteEmpresa int not null,
idPaisEmpresa int not null,
idPaisEmpresa int not null,
idDepartamentoEmpresa int not null,
idMunicipioEmpresa int not null,
nitEmpresa varchar(15) not null,
digitoVerificacionEmpresa varchar(3) not null,
nombreEmpresa varchar(250) not null,
razonSocialEmpresa varchar(250) not null,
direccionEmpresa varchar(250) not null,
codigoPostalEmpresa varchar(10) not null,
telefonoEmpresa varchar(15) not null,
correoEmpresa varchar(250) not null,
logoEmpresa varchar(150) not null,
estadoEmpresa int not null,
primary key (idEmpresa),
foreign key (idTipoPersonaEmpresa) references tipoPersona (idTipoPersona),
foreign key (idregimenContribuyenteEmpresa) references regimenContribuyente (idRegimenContribuyente),
foreign key (idPaisEmpresa) references pais (idPais),
foreign key (idDepartamentoEmpresa) references departamento (idDepartamento),
foreign key (idMunicipioEmpresa) references municipio (idMunicipio)
);

create table caja(
idCaja int not null,
idEmpresaCaja int not null,
nombreCaja varchar(20) not null,
estadoCaja int not null,
primary key (idCaja),
foreign key (idEmpresaCaja) references empresa (idEmpresa)
);

create table usuario(
idUsuario int not null,
idEmpresaUsuario int not null,
idTipoDocumentoUsuario int not null,
idDepartamentoUsuario int not null,
idMunicipioUsuario int not null,
numeroDocumentoUsuario varchar(15) not null,
nombreUsuario varchar(100) not null,
apellidoUsuario varchar(100) not null,
correoUsuario varchar(250) not null,
telefonoUsuario varchar(15) not null,
direccionUsuario varchar(250) not null,
claveUsuario varchar(50) not null,
estadoUsuario int not null,
primary key (idUsuario),
foreign key (idEmpresaUsuario) references empresa (idEmpresa),
foreign key (idTipoDocumentoUsuario) references tipoDocumento (idTipoDocumento),
foreign key (idDepartamentoUsuario) references departamento (idDepartamento),
foreign key (idMunicipioUsuario) references municipio (idMunicipio)
);

create table tercero(
idTercero int not null,
idEmpresaTercero int not null,
idTipoPersonaTercero int not null,
idTipoDocumentoTercero int not null,
idDepartamentoTercero int not null,
idMunicipioTercero int not null,
digitoVerificacionTercero varchar(3) not null,
razonSocialTercero varchar(250) not null,
numeroDocumentoTercero varchar(15) not null,
nombreTercero varchar(100) not null,
apellidoTercero varchar(100) not null,
telefonoTercero varchar(15) not null,
correoTercero varchar(250) not null,
codigoPostalTercero varchar(10) not null,
proveedorTercero int not null,
primary key (idTercero),
foreign key (idEmpresaTercero) references empresa (idEmpresa),
foreign key (idTipoPersonaTercero) references tipoPersona (idTipoPersona),
foreign key (idTipoDocumentoTercero) references tipoDocumento (idTipoDocumento),
foreign key (idDepartamentoTercero) references departamento (idDepartamento),
foreign key (idMunicipioTercero) references municipio (idMunicipio)
);

create table detalleCaja(
idDetalleCaja int not null,
idCajaDetalleCaja int not null,
idUsuarioDetalleCaja int not null,
fechaAperturaDetalleCaja date not null,
horaAperturaDetalleCaja time not null,
fechaCierreDetalleCaja date not null,
horaCierreDetalleCaja time not null,
dineroAperturaDetalleCaja float not null,
dineroCierreDetalleCaja float not null,
primary key (idDetalleCaja),
foreign key (idCajaDetalleCaja) references caja (idCaja),
foreign key (idUsuarioDetalleCaja) references usuario (idUsuario)
);

create table movimiento(
idMovimiento int not null,
idUsuarioMovimiento int not null,
idCajaMovimiento int not null,
descripcionMovimiento varchar(250) not null,
fechaMovimiento date not null,
horaMovimiento time not null,
valorMovimiento float not null,
tipoMovimiento int not null,
primary key (idMovimiento),
foreign key (idUsuarioMovimiento) references usuario (idUsuario),
foreign key (idCajaMovimiento) references caja (idCaja)
);

create table compra(
idCompra int not null,
idTerceroCompra int not null,
idUsuarioCompra int not null,
fechaCompra date not null,
horaCompra time not null,
observacionCompra varchar(250) not null,
primary key (idCompra),
foreign key (idTerceroCompra) references tercero (idTercero),
foreign key (idUsuarioCompra) references usuario (idUsuario)
); 

create table venta(
idVenta int not null,
idTerceroVenta int not null,
idCajaVenta int not null,
idUsuarioVenta int not null,
idUbicacionVentaVenta int not null,
fechaVenta date not null,
horaVenta time not null,
observacionVenta varchar(250) not null,
primary key (idVenta),
foreign key (idTerceroVenta) references tercero (idTercero),
foreign key (idCajaVenta) references caja (idCaja),
foreign key (idUsuarioVenta) references usuario (idUsuario),
foreign key (idUbicacionVentaVenta) references ubicacionVenta (idUbicacionVenta)
); 

create table medioPago(
idMedioPago int not null,
idVentaMedioPago int not null,
idTipoMedioPagoMedioPago int not null,
estadoMedioPago int not null,
primary key (idMedioPago),
foreign key (idVentaMedioPago) references venta (idVenta),
foreign key (idTipoMedioPagoMedioPago) references tipoMedioPago (idTipoMedioPago)
);

create table producto(
idProducto int not null,
idEmpresaProducto int not null,
idGravamenProducto int not null,
codigoBarrasProducto varchar(50) not null,
nombreProducto varchar(50) not null,
descripcionProducto varchar(250) not null,
categoriaProducto varchar(50) not null,
precioVentaProducto double not null,
stockMinimoProducto double not null,
stockMaximoProducto double not null,
stockProducto double not null,
primary key (idProducto),
foreign key (idEmpresaProducto) references empresa (idEmpresa),
foreign key (idGravamenProducto) references gravamen (idGravamen)
);

create table terceroxProducto(
idTerceroxProducto int not null,
idTerceroTerceroxProducto int not null,
idProductoTerceroxProducto int not null,
precioCompraProductoTerceroxProducto float not null,
primary key (idTerceroxProducto),
foreign key (idTerceroTerceroxProducto) references tercero (idTercero),
foreign key (idProductoTerceroxProducto) references producto (idProducto)
);

create table detalleCompra(
idDetalleCompra int not null,
idCompraDetalleCompra int not null,
idProductoDetalleCompra int not null,
cantidadDetalleCompra double not null,
valorDetalleCompra float not null,
fechaVencimientoDetalleCompra date not null,
primary key (idDetalleCompra),
foreign key (idCompraDetalleCompra) references compra (idCompra),
foreign key (idProductoDetalleCompra) references producto (idProducto)
);

create table rolUsuario(
idRolUsuario int not null,
idRolRolUsuario int not null,
idUsuarioRolUsuario int not null,
primary key (idRolUsuario),
foreign key (idRolRolUsuario) references rol (idRol),
foreign key (idUsuarioRolUsuario) references usuario (idUsuario)
);

create table detalleVenta(
idDetalleVenta int not null,
idVentaDetalleVenta int not null,
idProductoDetalleVenta int not null,
idGravamenDetalleVenta int not null,
cantidadDetalleVenta double not null,
porcentajeDescuentoDetalleVenta double not null,
valorDescuentoDetalleVenta double not null,
valorTotalDetalleVenta double not null,
primary key (idDetalleVenta),
foreign key (idVentaDetalleVenta) references venta (idVenta),
foreign key (idProductoDetalleVenta) references producto (idProducto),
foreign key (idGravamenDetalleVenta) references gravamen (idGravamen)
);

create table gravamenxProducto(
idGravamenxProducto int not null,
idProductoGravamenxProducto int not null,
idGravamenGravamenxProducto int not null,
indicadorCompraGravamenxProducto int not null,
indicadorVentaGravamenxProducto int not null,
primary key (idGravamenxProducto),
foreign key (idProductoGravamenxProducto) references producto (idProducto),
foreign key (idGravamenGravamenxProducto) references gravamen (idGravamen)
);