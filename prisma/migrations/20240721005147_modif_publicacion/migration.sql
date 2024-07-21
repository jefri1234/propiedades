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
CREATE TABLE "TipoPropiedad" (
    "idTipoPropiedad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
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
