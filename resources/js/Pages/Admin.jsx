import { Head, Link } from "@inertiajs/react";

const Admin = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Link href={route("logout")} method="post" as="button">
                Logout
            </Link>
        </div>
    );
};
export default Admin;
