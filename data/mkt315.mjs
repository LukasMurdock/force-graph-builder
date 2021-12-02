// @ts-check
const Nodes = {
    id: 'Value Creation',
    color: '#AD102A',
    Links: [
        {
            id: 'Marketing',
            color: '#C41230',
            Links: [
                { id: 'Capability' },
                { id: 'Strategy' },
                { id: 'Measurement' },
                { id: 'Building a brand' },
                {
                    id: 'Ethics',
                    Links: [
                        { id: 'Recruitment' },
                        { id: 'Management' },
                        { id: 'Sales' },
                        { id: 'Technology' },
                    ],
                },
            ],
        },
        {
            id: 'Recruitment',
            color: '#C41230',
            Links: [
                { id: 'Capability' },
                { id: 'Hiring', Links: [{ id: 'Building a team' }] },
                // { id: 'Marketing' },
                { id: 'Department founding', Links: [{ id: 'Building a team' }] },
                { id: 'Retaining', Links: [{ id: 'Building a team' }] },
                { id: 'Diversity', Links: [{ id: 'Building a team' }] },
                { id: 'Nurturing culture', Links: [{ id: 'Building a team' }] },
            ],
        },
        {
            id: 'Management',
            color: '#C41230',
            Links: [
                { id: 'Time management', Links: [{ id: 'Capability' }] },
                { id: 'Communication', Links: [{ id: 'Capability' }] },
                { id: 'Motivating' },
                { id: 'Strategy' },
                { id: 'Sales manager challenges' },
                { id: 'Balancing people and process', Links: [{ id: 'Capability' }] },
                { id: 'CRM', Links: [{ id: 'Technology' }] },
            ],
        },
        {
            id: 'Sales',
            color: '#C41230',
            Links: [
                { id: 'Landing new business' },
                { id: 'Retaining customers', Links: [{ id: 'Capability' }] },
                { id: 'Identifying new sales channels' },
                { id: 'Handling pricing negotiations', Links: [{ id: 'Capability' }] },
                {
                    id: 'Building strategic partnerships and networks',
                    Links: [{ id: 'Building a team' }],
                },
                { id: 'Selling The Wheel', Links: [{ id: 'Capability' }] },
                { id: 'The Accidental Salesperson', Links: [{ id: 'Capability' }] },
                { id: 'Communication Skills', Links: [{ id: 'Capability' }] },
                { id: 'Emotional Intelligence', Links: [{ id: 'Capability' }] },
                { id: 'Responsibility', Links: [{ id: 'Management' }] },
                { id: 'Active Listening', Links: [{ id: 'Capability' }] },
                { id: 'Prospecting Call' },
                { id: 'SPIN', Links: [{ id: 'Method' }] },
                { id: 'Presentations' },
                { id: 'Overcoming Objections', Links: [{ id: 'Capability' }] },
                { id: 'Objection Handling', Links: [{ id: 'Capability' }] },
                { id: 'Asking for Commitment', Links: [{ id: 'Capability' }] },
                { id: 'Ownership', Links: [{ id: 'Management' }] },
                { id: 'Negotiating', Links: [{ id: 'Capability' }] },
                { id: 'Self-managing', Links: [{ id: 'Management' }] },
                { id: 'Time-management', Links: [{ id: 'Management' }] },
                { id: 'Rogue salespeople' },
                { id: 'Building a team' },
                { id: 'Lone wolves', Link: [{ id: 'Building a team' }] },
            ],
        },
        {
            id: 'Technology',
            color: '#C41230',
            Links: [
                { id: 'Productivity', Link: [{ id: 'Building a team' }, { id: 'Managing' }] },
                { id: 'Process automation' },
                { id: 'Innovation' },
                { id: 'Training', Link: [{ id: 'Building a team' }] },
            ],
        },
    ],
};

export default Nodes;
