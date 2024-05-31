CREATE TABLE [dbo].[Materia] (
    [Id_Materia]      INT           IDENTITY (1, 1) NOT NULL,
    [Nombre_Materia]         NVARCHAR (50) NULL,
    [Creditos_Materia]       NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id_Materia] ASC)
)