// https://leetcode.com/problems/reverse-bits/
function reverseBits(n) {
  return parseInt(
    ('0'.repeat(32 - n.toString(2).length) + n.toString(2))
      .split('')
      .reverse()
      .join(''),
    2,
  );
}
