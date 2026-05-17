CREATE DATABASE IF NOT EXISTS cvdb
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE cvdb;

CREATE TABLE persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    ciudad VARCHAR(100),
    foto VARCHAR(255)
);

CREATE TABLE formacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    institucion VARCHAR(255),
    anio VARCHAR(10),
    persona_id INT,
    FOREIGN KEY (persona_id) REFERENCES persona(id)
);

INSERT INTO persona (nombre, apellido, ciudad, foto)
VALUES (
    'David Adrian',
    'Aguilar Loza',
    'Cochabamba',
    'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);

INSERT INTO formacion (titulo, institucion, anio, persona_id)
VALUES
(
    'Ingeniería Petrolera',
    'Escuela Militar de Ingeniería',
    '2016',
    1
),
(
    'Diplomado FullStack Developer',
    'USIP',
    '2026',
    1
),
(
    'Curso DevOps y Docker',
    'OpenWeb Academy',
    '2026',
    1
);