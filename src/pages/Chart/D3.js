import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import './Chart.css'
function D3({ width, height, data }) {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("box-shadow", "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px")
            .style("padding", "5rem 15rem")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {

        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height - 100]);

        selection
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "green")
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .exit()
            .transition().duration(300)
            .attr("y", (d) => height)
            .attr("height", 0)
            .remove()
    }
    return (
        <div className="chart">
            <h1>Bar Chart by D3</h1>
            <svg ref={ref}>
            </svg>
        </div>

    )

}

export default D3;