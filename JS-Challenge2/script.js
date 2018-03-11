var yearOfBirth = [1983, 1986, 1991, 1996, 2001];
var ages = [];
var adult = [];

function printFullAge(yearOfBirth) {
    var ages = [];
    var adult = [];
    

for (var i = 0; i < yearOfBirth.length ; i++)  {
    ages[i] = 2018 - yearOfBirth[i];
        }

for (i = 0; i < ages.length ; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
        adult.push(true);
            } else {
        console.log('Person ' + (i +1) + ' is ' + ages[i] + ' years old, and is NOT an adult.');
                adult.push(false);
            }
}

return adult;

}

//var yearOfBirth = [1983, 1986, 1991, 1996, 2001];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2012, 1915, 1999]);
