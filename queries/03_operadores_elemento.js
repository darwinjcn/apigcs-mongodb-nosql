// =====================================================
// APIGCS - Operadores de Elemento
// =====================================================

print("==================================================");
print("OPERADORES DE ELEMENTO ($exists y $type)");
print("==================================================\n");

// 1. Operador $exists - Verificar campos en blog
print(">>> 1. Operador $exists: Blog con fecha_registro");
print("--------------------------------------------------");
db.blog.find({ fecha_registro: { $exists: true } }).forEach(function(doc) {
    printjson(doc);
});

// 2. Operador $type - Validar tipo de dato en rol_id
print("\n>>> 2. Operador $type: Usuarios con rol_id de tipo number");
print("--------------------------------------------------");
db.usuarios.find({ rol_id: { $type: "number" } }).forEach(function(doc) {
    printjson(doc);
});

// 3. Bonus: Verificar campos que NO existen
print("\n>>> 3. Operador $exists: Documentos SIN campo eliminado");
print("--------------------------------------------------");
db.documentos.find({ eliminado: { $exists: false } }).forEach(function(doc) {
    printjson(doc);
});

// 4. Bonus: Validar tipo string en campo nombre
print("\n>>> 4. Operador $type: Usuarios con nombre de tipo string");
print("--------------------------------------------------");
db.usuarios.find({ nombre: { $type: "string" } }).forEach(function(doc) {
    printjson(doc);
});

print("\n==================================================");
print("FIN DE OPERADORES DE ELEMENTO");
print("==================================================\n");