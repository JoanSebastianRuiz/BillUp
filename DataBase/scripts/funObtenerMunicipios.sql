CREATE OR REPLACE FUNCTION obtenerMunicipios(idDepartamento departamento.id_depa%TYPE)
RETURNS TABLE(_id_muni municipio.id_muni%TYPE, _nombre_muni municipio.nombre_muni%TYPE)
AS $$
BEGIN
    RETURN QUERY
    SELECT id_muni,nombre_muni
    FROM municipio
    WHERE id_depa=idDepartamento;
END;
$$
LANGUAGE PLPGSQL;