MERGE INTO Materia AS Target 
USING (VALUES 
        (1, 'Estadistica', 3), 
        (2, 'Calculo diferencial', 3), 
        (3, 'Gestión de proyectos', 4)
) 
AS Source (Id_Materia, Nombre_Materia, Creditos_Materia) 
ON Target.Id_Materia = Source.Id_Materia 
WHEN NOT MATCHED BY TARGET THEN 
INSERT (Nombre_Materia, Creditos_Materia) 
VALUES (Nombre_Materia, Creditos_Materia);

MERGE INTO Estudiante AS Target
USING (VALUES 
        (1, 'Juan', 'Perez','juan@gmail.com'), 
        (2, 'Pedro', 'Bustamante', 'pedro@gmail.com'), 
        (3, 'Andrea', 'Castellanos', 'caste@gmail.com')
)
AS Source (Id_Estudiante, Nombre_Estudiante, Apellido_Estudiante,Email_Estudiante)
ON Target.Id_Estudiante = Source.Id_Estudiante
WHEN NOT MATCHED BY TARGET THEN
INSERT (Nombre_Estudiante, Apellido_Estudiante, Email_Estudiante)
VALUES (Nombre_Estudiante, Apellido_Estudiante, Email_Estudiante);

MERGE INTO Registro AS Target
USING (VALUES 
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 1),
(5, 3, 1),
(6, 3, 2)
)
AS Source (Id_Registro, Id_Materia, Id_Estudiante)
ON Target.Id_Registro = Source.Id_Registro
WHEN NOT MATCHED BY TARGET THEN
INSERT (Id_Materia, Id_Estudiante)
VALUES (Id_Materia, Id_Estudiante);