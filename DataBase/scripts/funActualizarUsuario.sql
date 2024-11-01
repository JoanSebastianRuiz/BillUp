CREATE OR REPLACE FUNCTION actualizarUsuario(
    _id_usua usuario.id_usua%TYPE, 
    _id_empre usuario.id_empre%TYPE, 
    _id_tipo_docu usuario.id_tipo_docu%TYPE,
    _id_muni usuario.id_muni%TYPE, 
    _id_rol usuario.id_rol%TYPE, 
    _numero_documento_usua usuario.numero_documento_usua%TYPE, 
    _nombre_usua usuario.nombre_usua%TYPE, 
    _apellido_usua usuario.apellido_usua%TYPE, 
    _correo_usua usuario.correo_usua%TYPE, 
    _telefono_usua usuario.telefono_usua%TYPE,  
    _direccion_usua usuario.direccion_usua%TYPE, 
    _estado_usua usuario.estado_usua%TYPE)
RETURNS BOOLEAN AS
$$
	BEGIN
        UPDATE usuario SET 
        id_empre=COALESCE(_id_empre),
        id_tipo_docu=COALESCE(_id_tipo_docu),
        id_muni=COALESCE(_id_muni),
        id_rol=COALESCE(_id_rol),
        numero_documento_usua=COALESCE(_numero_documento_usua),
        nombre_usua=COALESCE(_nombre_usua),
        apellido_usua=COALESCE(_apellido_usua),
        correo_usua=COALESCE(_correo_usua),
        telefono_usua=COALESCE(_telefono_usua),
        direccion_usua=COALESCE(_direccion_usua),
        estado_usua=COALESCE(_estado_usua)
        WHERE id_usua=_id_usua;
		
		IF FOUND THEN
			RAISE NOTICE 'Se actualizo correctamente el usuario';
			RETURN TRUE;
		ELSE
			RAISE NOTICE 'Ocurrio un error';
			RETURN FALSE;
		END IF;
	END;
$$
LANGUAGE PLPGSQL;