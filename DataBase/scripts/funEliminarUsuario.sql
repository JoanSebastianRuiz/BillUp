CREATE OR REPLACE FUNCTION eliminarUsuario(
    _id_usua usuario.id_usua%TYPE)
RETURNS BOOLEAN AS
$$
	BEGIN
        DELETE FROM usuario WHERE id_usua=_id_usua;
		
		IF FOUND THEN
			RAISE NOTICE 'Se elimino correctamente el usuario';
			RETURN TRUE;
		ELSE
			RAISE NOTICE 'Ocurrio un error';
			RETURN FALSE;
		END IF;
	END;
$$
LANGUAGE PLPGSQL;