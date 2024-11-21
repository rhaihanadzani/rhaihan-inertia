const Pelajaran = (props) => {
    console.log(props);

    return (
        <div className="space-y-5">
            {props.pelajarans.map((pelajaran, i) => {
                const formatDate = new Date(pelajaran.created_at);
                return (
                    <div
                        key={i}
                        className="bg-slate-400 w-1/2 p-5 rounded-lg mx-auto text-center mt-10 text-yellow-200 font-semibold shadow-md shadow-yellow-300"
                    >
                        <h1>{pelajaran.name}</h1>
                        <p> {formatDate.toLocaleDateString()}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default Pelajaran;
