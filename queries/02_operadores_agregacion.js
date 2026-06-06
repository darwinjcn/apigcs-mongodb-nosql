// =====================================================
// APIGCS - Operadores de Agregación
// =====================================================

print("==================================================");
print("OPERADORES DE AGREGACIÓN ($group y $sum)");
print("==================================================\n");

// 1. Agrupación por Estado de Contingencia
print(">>> 1. Contingencias agrupadas por estado:");
print("--------------------------------------------------");
db.contingencias.aggregate([
    {
        $group: {
            _id: "$estado",
            total: { $sum: 1 }
        }
    }
]).forEach(function(doc) {
    printjson(doc);
});

// 2. Contabilización de Documentos por Categoría
print("\n>>> 2. Documentos agrupados por categoría:");
print("--------------------------------------------------");
db.documentos.aggregate([
    {
        $group: {
            _id: "$categoria",
            cantidad: { $sum: 1 }
        }
    }
]).forEach(function(doc) {
    printjson(doc);
});

// 3. Bonus: Contar usuarios por departamento
print("\n>>> 3. Usuarios agrupados por departamento:");
print("--------------------------------------------------");
db.usuarios.aggregate([
    {
        $group: {
            _id: "$departamento",
            total: { $sum: 1 }
        }
    }
]).forEach(function(doc) {
    printjson(doc);
});

print("\n==================================================");
print("FIN DE OPERADORES DE AGREGACIÓN");
print("==================================================\n");