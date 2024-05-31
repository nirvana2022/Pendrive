CREATE TABLE [dbo].[Registro] (
    [Id_Registro] INT IDENTITY (1, 1) NOT NULL,
    [Id_Materia]     INT NOT NULL,
    [Id_Estudiante]    INT NOT NULL,
    PRIMARY KEY CLUSTERED ([Id_Registro] ASC),
    CONSTRAINT [FK_dbo.Registro_dbo.Materia_Id_Materia] FOREIGN KEY ([Id_Materia]) 
        REFERENCES [dbo].[Materia] ([Id_Materia]) ON DELETE CASCADE,
    CONSTRAINT [FK_dbo.Registro_dbo.Estudiante_Id_Estudiante] FOREIGN KEY ([Id_Estudiante]) 
        REFERENCES [dbo].[Estudiante] ([Id_Estudiante]) ON DELETE CASCADE
)