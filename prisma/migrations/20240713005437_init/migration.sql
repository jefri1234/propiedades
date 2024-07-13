-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "dni" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TipoPublicacion" (
    "idTipoPublicacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Publicacion" (
    "idPublicacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "estado" BIGINT NOT NULL,
    "departamento" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "coordenadas" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipoid" INTEGER NOT NULL,
    CONSTRAINT "Publicacion_tipoid_fkey" FOREIGN KEY ("tipoid") REFERENCES "TipoPublicacion" ("idTipoPublicacion") ON DELETE RESTRICT ON UPDATE CASCADE
);
