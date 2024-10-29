CREATE OR REPLACE FUNCTION insertarDepartamento(_id_pais pais.id_pais%TYPE, _nombre_depa pais.nombre_depa%TYPE, _codigo_depa pais.codigo_depa%TYPE)
RETURNS BOOLEAN AS
$$
	DECLARE id INTEGER;
	BEGIN
		SELECT MAX(id_depa) INTO id FROM Departamento;
		
		IF FOUND AND id IS NOT NULL THEN
			id=id+1;
		ELSE
			id=1;
		END IF;
		
		INSERT INTO Departamento VALUES(id, _id_pais, _nombre_depa, _codigo_depa);

		IF FOUND THEN
			RAISE NOTICE 'Se inserto correctamente el departamento';
			RETURN TRUE;
		ELSE
			RAISE NOTICE 'Ocurrio un error';
			RETURN FALSE;
		END IF;
	END;
$$
LANGUAGE PLPGSQL;