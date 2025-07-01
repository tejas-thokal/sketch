import { originalImg, sketchImg } from "../utils";

const Examples = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-lg overflow-hidden max-w-sm mx-auto">
            <img
                src={originalImg}
                alt="Original"
                className="w-full h-auto object-cover"
            />
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">Original Image</h3>
                <p className="text-sm text-gray-600">
                A photo of a modern living room with a sofa and coffee table.
                </p>
            </div>
            </div>

            
            <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-lg overflow-hidden max-w-sm mx-auto">
            <img
                src={sketchImg}
                alt="Converted"
                className="w-full h-auto object-cover"
            />
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">Converted Design</h3>
                <p className="text-sm text-gray-600">
                A pencil sketch version of the modern living room with a sofa and coffee table.
                </p>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Examples;
