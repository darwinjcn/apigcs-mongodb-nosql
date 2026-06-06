// =====================================================
// APIGCS - Operadores de Comparación y Selección
// =====================================================

print("==================================================");
print("OPERADORES DE COMPARACIÓN Y SELECCIÓN");
print("==================================================\n");

// 1. Operador $in - Filtrar usuarios por roles
print(">>> 1. Operador $in: Usuarios con rol_id 1, 2 o 3");
print("--------------------------------------------------");
db.usuarios.find({ rol_id: { $in: [1, 2, 3] } }).forEach(function(doc) {
    printjson(doc);
});

// 2. Operador $gt - Documentos con versión mayor a 1
print("\n>>> 2. Operador $gt: Documentos con versión > 1");
print("--------------------------------------------------");
db.documentos.find({ version: { $gt: 1 } }).forEach(function(doc) {
    printjson(doc);
});

// 3. Operador $gte - Documentos con versión mayor o igual a 2
print("\n>>> 3. Operador $gte: Documentos con versión >= 2");
print("--------------------------------------------------");
db.documentos.find({ version: { $gte: 2 } }).forEach(function(doc) {
    printjson(doc);
});

// 4. Operador $lt - Usuarios con ID menor a 100
print("\n>>> 4. Operador $lt: Usuarios con _id < 100");
print("--------------------------------------------------");
db.usuarios.find({ _id: { $lt: 100 } }).forEach(function(doc) {
    printjson(doc);
});

// 5. Operador $lte - Usuarios con ID menor o igual a 50
print("\n>>> 5. Operador $lte: Usuarios con _id <= 50");
print("--------------------------------------------------");
db.usuarios.find({ _id: { $lte: 50 } }).forEach(function(doc) {
    printjson(doc);
});

print("\n==================================================");
print("FIN DE OPERADORES DE COMPARACIÓN");
print("==================================================\n");