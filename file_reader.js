const fs = require("fs").promises;
// THEN-CATCH SOLUTION BELOW THIS LINE
let data1, data2, data3, data4, arrayHobbies;
fs.readFile("./firstname.txt", "utf-8")
  .then(res1 => {
    data1 = res1;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then(res2 => {
    data2 = res2;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then(res3 => {
    data3 = res3;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then(res4 => {
        data4 = res4;
        arrayHobbies = data4.split(",");
  })
  .catch(err => console.error(err))
  .finally(() => {
        console.log(`${data1} ${data2} is ${data3} years old and his hoobies are ${arrayHobbies[0].replace("[","")} and ${arrayHobbies[1].replace("]","")}`)
  })





// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readAll() {
        try {
                const data1 = await fs.readFile("./firstname.txt", "utf-8")
                const data2 = await fs.readFile("./lastname.txt", "utf-8")
                const data3 = await fs.readFile("./age.txt", "utf-8")
                const data4 = await fs.readFile("./hobbies.txt", "utf-8")
                const arrayHobbies = data4.split(",")
                console.log(`${data1} ${data2} is ${data3} years old and his hoobies are ${arrayHobbies[0].replace("[","")} and ${arrayHobbies[1].replace("]","")}`)
        } catch (err) {
                console.error(err);
        }       
}
readAll()