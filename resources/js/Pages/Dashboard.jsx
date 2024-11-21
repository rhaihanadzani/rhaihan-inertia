import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

export default function Dashboard(props) {
    const onLogout = (e) => {
        e.preventDefault();
        router.post("/logout");
    };
    console.log(props);
    return (
        <Authenticated auth={props.auth} header={props.auth.user.name}>
            <h1>User Dashboard</h1>
            <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </Authenticated>
    );
}
