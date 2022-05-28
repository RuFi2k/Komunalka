import { formatDate } from "constants/masks";

it('should format date correctly', () => {
    expect(formatDate(new Date(2022, 0, 28))).toEqual('01/28/22');
});