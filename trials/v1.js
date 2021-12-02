const addLinks = (node) => {
    if (node.Links) {
        node.Links.forEach((link) => {
            links.push({
                source: node.id || node.target,
                target: link.target,
            });
            if (link.Links) {
                addLinks(link);
            }
        });
    }
};

Nodes.forEach((node) => {
    const { Links, ...restNode } = node;

    nodes.push(restNode);
    addLinks(node);
});
