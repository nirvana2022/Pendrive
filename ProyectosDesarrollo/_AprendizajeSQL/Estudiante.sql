CREATE TABLE [dbo].[Estudiante] (
    [Id_Estudiante]      INT           IDENTITY (1, 1) NOT NULL,
    [Nombre_Estudiante]         NVARCHAR (50) NULL,
    [Apellido_Estudiante]       NVARCHAR (50) NULL,
    [Email_Estudiante]          VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id_Estudiante] ASC)
)