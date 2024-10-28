INSERT INTO pais VALUES(1,'Colombia','CO','1');

INSERT INTO departamento VALUES
(1,1,'Santander','1'), 
(2,1,'Cundinamarca','2'),
(3,1,'Antioquia','3');

INSERT INTO municipio VALUES 
(1,1,'Floridablanca','1'),
(2,1,'Bucaramanga','2'),
(3,1,'Giron','3'),
(4,2,'Bogota','1'),
(5,2,'Chia','2'),
(6,2,'Cajica','3'),
(7,3,'Medelin','1'),
(8,3,'Envigado','2'),
(9,3,'Itagui','3');

INSERT INTO tipo_documento VALUES
(1,'Cedula de ciudadania','CC', TRUE),
(2,'Cedula de extranjeria','CE', TRUE),
(3,'Permiso de permanencia','PP', TRUE);

INSERT INTO tipo_persona 
VALUES
(1, 'Persona Natural'),
(2, 'Persona Jurídica'),
(3, 'Sociedad Colectiva');


INSERT INTO regimen_contribuyente 
VALUES
(1, 'Régimen Simplificado', 'N/A'),
(2, 'Régimen Común', 'IVA'),
(3, 'Régimen Especial', 'ICA');

INSERT INTO empresa
VALUES
(1, 1, 2, 1, '9001234567', '5', 'AgroIndustria del Valle', 'AgroIndustria del Valle S.A.S.', 
 'Cra 50 # 15-30', '760001', '+573001234567', 'contacto@agrovalle.com', 
 'logo_agrovalle.png', TRUE),

(2, 2, 1, 1, '8007654321', '3', 'Transportes Unidos', 'Transportes Unidos Ltda.', 
 'Calle 45 # 9-67', '110011', '+573001122334', 'info@transunidos.com', 
 'logo_transunidos.png', TRUE),

(3, 3, 3, 1, '9009876543', '8', 'Servicios Globales', 'Servicios Globales S.A.', 
 'Av. Central # 123', '120012', '+573112223344', 'servicios@globales.com', 
 'logo_globales.png', TRUE);