/*
  Warnings:

  - You are about to alter the column `estado` on the `Publicacion` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Publicacion" (
    "idPublicacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "estado" INTEGER NOT NULL,
    "departamento" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "coordenadas" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipoid" INTEGER NOT NULL,
    CONSTRAINT "Publicacion_tipoid_fkey" FOREIGN KEY ("tipoid") REFERENCES "TipoPublicacion" ("idTipoPublicacion") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Publicacion" ("ciudad", "coordenadas", "departamento", "descripcion", "direccion", "estado", "idPublicacion", "precio", "tipoid", "titulo") SELECT "ciudad", "coordenadas", "departamento", "descripcion", "direccion", "estado", "idPublicacion", "precio", "tipoid", "titulo" FROM "Publicacion";
DROP TABLE "Publicacion";
ALTER TABLE "new_Publicacion" RENAME TO "Publicacion";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
