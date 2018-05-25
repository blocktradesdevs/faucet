const { normalizeEmail } = require('./validator');

describe('normalizeEmail', () => {
    it('should normalize emails', () => {
        const emails = {
            '555@ccc.com': '555@ccc.com',
            '555+foo@ccc.com': '555@ccc.com',
            '66.6@ccc.com': '666@ccc.com',
            '6...6......6@ccc.com': '666@ccc.com',
            '66.6+foo@ccc.com': '666@ccc.com',
        };
        Object.keys(emails).forEach(messy => {
            expect(normalizeEmail(messy)).toEqual(emails[messy]);
        });
    });
});