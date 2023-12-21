const data = [
    { name: '1', count: 5 },
    { name: '2', count: 6 },
];

const width = 700;
const height = 400;
const margin = { top: 40, bottom: 40, left: 40, right: 40 };

const svg = d3.select('#d3-container')
    .append('svg')
    .attr('height', height - margin.top - margin.bottom)
    .attr('width', width - margin.left - margin.right)
    .attr('viewBox', [0, 0, width, height]);

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .paddingInner(0.1);

const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top])

svg
    .append("g")
    .attr("fill", "#556BB0")
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.count, b.count)))
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.count))
    .attr('height', d => y(0) - y(d.count))
    .attr('width', x.bandwidth());

function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr("font-size", '20px')
}

function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].name))
        .attr("font-size", '20px')
}

svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();