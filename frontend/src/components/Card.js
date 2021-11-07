import styled, { css } from 'styled-components';
import Chart from 'react-apexcharts';
import { useState } from 'react';

const Card = styled.div`
    height: 350px;
    width: 350px;
    border-radius: 1rem;
    background: #053868;
    margin-top: 25px;
`
const ChartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardTitle = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 40px;
    font-family: Helvetica;
    font-weight: bold;
    margin-top: 10px;
`

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: black;
`


const SimpleCard = function(){
    const [options, setOptions] = useState({
        chart: {
            animations: {
              enabled: false,
            },
          },
          grid: {
            padding: {
              top: 20,
              left: 0,
              right: 0,
              bottom: 20,
            },
          },
          stroke: {
            show: false,
          },
          tooltip: { enabled: false },
          legend: { show: false },
          dataLabels: { 
              enabled: true,
              formatter: function (val) {
                  return val + '%';
              },
         },
          plotOptions: { pie: { pie: { size: "100%" } } },
    
    });

    const series = [20, 50, 30];

    return(
        <Card>
            <CardTitle>83% True</CardTitle>
            {/* <CardContent></CardContent> */}
            <ChartDiv>
                <Chart options={options}
                series={series}
                type="pie"
                width="100%"
                height="auto"
                >
                </Chart>
            </ChartDiv>
        </Card>
    );
}

export default SimpleCard;