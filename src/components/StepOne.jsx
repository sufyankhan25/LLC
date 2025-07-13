export default function StepOne({ next, formData, handleChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Select Business Type:</label>
      <select
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select...</option>
        <option value="LLC">LLC</option>
        <option value="Corporation">Corporation</option>
        <option value="Sole Proprietor">Sole Proprietor</option>
      </select>

      <button onClick={next} className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
}
