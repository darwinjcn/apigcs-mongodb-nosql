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
│   ├── doc_comandos_nosql.pdf
│   └── pautas_proyecto.pdf
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

<img src="docs/screenshots/01_operador_in.png" alt="Operador $in" width="350" />




**Operador `$gt`** - Documentos con versión mayor a 1:

<img src="docs/screenshots/02_operador_gt.png" alt="Operador $gt" width="350" />




**Operador `$lte`** - Usuarios con ID menor o igual a 50:

<img src="docs/screenshots/03_operador_lte.png" alt="Operador $lte" width="350" />




### Operadores de Agregación




**`$group` y `$sum`** - Agrupación en colección blog:

<img src="docs/screenshots/04_agregacion_blog.png" alt="Agregación Blog" width="350" />




**`$group` y `$sum`** - Contabilización de documentos por categoría:

<img src="docs/screenshots/05_agregacion_documentos.png" alt="Agregación Documentos" width="350" />




### Operadores de Elementos




**Operador `$exists`** - Verificación de campos existentes:

<img src="docs/screenshots/06_operador_exists.png" alt="Operador $exists" width="350" />




**Operador `$type`** - Validación de tipos de datos:

<img src="docs/screenshots/07_operador_type.png" alt="Operador $type" width="350" />




### Operadores Lógicos




**Operador `$and`** - Condiciones combinadas:

<img src="docs/screenshots/08_operador_and.png" alt="Operador $and" width="350" />




**Operador `$or`** - Búsqueda multi-criterio:

<img src="docs/screenshots/09_operador_or.png" alt="Operador $or" width="350" />




**Operador `$not`** - Exclusión de estados:

<img src="docs/screenshots/10_operador_not.png" alt="Operador $not" width="350" />

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

## 📚 Documentación

Todo el material documental del proyecto se encuentra organizado dentro del repositorio. A continuación se detalla la ubicación de cada recurso:

| Ubicación | Contenido |
|-----------|-----------|
| `docs/` | Carpeta raíz de documentación técnica |
| `docs/doc_comandos_nosql.pdf` | Informe principal de la evaluación con resultados |
| `docs/pautas_proyecto.pdf` | Pautas y criterios oficiales de la evaluación |
| `docs/screenshots/` | Capturas de pantalla de la ejecución de las consultas |
| `queries/` | Scripts `.js` con las queries de MongoDB documentadas |

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
  <sub>2026. Proyecto profesional de gestión de bases de datos NoSQL.</sub>
</p>
