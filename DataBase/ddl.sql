--create database billup;
--use billup;

DROP TABLE IF EXISTS gravamen_producto;
DROP TABLE IF EXISTS detalle_venta;
DROP TABLE IF EXISTS rol_usuario; 
DROP TABLE IF EXISTS detalle_compra;
DROP TABLE IF EXISTS tercero_producto;
DROP TABLE IF EXISTS producto;
DROP TABLE IF EXISTS medio_pago;
DROP TABLE IF EXISTS venta;
DROP TABLE IF EXISTS compra;
DROP TABLE IF EXISTS movimiento;
DROP TABLE IF EXISTS detalle_caja;
DROP TABLE IF EXISTS tercero;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS caja;
DROP TABLE IF EXISTS empresa;
DROP TABLE IF EXISTS gravamen;
DROP TABLE IF EXISTS tipo_medio_pago;
DROP TABLE IF EXISTS ubicacion_venta;
DROP TABLE IF EXISTS rol;
DROP TABLE IF EXISTS regimen_contribuyente;
DROP TABLE IF EXISTS tipo_persona;
DROP TABLE IF EXISTS tipo_documento;
DROP TABLE IF EXISTS municipio;
DROP TABLE IF EXISTS departamento;
DROP TABLE IF EXISTS pais;

CREATE TABLE IF NOT EXISTS pais(
id_pais int not null,
nombre_pais varchar(50) not null,
iso_alfa2_pais varchar(2) not null,
iso_numerico_pais varchar(3) not null,
primary key (id_pais)
);

CREATE TABLE IF NOT EXISTS departamento(
id_depa int not null,
id_pais int not null,
nombre_depa varchar(50) not null,
codigo_depa varchar(5) not null,
primary key (id_depa),
foreign key (id_pais) references pais (id_pais)
);

CREATE TABLE IF NOT EXISTS municipio(
id_muni int not null,
id_depa int not null,
nombre_muni varchar(50) not null,
codigo_muni varchar(5) not null,
primary key (id_muni),
foreign key (id_depa) references departamento (id_depa)
);

CREATE TABLE IF NOT EXISTS tipo_documento(
id_tipo_docu int not null,
nombre_tipo_docu varchar(50) not null,
abreviatura_tipo_docu varchar(5) not null,
estado_Tipo_docu boolean not null,
primary key (id_tipo_docu)
);

CREATE TABLE IF NOT EXISTS tipo_persona(
id_tipo_pers int not null,
tipo_pers varchar(20),
primary key (id_tipo_Pers)
);

CREATE TABLE IF NOT EXISTS regimen_contribuyente(
id_regi_cont int not null,
nombre_regi_cont varchar(30) not null,
responsabilidad_regi_cont varchar(10) not null,
primary key (id_regi_cont)
);

CREATE TABLE IF NOT EXISTS rol(
id_rol int not null,
nombre_rol varchar(50) not null,
estado_rol boolean not null,
primary key (id_rol)
);

CREATE TABLE IF NOT EXISTS ubicacion_venta(
id_ubic_venta int not null,
nombre_ubic_venta varchar(50) not null,
estado_ubic_venta boolean not null,
primary key (id_ubic_venta)
);

CREATE TABLE IF NOT EXISTS tipo_medio_pago(
id_tipo_medio_pago int not null,
nombre_tipo_medio_pago varchar(50) not null,
estado_tipo_medio_pago boolean not null,
primary key (id_tipo_medio_pago)
);

CREATE TABLE IF NOT EXISTS gravamen(
id_grav int not null,
nombre_grav varchar(50) not null,
estado_grav boolean not null,
negativo_grav boolean not null,
porcentaje_grav float not null,
primary key (id_grav)
);

CREATE TABLE IF NOT EXISTS categoria(
id_cate int not null,
nombre_cate varchar(50) not null,
estado_cate boolean not null,
primary key (id_cate)
);

CREATE TABLE IF NOT EXISTS empresa (
id_empre int not null,
id_tipo_pers int not null,
id_regi_cont int not null,
id_muni int not null,
nit_empre varchar(15) not null,
digito_verificacion_empre varchar(3) not null,
nombre_empre varchar(250) not null,
razon_social_empre varchar(250) not null,
direccion_empre varchar(250) not null,
codigo_postal_empre varchar(10) not null,
telefono_empre varchar(15) not null,
correo_empre varchar(250) not null,
logo_empre varchar(150) not null,
estado_empre boolean not null,
primary key (id_empre),
foreign key (id_tipo_pers) references tipo_persona (id_tipo_pers),
foreign key (id_regi_cont) references regimen_contribuyente (id_regi_cont),
foreign key (id_muni) references municipio (id_muni)
);

CREATE TABLE IF NOT EXISTS caja(
id_caja int not null,
id_empre int not null,
nombre_caja varchar(20) not null,
estado_caja boolean not null,
primary key (id_caja),
foreign key (id_empre) references empresa (id_empre)
);

CREATE TABLE IF NOT EXISTS usuario(
id_usua int not null,
id_empre int not null,
id_tipo_docu int not null,
id_muni int not null,
numero_documento_usua varchar(15) not null,
nombre_usua varchar(100) not null,
apellido_usua varchar(100) not null,
correo_usua varchar(250) not null,
telefono_usua varchar(15) not null,
direccion_usua varchar(250) not null,
clave_usua varchar(50) not null,
estado_usua boolean not null,
primary key (id_usua),
foreign key (id_empre) references empresa (id_empre),
foreign key (id_tipo_docu) references tipo_documento (id_tipo_docu),
foreign key (id_muni) references municipio (id_muni)
);

CREATE TABLE IF NOT EXISTS tercero(
id_terc int not null,
id_empre int not null,
id_tipo_pers int not null,
id_tipo_docu int not null,
id_muni int not null,
digito_verificacion_terc varchar(3) not null,
razon_social_terc varchar(250) not null,
numero_documento_terc varchar(15) not null,
nombre_terc varchar(100) not null,
apellido_terc varchar(100) not null,
telefono_terc varchar(15) not null,
correo_terc varchar(250) not null,
codigo_postal_terc varchar(10) not null,
proveedor_terc boolean not null,
estado_terc boolean not null,
primary key (id_terc),
foreign key (id_empre) references empresa (id_empre),
foreign key (id_tipo_pers) references tipo_persona (id_tipo_pers),
foreign key (id_tipo_docu) references tipo_documento (id_tipo_docu),
foreign key (id_muni) references municipio (id_muni)
);

CREATE TABLE IF NOT EXISTS detalle_caja(
id_deta_caja int not null,
id_caja int not null,
id_usua int not null,
fecha_aper_deta_caja TIMESTAMP not null,
fecha_cier_deta_caja TIMESTAMP not null,
dine_aper_deta_caja double precision not null,
dine_cier_deta_caja double precision not null,
primary key (id_deta_caja),
foreign key (id_caja) references caja (id_caja),
foreign key (id_Usua) references usuario (id_Usua)
);

CREATE TABLE IF NOT EXISTS movimiento(
id_movi int not null,
id_usua int not null,
id_caja int not null,
descripcion_movi varchar(250) not null,
fecha_movi TIMESTAMP not null,
valor_movi double precision not null,
tipo_movi boolean not null,
primary key (id_movi),
foreign key (id_usua) references usuario (id_usua),
foreign key (id_caja) references caja (id_caja)
);

CREATE TABLE IF NOT EXISTS compra(
id_comp int not null,
id_terc int not null,
id_usua int not null,
fecha_comp TIMESTAMP not null,
observacion_comp varchar(250) not null,
primary key (id_comp),
foreign key (id_terc) references tercero (id_terc),
foreign key (id_usua) references usuario (id_usua)
); 

CREATE TABLE IF NOT EXISTS venta(
id_venta int not null,
id_terc int not null,
id_caja int not null,
id_usua int not null,
id_ubic_venta int not null,
fecha_venta TIMESTAMP not null,
observacion_venta varchar(250) not null,
primary key (id_venta),
foreign key (id_terc) references tercero (id_terc),
foreign key (id_caja) references caja (id_caja),
foreign key (id_usua) references usuario (id_usua),
foreign key (id_ubic_venta) references ubicacion_venta (id_ubic_venta)
); 

CREATE TABLE IF NOT EXISTS medio_pago(
id_medio_pago int not null,
id_venta int not null,
id_tipo_medio_pago int not null,
estado_medio_pago boolean not null,
primary key (id_medio_pago),
foreign key (id_venta) references venta (id_venta),
foreign key (id_tipo_medio_pago) references tipo_medio_pago (id_tipo_medio_pago)
);

CREATE TABLE IF NOT EXISTS producto(
id_prod int not null,
id_empre int not null,
id_cate int not null,
codigo_barras_prod varchar(50) not null,
nombre_prod varchar(50) not null,
descripcion_prod varchar(250) not null,
precio_venta_prod double precision not null,
stock_mini int not null,
stock_maxi int not null,
stock_prod int not null,
estado_prod boolean not null,
primary key (id_prod),
foreign key (id_empre) references empresa (id_empre),
foreign key (id_cate)  references categoria (id_cate)
);

CREATE TABLE IF NOT EXISTS tercero_producto(
id_terc_prod int not null,
id_terc int not null,
id_prod int not null,
precio_compra_terc_prod double precision not null,
porcentaje_desc_deta_venta float not null,
primary key (id_terc_prod),
foreign key (id_terc) references tercero (id_terc),
foreign key (id_prod) references producto (id_prod)
);

CREATE TABLE IF NOT EXISTS detalle_compra(
id_deta_comp int not null,
id_Comp int not null,
id_prod int not null,
cantidad_deta_comp int not null,
valor_deta_comp double precision not null,
fecha_venc_deta_comp date not null,
primary key (id_deta_comp),
foreign key (id_Comp) references compra (id_Comp),
foreign key (id_prod) references producto (id_prod)
);

CREATE TABLE IF NOT EXISTS rol_usuario(
id_rol_usua int not null,
id_rol int not null,
id_usua int not null,
primary key (id_rol_usua),
foreign key (id_rol) references rol (id_rol),
foreign key (id_usua) references usuario (id_usua)
);

CREATE TABLE IF NOT EXISTS detalle_venta(
id_deta_venta int not null,
id_venta int not null,
id_prod int not null,
id_grav int not null,
cantidad_deta_venta int not null,
valor_desc_deta_venta double precision not null,
valor_total_deta_venta double precision not null,
primary key (id_deta_venta),
foreign key (id_venta) references venta (id_venta),
foreign key (id_prod) references producto (id_prod),
foreign key (id_grav) references gravamen (id_grav)
);

CREATE TABLE IF NOT EXISTS gravamen_producto(
id_grav_prod int not null,
id_prod int not null,
id_grav int not null,
indicador_Comp_grav_prod boolean not null,
indicador_venta_grav_prod boolean not null,
primary key (id_grav_prod),
foreign key (id_prod) references producto (id_prod),
foreign key (id_grav) references gravamen (id_grav)
);

CREATE TABLE IF NOT EXISTS historial(
id_his  int not null,
nom_tabla varchar not null,
accion varchar not null,
descripcion varchar not null,
usuario varchar not null,
fecha TIMESTAMP,
primary key (id_his)
);