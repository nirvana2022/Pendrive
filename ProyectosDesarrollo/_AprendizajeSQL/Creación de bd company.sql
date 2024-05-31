/* 
	Create by: Didier Alexander Villamil Jimenez 
    Date of modification: 19/07/2023
*/

DROP DATABASE company;
CREATE database company;
use company;
create table company.Department( 
DepartmentId int auto_increment, 
DepartmentName nvarchar(500), 
primary key(DepartmentId) 
);

insert into company.Department(DepartmentName) values
	('Support'),
    ('Funtional');
    
create table company.Employee(
EmployeeId int auto_increment,
EmployeeName nvarchar(500),
Department nvarchar(500),
DateOfJoijing datetime,
PhotoFileName nvarchar(500),
primary key(EmployeeId)
);

insert into company.Employee(EmployeeName,Department,DateOfJoijing,PhotoFileName) values
	('Juan','Support','2023-06-21','usju.png'),
    ('Paula','Support','2023-06-21','uspa.png'),
    ('Andres','Funtional','2023-06-21','usan.png');
    
SELECT * from company.Department,company.Employee;