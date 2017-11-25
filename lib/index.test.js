import tap from 'tap';
import awesomeness from './';

// Always call as (found, wanted) by convention
tap.equal(awesomeness(1), 'odd');
tap.equal(awesomeness(2), 'even');
tap.equal(awesomeness(200), 'big');
tap.equal(awesomeness(-10), 'negative');
