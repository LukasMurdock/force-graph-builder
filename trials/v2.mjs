//@ts-check

import Nodes from './data/mkt315.mjs';
import * as fs from 'fs';

let nodes = [];
const links = [];

// const addLinks = (node) => {
// if (node.Links) {
//     node.Links.forEach((link) => {
//         links.push({
//             source: node.id || node.target,
//             target: link.target,
//         });
//         if (link.Links) {
//             addLinks(link);
//         }
//     });
// }
// };

// console.log(Nodes);

const addNodes = (node, group) => {
    // const { Links, ...restNode } = node;
    // if (nodes.some((e) => e.id === node.id)) {
    //     console.log(node.id + ' already exists!');
    // }
    // nodes.push({
    //     id: node.id,
    //     group: group,
    // });
    // console.log(node);
    if (node.Links) {
        node.Links.forEach((link) => {
            nodes.push({
                id: link.id,
                group: group,
            });
            const idAlreadyInArray = nodes.some((e) => e.id === link.id);
            if (idAlreadyInArray) {
                // console.log(link.id + ' already exists!');
                const filteredIdsInArray = nodes.filter(
                    (e) => e.id === link.id
                );
                // console.log(filteredIdsInArray);
                const smallestId = filteredIdsInArray.reduce((prev, current) =>
                    prev.id > current.id ? current : prev
                );
                nodes = nodes.filter((e) => e.id !== link.id);

                nodes.push(smallestId);
            }

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

// Nodes.forEach((node) => {
// const { Links, ...restNode } = node;
addNodes(Nodes, 1);
// });

const data = {
    nodes: nodes,
    links: links,
};

console.log(nodes);

// console.log(
//     'Depth 1: ' +
//         (nodes[nodes.findIndex((e) => e.id === 'Value Creation')].group === 1)
// );
// console.log(
//     'Depth 2: ' +
//         (nodes[nodes.findIndex((e) => e.id === 'Marketing')].group === 2)
// );
// console.log(
//     'Depth 2: ' +
//         (nodes[nodes.findIndex((e) => e.id === 'Marketing')].group === 2)
// );
// console.log(
//     'Depth 3: ' +
//         (nodes[nodes.findIndex((e) => e.id === 'Strategy')].group === 3)
// );

// fs.writeFile('mkt315.json', JSON.stringify(data), 'utf8', (err) => {
//     if (err) throw err;
//     console.log('JSON file written');
// });
