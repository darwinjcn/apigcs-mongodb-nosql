# APIGCS - MongoDB NoSQL Data Management

### Gestión de Contingencias Satelitales

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/NoSQL-Documental-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Windows_11-0078D6?style=for-the-badge&logo=windows&logoColor=white" />
  <img src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" />
</p>

---

## 📋 Resumen

Proyecto de gestión de datos NoSQL aplicado a un sistema de **Gestión de Contingencias Satelitales (APIGCS)**. Implementa operadores avanzados de MongoDB para filtrado, agregación, validación de esquemas y consultas multicriterio sobre un modelo de datos documental.

### ✨ Capacidades Destacadas

- 🔍 **Filtrado avanzado** de documentos por rangos, tipos y existencia de campos
- 📊 **Agregación de datos** para generación de métricas y reportes operativos
- 🛡️ **Validación de esquemas flexibles** en bases de datos NoSQL
- 🧠 **Consultas complejas** con lógica condicional multi-criterio

**Colecciones del sistema:**

| Colección | Descripción |
|-----------|-------------|
| `usuarios` | Personal técnico por unidad operativa |
| `blog` | Bitácora de incidencias con prioridad y estado |
| `documentos` | Documentación técnica versionada |
| `temas_foro` / `comentarios_foro` | Foro de soporte técnico |
| `calendario`, `categorias_documentos`, `logs`, `roles` | Tablas auxiliares del sistema |

---

## 📁 Estructura del Proyecto

```
apigcs-mongodb-nosql/
├── docs/
│   ├── screenshots/
│   │   ├── 01_operador_in.png
│   │   ├── 02_operador_gt.png
│   │   ├── 03_operador_lte.png
│   │   ├── 04_agregacion_blog.png
│   │   ├── 05_agregacion_documentos.png
│   │   ├── 06_operador_exists.png
│   │   ├── 07_operador_type.png
│   │   ├── 08_operador_and.png
│   │   ├── 09_operador_or.png
│   │   └── 10_operador_not.png
│   ├── Evaluacion_2_comandos_Nosql.pdf
│   └── pautas_evaluacion.pdf
├── data/
│   └── dump/
│       └── apigcs/
├── queries/
│   ├── 01_operadores_comparacion.js
│   ├── 02_operadores_agregacion.js
│   ├── 03_operadores_elemento.js
│   └── 04_operadores_logicos.js
├── README.md
└── .gitignore
```

---

## 🖼️ Galería de Consultas

### Operadores de Comparación




**Operador `$in`** - Filtrar usuarios por roles específicos:

![Operador $in](docs/screenshots/01_operador_in.png)




**Operador `$gt`** - Documentos con versión mayor a 1:

![Operador $gt](docs/screenshots/02_operador_gt.png)




**Operador `$lte`** - Usuarios con ID menor o igual a 50:

![Operador $lte](docs/screenshots/03_operador_lte.png)




### Operadores de Agregación




**`$group` y `$sum`** - Agrupación en colección blog:

![Agregación Blog](docs/screenshots/04_agregacion_blog.png)




**`$group` y `$sum`** - Contabilización de documentos por categoría:

![Agregación Documentos](docs/screenshots/05_agregacion_documentos.png)




### Operadores de Elementos




**Operador `$exists`** - Verificación de campos existentes:

![Operador $exists](docs/screenshots/06_operador_exists.png)




**Operador `$type`** - Validación de tipos de datos:

![Operador $type](docs/screenshots/07_operador_type.png)




### Operadores Lógicos




**Operador `$and`** - Condiciones combinadas:

![Operador $and](docs/screenshots/08_operador_and.png)




**Operador `$or`** - Búsqueda multi-criterio:

![Operador $or](docs/screenshots/09_operador_or.png)




**Operador `$not`** - Exclusión de estados:

![Operador $not](docs/screenshots/10_operador_not.png)

---

## 🎯 Operadores Implementados

| Categoría | Operadores | Caso de Uso |
|-----------|------------|-------------|
| **Comparación** | `$gt`, `$gte`, `$lt`, `$lte`, `$in` | Filtrado por versión, rangos de ID y unidades operativas |
| **Agregación** | `$group`, `$sum` | Métricas de incidencias y documentos por categoría |
| **Elementos** | `$exists`, `$type` | Auditoría de esquemas flexibles y validación de tipos |
| **Lógicos** | `$and`, `$or`, `$not` | Consultas multicriterio para reportes operativos |

### 📊 Detalle de Consultas

| # | Operador | Descripción |
|---|----------|-------------|
| 01 | `$in` | Usuarios de unidades Camatagua / Baemari |
| 02 | `$gt` | Documentos con versión > 1.0.2 |
| 03 | `$lte` | Comentarios de foro con creador ID ≤ 3 |
| 04 | `$group` + `$sum` | Conteo de incidencias por estado |
| 05 | `$group` + `$sum` | Documentos subidos por categoría |
| 06 | `$exists` | Verificación de campo `titulo` en blog |
| 07 | `$type` | Validación numérica de `rol_id` |
| 08 | `$and` | Incidencias Alta + En Progreso |
| 09 | `$or` | Temas resueltos o de usuario ID 2 |
| 10 | `$not` | Exclusión de unidad operativa Caracas |

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- MongoDB Community Server ≥ 8.0
- MongoDB Database Tools (`mongorestore`)
- MongoDB Shell (`mongosh`)
- MongoDB Compass *(opcional, recomendado)*

### 1. Clonar el repositorio

```bash
git clone https://github.com/darwinjcn/apigcs-mongodb-nosql.git
cd apigcs-mongodb-nosql
```

### 2. Restaurar la base de datos

Asegúrate de que MongoDB esté corriendo como servicio. Ejecuta el siguiente comando desde la raíz del proyecto:

```bash
mongorestore --db apigcs data/dump/apigcs
```

### 3. Ejecutar los scripts de queries

```bash
mongosh queries/01_operadores_comparacion.js
mongosh queries/02_operadores_agregacion.js
mongosh queries/03_operadores_elemento.js
mongosh queries/04_operadores_logicos.js
```

---

## 📸 Documentación Visual

Las capturas de ejecución en consola están disponibles en `./docs/screenshots/`.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| Motor | MongoDB 8.3.2 (NoSQL Documental) |
| Shell | mongosh 2.8.3 + PowerShell |
| GUI | MongoDB Compass |
| Sistema Operativo | Windows 11 Pro |
| Documentación | Markdown + PDF técnico |

---

## 👥 Equipo

- **Ana Contreras**
- **Diana Sierra**
- **Darwin Colmenares**

---

<p align="center">
  <sub>Proyecto profesional de gestión de bases de datos NoSQL.</sub>
</p>
