-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-06-2021 a las 22:29:39
-- Versión del servidor: 10.5.10-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `HOTEL_sql_2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_aficion`
--

CREATE TABLE `tb_aficion` (
  `id_aficion` int(11) NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_aficion`
--

INSERT INTO `tb_aficion` (`id_aficion`, `tipo`, `obs`) VALUES
(1, 'Motocross', ''),
(2, 'Surf', ''),
(3, 'Submarinismo', NULL),
(4, 'Senderismo', NULL),
(5, 'Visita turística', NULL),
(6, 'Golf', NULL),
(7, 'Paracaidismo', NULL),
(8, 'Ala delta', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_categoria`
--

CREATE TABLE `tb_categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `obs` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_categoria`
--

INSERT INTO `tb_categoria` (`id_categoria`, `nombre`, `precio`, `descuento`, `obs`) VALUES
(1, 'Individual', 55, 0, NULL),
(2, 'Individual -vista al mar', 65, 0, NULL),
(3, 'Doble', 65, 0, NULL),
(4, 'Doble -vista al mar', 85, 0, NULL),
(5, 'Familiar', 120, 0, NULL),
(6, 'Familiar -vista al mar', 140, 0, NULL),
(7, 'Suite', 200, 0, NULL),
(8, 'Suite -vista al mar', 240, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_cliente`
--

CREATE TABLE `tb_cliente` (
  `id_cliente` int(11) NOT NULL,
  `DNI` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `correo_e` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `num_tlf` int(11) DEFAULT NULL,
  `pais` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_cliente`
--

INSERT INTO `tb_cliente` (`id_cliente`, `DNI`, `nombre`, `apellidos`, `fecha_nac`, `correo_e`, `direccion`, `num_tlf`, `pais`, `obs`) VALUES
(1, '81204433N', 'JIMENA', 'OLMO CANOVAS', '1970-07-10', 'rgnyrrkgfn@email.com', 'PLAZA IGLESIA, 85', 768761390, 'España', ' '),
(2, '18052387D', 'ISRAEL', 'BELTRAN ORTEGA', '1996-05-22', 'n4jawy6oga@lycos.co.uk', 'CAMINO MADRID, 94', 680185274, 'España', NULL),
(3, '92708651K', 'Victor', 'BERNABEU PÉREZ', '1988-03-25', 'kej6xfzvf@earthling.net', 'PLAZUELA DE ESPAÑA, 93', 669850476, 'España', NULL),
(4, '65933522C', 'MOHAMMED', 'OLMO CLEMENTE', '1950-12-09', '9xgj3evbg@gmail.com', 'POBLADO CATALUNYA, 89', 734453135, 'España', NULL),
(5, '83059926A', 'ANNA', 'NOGUERA ARJONA', '1976-04-15', '751cjk7fl@whoever.com', 'PASAJE CATALUNYA, 55', 763478244, 'España', NULL),
(6, '37183130L', 'LEYRE', 'LUIS BARRIOS', '1981-12-12', '38k2eblt@yahoo.com', 'RÚA MAYOR, 62', 710768504, 'España', NULL),
(7, '60460981F', 'JOEL', 'PASCUAL VENTURA', '1967-03-15', '5lmnria8@mail.com', 'AVENIDA PEDRALBES, 2', 740318061, 'España', NULL),
(8, '41124818J', 'GUILLEM', 'HIDALGO PERALTA', '1954-04-07', '1p7vzp9a7@talk21.com', 'EDIFICIO NUEVA, 27', 662948436, 'España', NULL),
(9, '99002840F', 'ALFONSO', 'CALERO PEÑA', '1960-09-28', 'x38w7emwtm@hotmail.com', 'PLAZA CATALUNYA, 46', 750379782, 'España', NULL),
(10, '52984748Q', 'CLARA', 'DUQUE LAGO', '1968-11-16', 'uc7hkdukm@lycos.de', 'PLACETA MADRID, 27', 688380935, 'España', NULL),
(11, '59702425Z', 'DANIEL', 'VILLEGAS BELTRAN', '1996-12-13', '0mo030ovl@email.com', 'CARRER IGLESIA, 49', 767520636, 'España', NULL),
(12, '02054494L', 'CAROLINA', 'MAS SERRA', '1950-02-22', 'mfetl6be2@mail.com', 'KALEA IGLESIA, 42', 717570754, 'España', NULL),
(13, '90198463F', 'IÑIGO', 'MORAL MENDOZA', '1954-01-04', 'pr6d4ge3z@msn.com', 'POLÍGONO PEDRALBES, 14', 761483995, 'España', NULL),
(14, '75010916G', 'VICTORIANO', 'CUADRADO PASCUAL', '1975-08-06', 'vdan286y9@scientist.com', 'ALAMEDA NUEVA, 54', 711123396, 'España', NULL),
(15, '84316419Y', 'CANDIDO', 'MELERO VEGA', '1957-05-09', 'rg5d6h5gl@techie.com', 'RÚA HORNO, 35', 631949877, 'España', NULL),
(16, '26420324V', 'LEIRE', 'ROSALES CARVAJAL', '1963-02-27', 'jvn44eefn@lycos.at', 'ALAMEDA MAYOR, 88', 674197480, 'España', NULL),
(17, '77280439W', 'ADRIANA', 'DE MIGUEL PELAEZ', '1998-02-09', 'n4abalaq@libero.it', 'PASSEIG REAL, 59', 668242232, 'España', NULL),
(18, '86257382E', 'JONATAN', 'LOBATO LAFUENTE', '1986-04-05', '13pbilkdky@msn.co.uk', 'AVINGUDA DE ESPAÑA, 4', 749481116, 'España', NULL),
(19, '92805539X', 'GUILLERMO', 'LLORENTE CARVAJAL', '1980-10-03', 'bgx1esd61@talk21.com', 'CALLE NUEVA, 7', 624529315, 'España', NULL),
(20, '50981177K', 'KHADIJA', 'ARENAS BENITO', '1963-09-26', 'hzmg6v60q@lycos.nl', 'TRAVESÍA REAL, 61', 771853429, 'España', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_clienteXaficion`
--

CREATE TABLE `tb_clienteXaficion` (
  `id_cliente` int(11) NOT NULL,
  `id_aficion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_clienteXaficion`
--

INSERT INTO `tb_clienteXaficion` (`id_cliente`, `id_aficion`) VALUES
(1, 2),
(1, 4),
(2, 1),
(2, 3),
(2, 7),
(3, 6),
(4, 1),
(4, 5),
(5, 7),
(5, 8),
(6, 4),
(6, 6),
(7, 2),
(7, 7),
(8, 1),
(8, 2),
(8, 6),
(9, 3),
(10, 2),
(10, 5),
(11, 1),
(11, 4),
(12, 4),
(12, 5),
(13, 1),
(13, 6),
(14, 2),
(14, 3),
(14, 6),
(14, 8),
(15, 1),
(16, 2),
(17, 2),
(17, 3),
(17, 8),
(18, 1),
(19, 5),
(19, 6),
(20, 4),
(20, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_departamento`
--

CREATE TABLE `tb_departamento` (
  `id_departamento` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleados_min` int(11) DEFAULT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `n_empleados` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_departamento`
--

INSERT INTO `tb_departamento` (`id_departamento`, `nombre`, `empleados_min`, `descripcion`, `n_empleados`) VALUES
(1, 'Recepcion', 1, NULL, 3),
(2, 'Mantenimiento', 5, NULL, 7),
(3, 'Animacion', 5, NULL, 6),
(4, 'Limpieza', 5, NULL, 5),
(5, 'Salud y belleza', 10, NULL, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_empleado`
--

CREATE TABLE `tb_empleado` (
  `id_empleado` int(11) NOT NULL,
  `DNI` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo_e` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `num_tlf` int(11) DEFAULT NULL,
  `pais` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_departamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_empleado`
--

INSERT INTO `tb_empleado` (`id_empleado`, `DNI`, `nombre`, `apellidos`, `correo_e`, `direccion`, `fecha_nac`, `num_tlf`, `pais`, `obs`, `id_departamento`) VALUES
(1, '40049054M', 'EMILIO', 'TEJERO VALLEJO', 'abbwdwcy7@lycos.es', 'CARRER PEDRALBES, 62', '1989-12-04', 629296824, 'España', NULL, 1),
(2, '76519522V', 'JUANA', 'VILA DE LA TORRE', 'ild7audpa@aol.com', 'CUESTA IGLESIA, 98', '1970-11-24', 695213507, 'España', NULL, 1),
(3, '27777310A', 'GUILLEM', 'PEREIRA ABAD', 'ecktttof@hotmail.com', 'RAMBLA MAYOR, 36', '1989-11-01', 755669471, 'España', NULL, 1),
(4, '90635378Z', 'ANA CRISTINA', 'COBOS LORENZO', 'jsqv6sdll@netscape.net', 'POLÍGONO MADRID, 83', '1956-02-04', 707031647, 'España', NULL, 2),
(5, '30447858K', 'ISRAEL', 'BARRERA CONDE', '7k2winm0ol@netscape.net', 'JARDINS REAL, 68', '1954-09-17', 759917859, 'España', NULL, 2),
(6, '99593336R', 'VALERIA', 'RAMON CANTERO', '65xsm7udii@lycos.es', 'RÚA REAL, 72', '1987-10-07', 667624526, 'España', NULL, 2),
(7, '40106841Q', 'EDGAR', 'SALGUERO FREIRE', 'elut3gsdqj@earthling.net', 'PLAÇA REAL, 17', '1988-06-29', 779278133, 'España', NULL, 2),
(8, '32125086C', 'ELENA', 'ESCOBAR JORGE', 'f93js5muuv@hotmail.com', 'KALEA MAYOR, 49', '1987-06-08', 635479115, 'España', NULL, 2),
(9, '51415290D', 'CARMELO', 'POVEDA SINGH', 'yte8o8fds@witty.com', 'ENPARANTZA IGLESIA, 71', '1971-09-12', 655549013, 'España', NULL, 2),
(10, '53038474Z', 'EUSEBIO', 'SOLIS CATALAN', 'mz0ybhhdb@caramail.com', 'POLÍGONO HORNO, 41', '1982-03-21', 686905417, 'España', NULL, 2),
(11, '18308045E', 'MARIA MILAGROS', 'SOLE POZO', 'a8vxh01gp@talk21.com', 'PASSATGE REAL, 53', '2002-08-02', 639139896, 'España', NULL, 3),
(12, '33958514A', 'JORGE', 'CHAMORRO BENITEZ', 'rv8fro0ns@lycos.at', 'PARQUE MAYOR, 12', '1963-06-28', 782246360, 'España', NULL, 3),
(13, '57246315M', 'JAIRO', 'MOYANO CORDOBA', '6hjzyz6qh2@netscape.com', 'PLAÇA REAL, 71', '1978-02-25', 646120640, 'España', NULL, 3),
(14, '30428060A', 'SANDRA', 'MATEO HUERTA', 'f47z4p3hr@aol.com', 'RONDA HORNO, 12', '1967-08-04', 709589372, 'España', NULL, 3),
(15, '39012328G', 'DAMIAN', 'CONDE PORTILLO', '8ej8xl57z@aim.com', 'CARRERA IGLESIA, 98', '1984-02-22', 750571696, 'España', NULL, 3),
(16, '21334195Q', 'ADELAIDA', 'ROLDAN MENDEZ', 'f8sn5lty7@msn.co.uk', 'POBLADO HORNO, 83', '1961-02-14', 621794820, 'España', NULL, 3),
(17, '95954649Y', 'MARIA JESUS', 'CARBALLO LINARES', 'fyal0paqj@blu.it', 'CUESTA IGLESIA, 77', '1973-10-02', 674306213, 'España', NULL, 4),
(18, '03835536X', 'JOSE MARIA', 'AHMED HUERTA', 'rc2gs3xay@lycos.es', 'CARRERA IGLESIA, 93', '1969-10-11', 705948676, 'España', NULL, 4),
(19, '19598163R', 'BIEL', 'RIERA BARRERA', 'ye35oc7cn@btinternet.com', 'PASSEIG IGLESIA, 1', '2000-05-04', 610716499, 'España', NULL, 4),
(20, '36826086G', 'CARMEN MARIA', 'RUIZ MATEU', 'yvqggblfv@techie.com', 'TRAVESÍA IGLESIA, 31', '1959-10-18', 705822247, 'España', NULL, 4),
(21, '43943892T', 'VALENTIN', 'LORENTE BLAZQUEZ', '5mub81pk@earthling.net', 'PLACETA NUEVA, 69', '1986-09-28', 764146323, 'España', NULL, 4),
(22, '30899132N', 'ALONSO', 'SOLANO ROYO', 'egkl05xbpd@email.com', 'TRAVESÍA IGLESIA, 86', '1952-09-02', 700199941, 'España', NULL, 5),
(23, '93854335Y', 'TANIA', 'VILLALBA CLEMENTE', 'xf0xznjfq@lycos.co.uk', 'TRAVESÍA PEDRALBES, 54', '1951-11-17', 750620236, 'España', NULL, 5),
(24, '11970030W', 'MARIA LUISA', 'CABRERA BLAZQUEZ', 'vft5r9xkl@aol.com', 'AVENIDA MAYOR, 59', '1986-05-13', 738505408, 'España', NULL, 5),
(25, '81474452B', 'VICTORIA', 'ANDREU BENITO', 'ifgnobdde@lycos.es', 'RONDA PEDRALBES, 62', '1981-09-04', 711491168, 'España', NULL, 5),
(26, '33095143Y', 'ARIADNA', 'SEGURA AYALA', 'x4d7b8cr6@aim.com', 'CAMÍ CATALUNYA, 76', '1990-10-03', 624504786, 'España', NULL, 5),
(27, '32753409Y', 'MARIA BEGOÑA', 'NAVARRO HERAS', 'alf342wvu@lycos.it', 'SECTOR PEDRALBES, 26', '1957-07-08', 709559830, 'España', NULL, 5),
(28, '79549240Z', 'MAR', 'ORTIZ AYALA', '6uw71z89@gmail.com', 'PARQUE IGLESIA, 76', '1992-03-29', 662710657, 'España', NULL, 5),
(29, '22622603X', 'PERE', 'AZNAR ROS', 'hkzhgu4vn@usa.com', 'CALLE REAL, 46', '1963-11-13', 667865060, 'España', NULL, 5),
(30, '18296777R', 'KEVIN', 'ESCOBAR SANTANA', '0c9ec8ah@lycos.it', 'JARDINS IGLESIA, 41', '2000-06-20', 603055042, 'España', NULL, 5),
(31, '44879848V', 'MARIA MILAGROS', 'HERRERA DE LA CRUZ', 'xgl6gn05@netscape.com', 'ENPARANTZA CATALUNYA, 79', '1964-05-08', 721442533, 'España', NULL, 5),
(32, '79584956B', 'MARIA CARME', 'FERREIRA ESCRIBANO', '52h9vlha@lycos.es', 'EDIFICIO HORNO, 88', '1950-03-21', 753950837, 'España', NULL, 5);

--
-- Disparadores `tb_empleado`
--
DELIMITER $$
CREATE TRIGGER `aniadeEmp` BEFORE INSERT ON `tb_empleado` FOR EACH ROW BEGIN 
        DECLARE empleados INT;
        DECLARE curDep CURSOR FOR
            SELECT tb_departamento.n_empleados FROM tb_departamento WHERE tb_departamento.id_departamento = NEW.id_departamento;
        OPEN curDep;
        FETCH curDep INTO empleados;
        UPDATE tb_departamento
            SET n_empleados = (empleados + 1)
            WHERE  tb_departamento.id_departamento = NEW.id_departamento;
    END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `eliminaEmp` BEFORE DELETE ON `tb_empleado` FOR EACH ROW BEGIN 
        DECLARE empleados INT;
        DECLARE curDep CURSOR FOR
            SELECT tb_departamento.n_empleados FROM tb_departamento WHERE tb_departamento.id_departamento = OLD.id_departamento;
        OPEN curDep;
        FETCH curDep INTO empleados;
        UPDATE tb_departamento
            SET n_empleados = (empleados - 1)
            WHERE  tb_departamento.id_departamento = OLD.id_departamento;
        CLOSE curDep;
    END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_empleadoXhabitacion`
--

CREATE TABLE `tb_empleadoXhabitacion` (
  `id_empleado` int(11) NOT NULL,
  `id_habitacion` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `obs` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_empleadoXhabitacion`
--

INSERT INTO `tb_empleadoXhabitacion` (`id_empleado`, `id_habitacion`, `fecha`, `obs`) VALUES
(4, 5, '2021-06-14', 'Se ha sustituido el grifo porque goteaba'),
(5, 15, '2021-06-17', 'Se ha engrasado una puerta porque chirriaba'),
(6, 7, '2021-06-02', 'La bañera perdía agua'),
(8, 1, '2021-06-05', 'Aire acondicionado dejo de funcionar'),
(10, 13, '2021-06-21', 'Se ha sustituido la nevera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_empleadoXreserva`
--

CREATE TABLE `tb_empleadoXreserva` (
  `id_empleado` int(11) NOT NULL,
  `id_reserva` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `tipo_limpieza` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_empleadoXreserva`
--

INSERT INTO `tb_empleadoXreserva` (`id_empleado`, `id_reserva`, `fecha`, `hora`, `tipo_limpieza`) VALUES
(17, 1, '2021-06-04', '12:00:00', 'General'),
(17, 4, '2021-06-12', '12:00:00', 'General'),
(17, 5, '2021-06-22', '12:00:00', 'General'),
(17, 6, '2021-06-11', '12:00:00', 'Basica'),
(17, 7, '2021-06-17', '12:00:00', 'Basica'),
(17, 8, '2021-06-25', '12:00:00', 'Basica'),
(17, 9, '2021-06-26', '12:00:00', 'General'),
(17, 10, '2021-06-25', '12:00:00', 'Basica'),
(17, 11, '2021-06-30', '12:00:00', 'General'),
(17, 12, '2021-07-03', '12:00:00', 'Basica'),
(17, 13, '2021-07-08', '12:00:00', 'Basica'),
(18, 2, '2021-06-03', '12:00:00', 'General'),
(18, 5, '2021-06-11', '12:00:00', 'Basica'),
(18, 6, '2021-06-14', '12:00:00', 'Basica'),
(18, 7, '2021-06-30', '12:00:00', 'Basica'),
(18, 8, '2021-06-26', '12:00:00', 'General'),
(18, 10, '2021-06-30', '12:00:00', 'Basica'),
(18, 12, '2021-07-04', '12:00:00', 'General'),
(18, 13, '2021-07-11', '12:00:00', 'General'),
(19, 3, '2021-06-06', '12:00:00', 'General'),
(19, 5, '2021-06-14', '12:00:00', 'Basica'),
(19, 6, '2021-06-17', '12:00:00', 'Basica'),
(19, 7, '2021-07-07', '12:00:00', 'Basica'),
(20, 4, '2021-06-07', '12:00:00', 'Basica'),
(20, 5, '2021-06-17', '12:00:00', 'Basica'),
(20, 6, '2021-06-25', '12:00:00', 'Basica'),
(20, 7, '2021-07-14', '12:00:00', 'Basica'),
(20, 10, '2021-07-02', '12:00:00', 'General'),
(21, 4, '2021-06-10', '12:00:00', 'Basica'),
(21, 5, '2021-06-20', '12:00:00', 'Basica'),
(21, 6, '2021-06-26', '12:00:00', 'General'),
(21, 7, '2021-07-18', '12:00:00', 'General');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_habitacion`
--

CREATE TABLE `tb_habitacion` (
  `id_habitacion` int(11) NOT NULL,
  `m2` int(11) DEFAULT NULL,
  `piso` int(11) DEFAULT NULL,
  `obs` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_habitacion`
--

INSERT INTO `tb_habitacion` (`id_habitacion`, `m2`, `piso`, `obs`, `id_categoria`) VALUES
(1, 40, 1, NULL, 2),
(2, 40, 1, NULL, 2),
(3, 40, 1, NULL, 3),
(4, 40, 1, NULL, 3),
(5, 70, 1, NULL, 5),
(6, 70, 2, NULL, 6),
(7, 40, 2, NULL, 1),
(8, 40, 2, NULL, 1),
(9, 40, 2, NULL, 4),
(10, 40, 2, NULL, 4),
(11, 90, 3, NULL, 7),
(12, 90, 3, NULL, 7),
(13, 90, 3, NULL, 8),
(14, 90, 3, NULL, 8),
(15, 80, 3, NULL, 6),
(16, 23, 5, NULL, 7),
(17, 60, 7, NULL, 8),
(18, 60, 7, NULL, 8),
(20, 14, 1, NULL, 8),
(22, 545, 54, NULL, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_reserva`
--

CREATE TABLE `tb_reserva` (
  `id_reserva` int(11) NOT NULL,
  `fecha_reserva` date DEFAULT NULL,
  `entrada_prev` date DEFAULT NULL,
  `salida_prev` date DEFAULT NULL,
  `fianza` int(11) DEFAULT NULL,
  `precio_total` int(11) DEFAULT NULL,
  `extendible` tinyint(1) DEFAULT NULL,
  `todo_incluido` tinyint(1) DEFAULT NULL,
  `obs` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_habitacion` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_reserva`
--

INSERT INTO `tb_reserva` (`id_reserva`, `fecha_reserva`, `entrada_prev`, `salida_prev`, `fianza`, `precio_total`, `extendible`, `todo_incluido`, `obs`, `id_cliente`, `id_habitacion`, `id_empleado`) VALUES
(1, '2021-05-18', '2021-06-01', '2021-06-04', 100, 285, 1, 1, NULL, 3, 1, 1),
(2, '2021-05-31', '2021-06-01', '2021-06-03', 100, 315, 0, 0, NULL, 6, 4, 2),
(3, '2021-04-19', '2021-06-03', '2021-06-06', 100, 310, 1, 0, NULL, 1, 4, 3),
(4, '2021-03-14', '2021-06-04', '2021-06-12', 100, 845, 1, 1, NULL, 8, 7, 1),
(5, '2021-01-11', '2021-06-08', '2021-06-22', 100, 2250, 1, 1, NULL, 4, 6, 2),
(6, '2021-01-11', '2021-06-08', '2021-06-26', 100, 2810, 1, 1, NULL, 13, 15, 3),
(7, '2021-04-21', '2021-06-14', '2021-07-18', 100, 8890, 1, 120, NULL, 10, 14, 2),
(8, '2021-06-07', '2021-06-22', '2021-06-26', 100, 480, 1, 1, NULL, 15, 4, 3),
(9, '2021-06-11', '2021-06-24', '2021-06-26', 100, 630, 1, 1, NULL, 17, 7, 1),
(10, '2021-05-31', '2021-06-25', '2021-07-02', 100, 695, 1, 0, NULL, 12, 9, 2),
(11, '2021-06-04', '2021-06-28', '2021-06-30', 100, 620, 1, 1, NULL, 16, 11, 3),
(12, '2021-06-14', '2021-06-30', '2021-07-04', 100, 1180, 1, 1, NULL, 20, 13, 2),
(13, '2021-06-19', '2021-07-05', '2021-07-11', 100, 880, 1, 1, NULL, 5, 10, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_reservaXservicio`
--

CREATE TABLE `tb_reservaXservicio` (
  `id_reserva` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_reservaXservicio`
--

INSERT INTO `tb_reservaXservicio` (`id_reserva`, `id_servicio`) VALUES
(1, 3),
(2, 5),
(4, 3),
(4, 6),
(5, 1),
(5, 2),
(5, 4),
(6, 1),
(6, 2),
(6, 4),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(7, 7),
(9, 3),
(13, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_servicio`
--

CREATE TABLE `tb_servicio` (
  `id_servicio` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `id_departamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_servicio`
--

INSERT INTO `tb_servicio` (`id_servicio`, `nombre`, `descripcion`, `precio`, `id_departamento`) VALUES
(1, 'Guarderia', 'Cuidado de niños pequeños para que sus padres puedan pasar un rato solos', 50, 3),
(2, 'Espectáculo nocturno', NULL, 0, 3),
(3, 'Spa & masaje', NULL, 150, 5),
(4, 'Lavanderia', NULL, 20, 4),
(5, 'Peluquería', NULL, 15, 5),
(6, 'Gimnasio', NULL, 35, 5),
(7, 'Servicio de habitaciones', NULL, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `dni` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nik` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clave` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rol` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `dni`, `nik`, `clave`, `email`, `rol`) VALUES
(1, '45322197A', 'ADMIN', 'ROOT', 'ADMIN@GMAIL.COM', 'admin'),
(2, '78659011R', 'TMU', '1234', 'JUAN@GMAIL.COM', 'usr'),
(3, '23456789P', 'Linda', '1111', 'MADRID@MSN.COM', 'usr'),
(5, '32436534R', 'manolo', '1234', 'manolo@gmailcom', 'usr'),
(6, '78819396y', 'junior', '1234', 'juniorpinillos123@gmail.com', 'usr'),
(7, '34658756A', 'sara', '5434', 'sara@gmail.com', 'usr'),
(8, '78423471A', 'severyn', '111', 'severyn00@gmail.com', 'usr');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_aficion`
--
ALTER TABLE `tb_aficion`
  ADD PRIMARY KEY (`id_aficion`);

--
-- Indices de la tabla `tb_categoria`
--
ALTER TABLE `tb_categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `tb_cliente`
--
ALTER TABLE `tb_cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `tb_clienteXaficion`
--
ALTER TABLE `tb_clienteXaficion`
  ADD PRIMARY KEY (`id_cliente`,`id_aficion`),
  ADD KEY `id_aficion` (`id_aficion`);

--
-- Indices de la tabla `tb_departamento`
--
ALTER TABLE `tb_departamento`
  ADD PRIMARY KEY (`id_departamento`);

--
-- Indices de la tabla `tb_empleado`
--
ALTER TABLE `tb_empleado`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `fk_id_departamento` (`id_departamento`);

--
-- Indices de la tabla `tb_empleadoXhabitacion`
--
ALTER TABLE `tb_empleadoXhabitacion`
  ADD PRIMARY KEY (`id_empleado`,`id_habitacion`),
  ADD KEY `id_habitacion` (`id_habitacion`);

--
-- Indices de la tabla `tb_empleadoXreserva`
--
ALTER TABLE `tb_empleadoXreserva`
  ADD PRIMARY KEY (`id_empleado`,`id_reserva`),
  ADD KEY `id_reserva` (`id_reserva`);

--
-- Indices de la tabla `tb_habitacion`
--
ALTER TABLE `tb_habitacion`
  ADD PRIMARY KEY (`id_habitacion`),
  ADD KEY `fk_id_categoria` (`id_categoria`);

--
-- Indices de la tabla `tb_reserva`
--
ALTER TABLE `tb_reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `fk_id_cliente` (`id_cliente`),
  ADD KEY `fk_id_habitacion` (`id_habitacion`),
  ADD KEY `fk_id_empleado` (`id_empleado`);

--
-- Indices de la tabla `tb_reservaXservicio`
--
ALTER TABLE `tb_reservaXservicio`
  ADD PRIMARY KEY (`id_reserva`,`id_servicio`),
  ADD KEY `id_servicio` (`id_servicio`);

--
-- Indices de la tabla `tb_servicio`
--
ALTER TABLE `tb_servicio`
  ADD PRIMARY KEY (`id_servicio`),
  ADD KEY `fk_id_departamento2` (`id_departamento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `usuario_pk` (`dni`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb_clienteXaficion`
--
ALTER TABLE `tb_clienteXaficion`
  ADD CONSTRAINT `tb_clienteXaficion_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `tb_cliente` (`id_cliente`),
  ADD CONSTRAINT `tb_clienteXaficion_ibfk_2` FOREIGN KEY (`id_aficion`) REFERENCES `tb_aficion` (`id_aficion`);

--
-- Filtros para la tabla `tb_empleado`
--
ALTER TABLE `tb_empleado`
  ADD CONSTRAINT `fk_id_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `tb_departamento` (`id_departamento`);

--
-- Filtros para la tabla `tb_empleadoXhabitacion`
--
ALTER TABLE `tb_empleadoXhabitacion`
  ADD CONSTRAINT `tb_empleadoXhabitacion_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `tb_empleado` (`id_empleado`),
  ADD CONSTRAINT `tb_empleadoXhabitacion_ibfk_2` FOREIGN KEY (`id_habitacion`) REFERENCES `tb_habitacion` (`id_habitacion`);

--
-- Filtros para la tabla `tb_empleadoXreserva`
--
ALTER TABLE `tb_empleadoXreserva`
  ADD CONSTRAINT `tb_empleadoXreserva_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `tb_empleado` (`id_empleado`),
  ADD CONSTRAINT `tb_empleadoXreserva_ibfk_2` FOREIGN KEY (`id_reserva`) REFERENCES `tb_reserva` (`id_reserva`);

--
-- Filtros para la tabla `tb_habitacion`
--
ALTER TABLE `tb_habitacion`
  ADD CONSTRAINT `fk_id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `tb_categoria` (`id_categoria`);

--
-- Filtros para la tabla `tb_reserva`
--
ALTER TABLE `tb_reserva`
  ADD CONSTRAINT `fk_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `tb_cliente` (`id_cliente`),
  ADD CONSTRAINT `fk_id_empleado` FOREIGN KEY (`id_empleado`) REFERENCES `tb_empleado` (`id_empleado`),
  ADD CONSTRAINT `fk_id_habitacion` FOREIGN KEY (`id_habitacion`) REFERENCES `tb_habitacion` (`id_habitacion`);

--
-- Filtros para la tabla `tb_reservaXservicio`
--
ALTER TABLE `tb_reservaXservicio`
  ADD CONSTRAINT `tb_reservaXservicio_ibfk_1` FOREIGN KEY (`id_reserva`) REFERENCES `tb_reserva` (`id_reserva`),
  ADD CONSTRAINT `tb_reservaXservicio_ibfk_2` FOREIGN KEY (`id_servicio`) REFERENCES `tb_servicio` (`id_servicio`);

--
-- Filtros para la tabla `tb_servicio`
--
ALTER TABLE `tb_servicio`
  ADD CONSTRAINT `fk_id_departamento2` FOREIGN KEY (`id_departamento`) REFERENCES `tb_departamento` (`id_departamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
