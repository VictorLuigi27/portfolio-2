export default function ProjectModal({ openModal, setOpenModal, selectedProject }) {
  if (!openModal) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => setOpenModal(false)}
    >
      <div 
        className="relative bg-blue-800 rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-2xl text-white"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Header de la modale */}
        <div className="border-b border-blue-700 pb-4">
          <h2 className="text-lg md:text-2xl font-semibold">{selectedProject.name}</h2>
        </div>

        {/* Corps de la modale */}
        <div className="mt-4">
          <p className="mb-4">{selectedProject.description}</p>
          <p className="mb-4 text-blue-300">
            <strong>Technologies utilisées :</strong> {selectedProject.technologie}
          </p>
          <video controls className="w-full mt-4 rounded-lg">
            <source src={selectedProject.video} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>

        {/* Boutons de lien et de fermeture */}
        <div className="flex justify-end gap-4 mt-6">
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            Voir le projet
          </a>
          <button
            onClick={() => setOpenModal(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-150"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}


