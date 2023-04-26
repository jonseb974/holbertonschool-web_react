
import $ from 'jquery';

import _ from 'lodash';
// styles
import './body.css';


$('body').append(`<p>Dashboard data for the students</p>`);
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id="count"></p>`);

// lodash's debounce to the button
$('button').on('click', _.debounce(updateCounter, 500));

let count  = 0;
//  update counter
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}
