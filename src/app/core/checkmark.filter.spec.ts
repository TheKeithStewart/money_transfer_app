'use strict';

describe('checkmark', function() {

  beforeEach(angular.mock.module('app.core'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u0021');
    })
  );

});