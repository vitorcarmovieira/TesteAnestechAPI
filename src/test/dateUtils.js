'use strict';

var assert = require('assert');
var dateUtils = require('../utils/dateUtils');

describe('DateUtilsTest', function() {
	it('Formatar duração no formato 23h59m59s', function(done) {

    const expected = "23h59m59s";

		const date1 = "2018-09-19T00:00:00.000Z";
    const date2 = "2018-09-19T23:59:59.000Z";

    const diff = dateUtils.durationTime(date1, date2);

    assert(diff == expected);
    done();

	});
});
