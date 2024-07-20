

function Publicar() {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-10">
       <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 class="text-2xl font-bold mb-6">Formulario de Publicación</h2>
        <form action="#" method="POST">
            <div class="mb-4">
                <label for="titulo" class="block text-gray-700 font-bold mb-2">Título</label>
                <input type="text" id="titulo" name="titulo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  />
            </div>
            <div class="mb-4">
                <label for="descripcion" class="block text-gray-700 font-bold mb-2">Descripción</label>
                <textarea id="descripcion" name="descripcion" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
            </div>
            <div class="mb-4">
                <label for="precio" class="block text-gray-700 font-bold mb-2">Precio</label>
                <input type="number" id="precio" name="precio" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="estado" class="block text-gray-700 font-bold mb-2">Estado</label>
                <input type="text" id="estado" name="estado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="departamento" class="block text-gray-700 font-bold mb-2">Departamento</label>
                <input type="text" id="departamento" name="departamento" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="ciudad" class="block text-gray-700 font-bold mb-2">Ciudad</label>
                <input type="text" id="ciudad" name="ciudad" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="coordenadas" class="block text-gray-700 font-bold mb-2">Coordenadas</label>
                <input type="text" id="coordenadas" name="coordenadas" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="direccion" class="block text-gray-700 font-bold mb-2">Dirección</label>
                <input type="text" id="direccion" name="direccion" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div class="mb-4">
                <label for="tipoPublicacion" class="block text-gray-700 font-bold mb-2">Tipo de Publicación</label>
                <select id="tipoPublicacion" name="tipoPublicacion" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    <option value="">Selecciona una opción</option>
                    <option value="venta">Venta</option>
                    <option value="alquiler">Alquiler</option>
                    <option value="trueque">Trueque</option>
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
