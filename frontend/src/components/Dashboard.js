import SimpleCard from "./SimpleCard.js";

const Dashboard = function(){
    return(
        <div className="dashboard-wrapper">
            <SimpleCard></SimpleCard>
            <Insights></Insights>
        </div>
    );
}

export default Dashboard;