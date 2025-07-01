import { useState } from "react";
import UploadModal from "./UploadModel";
import { heroVideo } from "../utils";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4 pt-28 text-center" style={{marginTop:0}}>
        <h1 id="hero" className="text-3xl md:text-5xl font-bold text-gray-900 max-w-3xl opacity-1 transition-opacity duration-500">
            From Photo to Pencil Sketch in Seconds
        </h1>

        <div className="bg-white p-5 rounded-xl shadow-lg max-w-3xl w-full">
            <video className="w-full rounded-md" autoPlay muted playsInline>
            <source src={heroVideo} type="video/mp4" />
            </video>
        </div>

        <div id="cta" className="flex flex-col items-center gap-2 mt-6 opacity-1 translate-y-10 transition-all duration-500">
            <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
            >
            Get Started
            </button>
            <p className="text-gray-600 text-base">For Free</p>
        </div>

        <UploadModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            sketchImageUrl="/images/sketch-sample.png" // replace with actual sketch logic later
        />
        </section>
    );
};

export default Hero;
