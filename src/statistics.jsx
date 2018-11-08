import React from "react"
import Chart from "chart.js"
import {Box} from "grommet"

export class Statistics extends React.Component {

    render() {
        return (
            <Box
                fill align="center"
                pad={{top: "large"}}
            >
                <canvas id="myChart" height="350px" width="700px"/>
            </Box>
        )
    }

    componentDidMount() {
        const dates = ["art", "science", "literature", "history"];
        const values = [25, 40, 15, 10];


        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: dates,
                datasets: [
                    {
                        data: values,
                        label: "Number of posts in category",
                        backgroundColor: ["#FD6FFF", "#61EC9F", "#60EBE1", "#FFCA58"]
                    }
                ]
            }
        });
    }
}