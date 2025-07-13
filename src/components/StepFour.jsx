export default function StepFour({ formData, prev }) {
  const handleSubmit = () => {
    console.log("Submitted:", formData);
    alert("LLC Registered Successfully!");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Review Information:</h2>
      <pre className="bg-gray-100 p-4">{JSON.stringify(formData, null, 2)}</pre>

      <div className="mt-4">
        <button onClick={prev} className="bg-gray-500 text-white px-4 py-2 mr-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
