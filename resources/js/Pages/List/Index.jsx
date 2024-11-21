import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

const Index = () => {
    const [list, setList] = useState("");
    const { lists } = usePage().props;
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            list: list,
        };
        router.post("/list-product/create", data, {
            onSuccess: () => setList(""),
        });
    };

    return (
        <div className="space-y-20 px-5">
            <h1 className="text-3xl text-center font-bold">List Product</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-1/2 mx-auto mt-10 space-y-5"
            >
                <input
                    type="text"
                    value={list}
                    onChange={(e) => setList(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white  px-4 py-2"
                >
                    Submit
                </button>
            </form>

            <div>
                <h1 className="text-3xl font-bold text-center">List</h1>
                <div className="w-1/2 mx-auto flex justify-center">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-300">
                                <th className="w-10">No</th>
                                <th className="w-28">Name</th>
                                <th className="w-28">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lists.map((list, i) => (
                                <tr key={i}>
                                    <td className="text-center">{i + 1}</td>
                                    <td className="text-center">{list.name}</td>
                                    <td className="flex justify-center">
                                        <button
                                            onClick={() =>
                                                router.delete(
                                                    `/list-product/${list.id}`
                                                )
                                            }
                                            className="bg-red-500 text-white px-4 py-2"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Index;
