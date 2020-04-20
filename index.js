
// import faker and fs
const faker = require('faker');
const fs = require('fs');

// add 10 random names to a file
function fakeNames() {

    for (let i = 0; i < 10; i++) {
        let currentName = faker.fake("{{name.lastName}}, {{name.firstName}}");

        fs.appendFile('./names.txt', `${currentName} \n`, err => {
            if (err) {
                console.error(err);
            }
        });
    }

}

fakeNames();
