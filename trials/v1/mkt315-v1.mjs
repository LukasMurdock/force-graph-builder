// @ts-check
const Nodes = [
    {
        id: 'Value Creation',
        group: 1,
        Links: [
            { target: 'Marketing' },
            {
                target: 'Ethics',
                Links: [
                    { target: 'Marketing' },
                    { target: 'Recruitment' },
                    { target: 'Management' },
                    { target: 'Sales' },
                    { target: 'Technology' },
                ],
            },
            { target: 'Recruitment' },
            { target: 'Management' },
            { target: 'Sales' },
            { target: 'Technology' },
        ],
    },
    {
        id: 'Marketing',
        group: 2,
    },
    {
        id: 'Ethics',
        group: 2,
    },
    {
        id: 'Recruitment',
        group: 3,
    },
    {
        id: 'Management',
        group: 4,
    },
    {
        id: 'Sales',
        group: 4,
    },
    {
        id: 'Technology',
        group: 5,
    },
];

export default Nodes;
