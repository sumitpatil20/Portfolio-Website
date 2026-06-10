import "./Projects.css";

function ProjectModal({
  videoUrl,
  closeModal
}) {

  return (

    <div
      className="video-modal"
      onClick={closeModal}
    >

      <div
        className="video-container"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <iframe
          src={videoUrl}
          title="Project Demo"
          allowFullScreen
        />

      </div>

    </div>

  );
}

export default ProjectModal;