import { comparePassword, hashPassword } from './encrypt.helpers';

describe('password hash and compare', () => {
  it('works', async () => {
    const raw = 'password';
    const hashed = await hashPassword(raw);
    const compareResult = await comparePassword(raw, hashed);
    expect(compareResult).toBeTruthy();
  });
});
