// =====================================================
// APIGCS - Operadores Lógicos
// =====================================================

print("==================================================");
print("OPERADORES LÓGICOS ($and, $or, $not)");
print("==================================================\n");

// 1. Operador $and - Documentos con versión > 1 Y categoría específica
print(">>> 1. Operador $and: Documentos con versión > 1 Y categoría 'Informe'");
print("--------------------------------------------------");
db.documentos.find({
    $and: [
        { version: { $gt: 1 } },
        { categoria: "Informe" }
    ]
}).forEach(function(doc) {
    printjson(doc);
});

// 2. Operador $or - Usuarios con rol 1 O departamento Operaciones
print("\n>>> 2. Operador $or: Usuarios con rol_id 1 O departamento 'Operaciones'");
print("--------------------------------------------------");
db.usuarios.find({
    $or: [
        { rol_id: 1 },
        { departamento: "Operaciones" }
    ]
}).forEach(function(doc) {
    printjson(doc);
});

// 3. Operador $not - Documentos que NO están eliminados
print("\n>>> 3. Operador $not: Documentos que NO tienen estado 'Eliminado'");
print("--------------------------------------------------");
db.documentos.find({
    estado: { $not: { $eq: "Eliminado" } }
}).forEach(function(doc) {
    printjson(doc);
});

// 4. Bonus: Combinación $and con $or
print("\n>>> 4. Combinado: (versión > 1) Y (categoría 'Informe' O 'Reporte')");
print("--------------------------------------------------");
db.documentos.find({
    $and: [
        { version: { $gt: 1 } },
        { $or: [
            { categoria: "Informe" },
            { categoria: "Reporte" }
        ]}
    ]
}).forEach(function(doc) {
    printjson(doc);
});

print("\n==================================================");
print("FIN DE OPERADORES LÓGICOS");
print("==================================================\n");