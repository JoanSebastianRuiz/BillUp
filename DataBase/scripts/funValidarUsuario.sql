CREATE OR REPLACE FUNCTION validarUsuario(_numero_documento_usua usuario.numero_documento_usua%TYPE, _clave_usua usuario.clave_usua%TYPE)
RETURNS TABLE(usuarioValidado BOOLEAN, _nombre_rol rol.nombre_rol%TYPE) AS
$$
	DECLARE v_usuarioValidado usuario.numero_documento_usua%TYPE;
    DECLARE v_nombre_rol rol.nombre_rol%TYPE;
    
    
	BEGIN
		
        SELECT numero_documento_usua INTO v_usuarioValidado
        FROM usuario 
        WHERE numero_documento_usua=_numero_documento_usua AND clave_usua=_clave_usua AND estado_usua=TRUE;

        IF v_usuarioValidado IS NOT NULL THEN
            usuarioValidado:=TRUE;

            SELECT nombre_rol INTO v_nombre_rol
            FROM rol r
            JOIN usuario u ON r.id_rol=u.id_rol
            WHERE u.numero_documento_usua=_numero_documento_usua;

            _nombre_rol:=v_nombre_rol;

        ELSE
            usuarioValidado:=FALSE;
            nombre_rol:='';
		END IF;

        RETURN;
    END;
$$
LANGUAGE PLPGSQL;