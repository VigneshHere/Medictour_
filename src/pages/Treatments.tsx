const Treatments = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Medical Treatments
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Comprehensive medical procedures available for international patients in India.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Cardiac Surgery</h3>
              <p>Bypass surgery, valve replacement, angioplasty</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Cosmetic Surgery</h3>
              <p>Plastic surgery, breast augmentation, liposuction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments; // ← THIS LINE IS CRITICAL