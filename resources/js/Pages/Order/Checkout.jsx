import { router, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

const CheckoutDetails = () => {
    const { order, snapToken, clientKey } = usePage().props;
    console.log(snapToken);
    console.log(clientKey);
    useEffect(() => {
        // Load the Snap.js script dynamically
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", clientKey);
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [clientKey]);

    const handlePayment = () => {
        if (window.snap) {
            window.snap.pay(snapToken, {
                onSuccess: (result) => {
                    router.visit(`/invoice/${order.id}`);

                    // Redirect or handle success logic
                },
                onPending: (result) => {
                    alert("Payment pending!");
                    console.log(result);
                    // Redirect or handle pending logic
                },
                onError: (result) => {
                    alert("Payment failed!");
                    console.log(result);
                    // Handle error
                },
                onClose: () => {
                    alert("You closed the payment popup without finishing.");
                },
            });
        } else {
            alert("Snap.js is not loaded.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Checkout Details
                </h2>
                <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 text-left">Field</th>
                            <th className="px-4 py-2 text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Order ID</td>
                            <td className="border px-4 py-2">{order.id}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Name</td>
                            <td className="border px-4 py-2">{order.name}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Address</td>
                            <td className="border px-4 py-2">
                                {order.address}
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Phone</td>
                            <td className="border px-4 py-2">{order.phone}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Quantity</td>
                            <td className="border px-4 py-2">{order.qty}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Total Price</td>
                            <td className="border px-4 py-2">
                                Rp {order.total_price}
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Status</td>
                            <td className="border px-4 py-2 capitalize">
                                {order.status}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-6 text-center">
                    <button
                        onClick={() => handlePayment()}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDetails;
