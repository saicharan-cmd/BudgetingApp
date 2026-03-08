import { calculateSpentByBudget, formatCurrency } from './helpers';

describe('formatCurrency', () => {
  it('formats numbers in INR currency format', () => {
    const value = formatCurrency(350);
    expect(value).toContain('₹');
  });
});

describe('calculateSpentByBudget', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns sum of expenses for matching budget id only', () => {
    localStorage.setItem(
      'expenses',
      JSON.stringify([
        { id: '1', budgetId: 'a', amount: 100 },
        { id: '2', budgetId: 'a', amount: 250 },
        { id: '3', budgetId: 'b', amount: 300 },
      ])
    );

    expect(calculateSpentByBudget('a')).toBe(350);
    expect(calculateSpentByBudget('b')).toBe(300);
  });
});
