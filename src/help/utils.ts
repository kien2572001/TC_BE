import * as bcrypt from 'bcrypt';

export async function handleBCRYPTHash(text: string, salt: string) {
  return await bcrypt.hash(text, salt);
}

export async function handleBCRYPTCompare(text: string, hash: string) {
  return await bcrypt.compare(text, hash);
}

/**
 *
 * @param data
 * @param expiresIn by hour, exp: "1h"
 * @returns
 */
