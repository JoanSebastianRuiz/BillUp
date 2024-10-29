CREATE OR REPLACE FUNCTION insertarUsuario(_id_empre usuario.id_empre%TYPE, _id_tipo_docu usuario.id_tipo_docu%TYPE, _id_muni usuario.id_muni%TYPE, _id_rol usuario.id_rol%TYPE, _numero_documento_usua usuario.numero_documento_usua%TYPE, _nombre_usua usuario.nombre_usua%TYPE, _apellido_usua usuario.apellido_usua%TYPE, _correo_usua usuario.correo_usua%TYPE, _telefono_usua usuario.telefono_usua%TYPE,  _direccion_usua usuario.direccion_usua%TYPE, _clave_usua usuario.clave_usua%TYPE, _estado_usua usuario.estado_usua%TYPE)
RETURNS BOOLEAN AS
$$
	DECLARE id INTEGER;
	BEGIN
		SELECT MAX(id_usua) INTO id FROM usuario;
		
		IF FOUND AND id IS NOT NULL THEN
			id=id+1;
		ELSE
			id=1;
		END IF;
		
		INSERT INTO Usuario VALUES(id, _id_empre, _id_tipo_docu, _id_muni, _id_rol, _numero_documento_usua, _nombre_usua, _apellido_usua, _correo_usua, _telefono_usua, _direccion_usua, _clave_usua, _estado_usua);

		IF FOUND THEN
			RAISE NOTICE 'Se inserto correctamente el usuario';
			RETURN TRUE;
		ELSE
			RAISE NOTICE 'Ocurrio un error';
			RETURN FALSE;
		END IF;
	END;
$$
LANGUAGE PLPGSQL;