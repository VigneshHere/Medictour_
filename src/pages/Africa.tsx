const Africa = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Medical Tourism from Africa to India
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            World-class medical treatment in India at 70% cost savings for patients from Africa.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose India from Africa?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>60-80% cost savings compared to Europe and South Africa</li>
              <li>No waiting periods for surgeries</li>
              <li>English-speaking medical teams</li>
              <li>Direct flights from major African cities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Africa; // ← THIS LINE IS CRITICAL