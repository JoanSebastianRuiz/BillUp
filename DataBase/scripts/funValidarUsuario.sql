CREATE OR REPLACE FUNCTION validarUsuario(_numero_documento_usua usuario.numero_documento_usua%TYPE, _clave_usua usuario.clave_usua%TYPE)
RETURNS rol.nombre_rol%TYPE AS
$$
	DECLARE _nombre_rol rol.nombre_rol%TYPE;
    
    
	BEGIN
		
        SELECT nombre_rol INTO _nombre_rol
        FROM rol r
        JOIN usuario u ON r.id_rol=u.id_rol
        WHERE u.numero_documento_usua=_numero_documento_usua AND u.clave_usua=_clave_usua AND u.estado_usua=TRUE;

        IF _nombre_rol IS NOT NULL THEN
            RAISE NOTICE 'Usuario validado';
            RETURN _nombre_rol;

        ELSE
            RAISE NOTICE 'El usuario no existe';
            RETURN FALSE;
		END IF;

    END;
$$
LANGUAGE PLPGSQL;