import { Link } from "@inertiajs/react";

const Ustadz = () => {
    return (
        <div>
            <h1>Ustadz Dashboard</h1>
            <Link href={route("logout")} method="post" as="button">
                Logout
            </Link>
        </div>
    );
};
export default Ustadz;
