CREATE OR REPLACE FUNCTION insertarUsuario(_idEmpresaUsuario INTEGER, _idTipoDocumentoUsuario INTEGER, _idDepartamentoUsuario INTEGER,
_idMunicipioUsuario INTEGER, _numeroDocumentoUsuario VARCHAR, _nombreUsuario VARCHAR, _apellidoUsuario VARCHAR, _correoUsuario VARCHAR, _telefonoUsuario VARCHAR, 
_direccionUsuario VARCHAR, _claveUsuario VARCHAR, _estadoUsuario BOOLEAN)
RETURNS BOOLEAN AS
$$
	DECLARE id INTEGER;
	BEGIN
		SELECT MAX(idUsuario) INTO id FROM Usuario;
		id=id+1;
		
		INSERT INTO Usuario VALUES(id, _idEmpresaUsuario, _idTipoDocumentoUsuario, _idDepartamentoUsuario,
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