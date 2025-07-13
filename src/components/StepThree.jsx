export default function StepThree({ next, prev, formData, handleChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Owner's Full Name:</label>
      <input
        type="text"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        placeholder="e.g., Sufyan Khan"
      />

      <label className="block mb-2 font-semibold">Email Address:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        placeholder="example@gmail.com"
      />

      <label className="block mb-2 font-semibold">Phone Number:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        placeholder="e.g., +92 306 9044757"
      />

      <label className="block mb-2 font-semibold">Ownership Type:</label>
      <select
        name="ownershipType"
        value={formData.ownershipType}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select</option>
        <option value="Individual">Individual</option>
        <option value="Corporation">Corporation</option>
        <option value="Trust">Trust</option>
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
