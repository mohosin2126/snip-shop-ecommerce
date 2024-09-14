import background from "../../assets/base.svg";

export default function Banner() {
    return (
        <section
            className="relative bg-cover bg-no-repeat bg-center p-8 md:p-16"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

                {/* Text Section */}
                <div className="max-w-lg space-y-4 text-center md:text-left">
                    <p className="text-sm font-light">100% QUALITY, 100% SATISFACTION</p>
                    <h1 className="text-4xl md:text-6xl font-bold">Where the world comes to shop.</h1>
                    <p className="text-md md:text-lg text-gray-700">
                        Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.
                    </p>
                    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                        SHOP NOW
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative">
                    <div className="relative rounded-full bg-white p-4 shadow-lg w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                        {/*<img src="/camera.jpg" alt="Camera" className="object-contain" />*/}
                    </div>
                    {/* Additional Items */}
                    <div className="absolute right-0 top-1/4 transform translate-x-16">
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col items-center">
                                <img src="/lens.jpg" alt="Lens" className="w-16 h-16 rounded-full object-cover" />
                                <span className="text-xs mt-2">Fuji 14mm Lens</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/stand.jpg" alt="Camera Stand" className="w-16 h-16 rounded-full object-cover" />
                                <span className="text-xs mt-2">Camera Stand</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price and Navigation */}
                <div className="absolute bottom-10 left-10 flex flex-col space-y-4">
                    <p className="text-lg">Start from <span className="text-3xl font-bold">110.00$</span></p>
                    <div className="flex space-x-2">
                        <button className="text-gray-500">PREV</button>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <button className="text-gray-500">NEXT</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
