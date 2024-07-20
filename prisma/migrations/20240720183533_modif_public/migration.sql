/*
  Warnings:

  - You are about to drop the column `ciudad` on the `Publicacion` table. All the data in the column will be lost.
  - Added the required column `distrito` to the `Publicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provincia` to the `Publicacion` table without a default value. This is not possible if the table is not empty.

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
    "provincia" TEXT NOT NULL,
    "distrito" TEXT NOT NULL,
    "coordenadas" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipoPublicacionid" INTEGER NOT NULL,
    "tipoPropiedadid" INTEGER NOT NULL,
    CONSTRAINT "Publicacion_tipoPublicacionid_fkey" FOREIGN KEY ("tipoPublicacionid") REFERENCES "TipoPublicacion" ("idTipoPublicacion") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Publicacion_tipoPropiedadid_fkey" FOREIGN KEY ("tipoPropiedadid") REFERENCES "TipoPropiedad" ("idTipoPropiedad") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Publicacion" ("coordenadas", "departamento", "descripcion", "direccion", "estado", "idPublicacion", "precio", "tipoPropiedadid", "tipoPublicacionid", "titulo") SELECT "coordenadas", "departamento", "descripcion", "direccion", "estado", "idPublicacion", "precio", "tipoPropiedadid", "tipoPublicacionid", "titulo" FROM "Publicacion";
DROP TABLE "Publicacion";
ALTER TABLE "new_Publicacion" RENAME TO "Publicacion";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
