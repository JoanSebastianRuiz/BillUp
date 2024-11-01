CREATE OR REPLACE FUNCTION obtenerUsuarioId(_id_usua usuario.id_usua%TYPE)
RETURNS TABLE(
    _id_empre usuario.id_empre%TYPE,
    _id_tipo_docu usuario.id_tipo_docu%TYPE,
    _id_depa departamento.id_depa%TYPE,
    _id_muni usuario.id_muni%TYPE,
    _id_rol usuario.id_rol%TYPE,
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
    SELECT u.id_empre, u.id_tipo_docu, d.id_depa, u.id_muni, u.id_rol, u.numero_documento_usua, u.nombre_usua, u.apellido_usua, u.correo_usua, u.telefono_usua, u.direccion_usua, u.estado_usua
    FROM usuario u
    JOIN municipio m ON m.id_muni=u.id_muni
    JOIN departamento d ON d.id_depa=m.id_depa
    WHERE u.id_usua=_id_usua;
END;
$$
LANGUAGE PLPGSQL;