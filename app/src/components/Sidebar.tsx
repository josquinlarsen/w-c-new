const Sidebar = () => {
    
    const pups : Array<String> = ["Pup1", "Pup2", "Pup3"];

    return (
        <>
        <div className="sidebar">
            <div className="mini-menu">
                <h3>My Pups</h3>
                <a>Add</a>
            </div>
            { pups?.map(
                pup => (
                    <p>{pup}</p>
                )
            )}
        </div>
        </> 
    )
};

export default Sidebar;