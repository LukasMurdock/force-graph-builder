//@ts-check

import Nodes from './data/mkt315.mjs';
import * as fs from 'fs';

let nodes = [];
const links = [];

const addNodes = (node, group) => {
    nodes.push({
        id: node.id,
        group: group,
    });
    if (node.Links) {
        node.Links.forEach((link) => {
            nodes.push({
                id: link.id,
                group: group + 1,
            });

            links.push({
                source: node.id,
                target: link.id,
            });
            if (link.Links) {
                addNodes(link, group + 1);
            }
        });
    }
};

addNodes(Nodes, 1);

const deDupeNodes = () => {
    // get distinct ids
    const distinctNodes = nodes.filter((thing, index, self) => {
        return index === self.findIndex((t) => t.id === thing.id);
    });
    console.log(distinctNodes);
    // filter each distict id
    distinctNodes.forEach((node) => {
        const filteredIdsInArray = nodes.filter((e) => e.id === node.id);
        console.log(filteredIdsInArray);

        const smallestId = filteredIdsInArray.reduce((prev, current) =>
            prev.group > current.group ? current : prev
        );

        console.log('result: ' + JSON.stringify(smallestId));
        nodes = nodes.filter((e) => e.id !== node.id);
        nodes.push(smallestId);
    });
};

deDupeNodes();

const data = {
    nodes: nodes,
    links: links,
};

console.log(nodes);

// Tests
console.log('Depth 1: ' + (nodes[nodes.findIndex((e) => e.id === 'Value Creation')].group === 1));
console.log('Depth 2: ' + (nodes[nodes.findIndex((e) => e.id === 'Marketing')].group === 2));
console.log('Depth 2: ' + (nodes[nodes.findIndex((e) => e.id === 'Recruitment')].group === 2));
console.log('Depth 3: ' + (nodes[nodes.findIndex((e) => e.id === 'Strategy')].group === 3));

fs.writeFile('./deploy/mkt315.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) throw err;
    console.log('JSON file written');
});
