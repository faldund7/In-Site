import SimpleCard from "./Card.js";
import Insights from "./Insights.js";

const Dashboard = function(){
    return(
        <div className="dashboard-wrapper">
            <div className="pie-chart-wrapper">
                <SimpleCard></SimpleCard>
            </div>
            <div>
                <Insights></Insights>
            </div>
        </div>
    );
}

export default Dashboard;