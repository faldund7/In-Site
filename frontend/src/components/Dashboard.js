import SimpleCard from "./Card.js";
import Insights from "./Insights.js";

const Dashboard = function(){
    return(
        <div className="dashboard-wrapper">
            <SimpleCard></SimpleCard>
            <Insights></Insights>
        </div>
    );
}

export default Dashboard;