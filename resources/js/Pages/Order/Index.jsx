import { router } from "@inertiajs/react";
import React, { useState } from "react";

const OrderForm = () => {
    const [form, setForm] = useState({
        name: "",
        address: "",
        phone: "",
        qty: 0,
        total_price: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk mengirim data (bisa menggunakan Inertia.post)
        console.log(form);

        router.post("/checkout", form);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Order Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Input Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Input Address */}
                    <div>
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>

                    {/* Input Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Input Quantity */}
                    <div>
                        <label
                            htmlFor="qty"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="qty"
                            name="qty"
                            value={form.qty}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow focus:outline-none"
                        >
                            Submit Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
