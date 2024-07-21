

function Publicar() {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-10">
       <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 class="text-2xl font-bold mb-6">Formulario de Publicación</h2>
        <form action="#" method="POST">
            <div class="mb-4">
                <label for="titulo" class="block text-gray-700 font-bold mb-2">Título</label>
                <input placeholder="Ingrese titulo de la propiedad" type="text" id="titulo" name="titulo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  />
            </div>
            <div class="mb-4">
                <label for="descripcion" class="block text-gray-700 font-bold mb-2">Descripción</label>
                <textarea placeholder="Especifica el lugar donde se encuentra" id="descripcion" name="descripcion" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
            </div>
            <div class="mb-4">
                <label for="precio" class="block text-gray-700 font-bold mb-2">Precio</label>
                <input placeholder="ingresa el precio" type="number" id="precio" name="precio" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="departamento" class="block text-gray-700 font-bold mb-2">Departamento</label>
                <input placeholder="ingrese el departamento" type="text" id="departamento" name="departamento" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="provincia" class="block text-gray-700 font-bold mb-2">Provincia</label>
                <input placeholder="ingrese la provincia" type="text" id="provincia" name="provincia" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="distrito" class="block text-gray-700 font-bold mb-2">Distrito</label>
                <input placeholder="ingrese el distrito" type="text" id="distrito" name="distrito" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="ciudad" class="block text-gray-700 font-bold mb-2">Ciudad</label>
                <input  placeholder="ingrese la ciudad" type="text" id="ciudad" name="ciudad" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="coordenadas" class="block text-gray-700 font-bold mb-2">Coordenadas</label>
                <input placeholder="corrdenanas de la ubicacion" type="text" id="coordenadas" name="coordenadas" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="direccion" class="block text-gray-700 font-bold mb-2">Dirección</label>
                <input placeholder="Avenida-Mz-Lt" type="text" id="direccion" name="direccion" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="tipoPublicacion" class="block text-gray-700 font-bold mb-2">Tipo de Publicación</label>
                <select id="tipoPublicacion" name="tipoPublicacion" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    <option value="">Selecciona una opción</option>
                    <option value="venta">Venta</option>
                    <option value="alquiler">Alquiler</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="tipoPublicacion" class="block text-gray-700 font-bold mb-2">Tipo propiedad</label>
                <select id="tipoPropiedad" name="tipoPropiedad" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    <option value="">Selecciona una opción</option>
                    <option value="venta">terreno</option>
                    <option value="alquiler">casa</option>
                </select>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Enviar
                </button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Publicar
