CREATE OR REPLACE FUNCTION obtenerUsuarios()
RETURNS TABLE(
    _id_usua usuario.id_usua%TYPE,
    _id_empre usuario.id_empre%TYPE,
    _id_tipo_docu usuario.id_tipo_docu%TYPE,
    _id_depa departamento.id_depa%TYPE,
    _id_muni usuario.id_muni%TYPE,
    _id_rol usuario.id_rol%TYPE,
    _nombre_empre empresa.nombre_empre%TYPE,
    _nombre_tipo_docu tipo_documento.nombre_tipo_docu%TYPE,
    _abreviatura_tipo_docu tipo_documento.abreviatura_tipo_docu%TYPE,
    _nombre_depa departamento.nombre_depa%TYPE,
    _nombre_muni municipio.nombre_muni%TYPE,
    _nombre_rol rol.nombre_rol%TYPE,
    _numero_documento_usua usuario.numero_documento_usua%TYPE,
    _nombre_usua usuario.nombre_usua%TYPE,
    _apellido_usua usuario.apellido_usua%TYPE,
    _correo_usua usuario.correo_usua%TYPE,
    _telefono_usua usuario.telefono_usua%TYPE,
    _direccion_usua usuario.direccion_usua%TYPE,
    _estado_usua usuario.estado_usua%TYPE
)

AS $$
BEGIN
    RETURN QUERY
    SELECT u.id_usua, u.id_empre, u.id_tipo_docu, d.id_depa, u.id_muni, u.id_rol, e.nombre_empre, t.nombre_tipo_docu, t.abreviatura_tipo_docu, d.nombre_depa, m.nombre_muni, r.nombre_rol, u.numero_documento_usua, u.nombre_usua, u.apellido_usua, u.correo_usua, u.telefono_usua, u.direccion_usua, u.estado_usua
    FROM usuario u
    JOIN empresa e ON u.id_empre=e.id_empre
    JOIN tipo_documento t ON u.id_tipo_docu=t.id_tipo_docu
    JOIN municipio m ON m.id_muni=u.id_muni
    JOIN departamento d ON d.id_depa=m.id_depa
    JOIN rol r ON r.id_rol=u.id_rol;
END;
$$
LANGUAGE PLPGSQL;