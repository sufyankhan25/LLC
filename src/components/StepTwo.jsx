export default function StepTwo({ next, prev, formData, handleChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Business Name:</label>
      <input
        type="text"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        placeholder="e.g., Techify Solutions LLC"
      />

      <label className="block mb-2 font-semibold">Business Address:</label>
      <input
        type="text"
        name="businessAddress"
        value={formData.businessAddress}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        placeholder="123 Main St, City, State"
      />

      <label className="block mb-2 font-semibold">State of Formation:</label>
      <select
        name="formationState"
        value={formData.formationState}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select State</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
        <option value="New York">New York</option>
        <option value="Florida">Florida</option>
        <option value="Delaware">Delaware</option>
      </select>

      <label className="block mb-2 font-semibold">Need Registered Agent?</label>
      <select
        name="registeredAgent"
        value={formData.registeredAgent}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select</option>
        <option value="Yes">Yes, provide one for me</option>
        <option value="No">No, I have my own</option>
      </select>

      <div className="flex justify-between">
        <button onClick={prev} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={next} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
