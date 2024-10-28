CREATE OR REPLACE FUNCTION insertarUsuario(_idEmpresaUsuario INTEGER, _idTipoDocumentoUsuario INTEGER,
_idMunicipioUsuario INTEGER, _numeroDocumentoUsuario VARCHAR, _nombreUsuario VARCHAR, _apellidoUsuario VARCHAR, _correoUsuario VARCHAR, _telefonoUsuario VARCHAR, 
_direccionUsuario VARCHAR, _claveUsuario VARCHAR, _estadoUsuario BOOLEAN)
RETURNS BOOLEAN AS
$$
	DECLARE id INTEGER;
	BEGIN
		SELECT MAX(id_usua) INTO id FROM Usuario;
		
		IF FOUND THEN
			id=id+1;
		ELSE
			id=1;
		END IF;
		
		INSERT INTO Usuario VALUES(id, _idEmpresaUsuario, _idTipoDocumentoUsuario,
		_idMunicipioUsuario, _numeroDocumentoUsuario, _nombreUsuario, _apellidoUsuario, _correoUsuario, _telefonoUsuario, 
		_direccionUsuario, _claveUsuario, _estadoUsuario);

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