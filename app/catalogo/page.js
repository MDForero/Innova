
export default function catalogo() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-8 text-3xl font-semibold text-gray-800">Bienvenido al Catálogo de Productos de INNOVA</h2>
      <p className="max-w-5xl text-gray-700 font-medium ">En INNOVA Publicidad, nuestra pasión es hacer que tu marca destaque en un mundo lleno de posibilidades. Te presentamos nuestro exclusivo catálogo de productos, una selección cuidadosamente curada para impulsar el reconocimiento y el impacto de tu empresa.</p>
      <iframe src='/CatalogoEsferosyllaverosINNOVA2023-comprimido.pdf' className="max-w-6xl w-full px-4 h-[80vh] mt-12" />
      <iframe src='/Promocionales2023Web.pdf' className="max-w-6xl w-full px-4 h-[80vh] mt-12"  />
    </div>
  )
}
