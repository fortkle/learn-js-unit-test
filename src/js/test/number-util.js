import assert from 'assert';
import { addNumber } from '../number-util';

describe('addNumber', function () {
  it('足し算できる', function () {
    assert.equal(addNumber(1, 2), 3, '1 + 2 = 3')
  });
});
