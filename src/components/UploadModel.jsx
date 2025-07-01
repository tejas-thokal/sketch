import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const UploadModal = ({ isOpen, onClose, sketchImageUrl }) => {
  const modalRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  // Animate modal when open
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex justify-center items-center">

      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Upload Your Photo
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Convert to Sketch
        </button>

        {selectedImage && (
          <div className="mt-6 flex justify-center gap-4">
            <div>
              <p className="text-sm font-semibold text-center">Original</p>
              <img src={selectedImage} alt="original" className="w-32 rounded" />
            </div>
            <div>
              <p className="text-sm font-semibold text-center">Sketch</p>
              <img src={sketchImageUrl} alt="sketch" className="w-32 rounded" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModal;
