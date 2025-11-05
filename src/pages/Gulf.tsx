const Gulf = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Medical Tourism from Gulf Countries to India
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Affordable world-class healthcare in India for patients from UAE, Saudi Arabia, Qatar, and other Gulf countries.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose India from Gulf?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>70% cost savings vs private hospitals in UAE/Qatar</li>
              <li>Arabic-speaking staff and coordinators</li>
              <li>Short flight times (3-4 hours)</li>
              <li>JCI accredited hospitals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gulf; // ← THIS LINE IS CRITICAL