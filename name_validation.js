function validName(){
    var string = prompt("Enter Name ");
    let firstName = "";
    let middleName = "";
    let lastName = "";
    let spacecount = 0;
    let dotcount = 0;
    let e = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ".") {
        dotcount += 1;
      }
      if (string[i] === " ") {
        spacecount += 1;
      }
      if (spacecount === 0) {
        firstName += string[i];
      } else
      if (spacecount === 1) {
        if (string[i] !== " ") {
          middleName += string[i];
        }
      } else 
      if (spacecount === 2) {
        if (string[i] !== " ") {
          lastName += string[i];
        }
      }
    }
    if (string[string.length - 1] === ".") {
        dotcount -= 1;
      }

    let firstNameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let a = firstNameRegex.test(firstName);
    let a1 = firstName.match(firstNameRegex);

    let middleNameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let b = middleNameRegex.test(middleName);
    let b = middleNameRegex.test(middleName);
    let b1 = middleName.match(middleNameRegex);

    let lastNameRegex = /^[A-Z][a-zA-Z]+$/g;
    let c = lastNameRegex.test(lastName);
    let c1 = lastName.match(lastNameRegex);

      if (a === true && b === true && c === true && spacecount === 2
          && (dotcount === 0 || dotcount === 2)) {
        e = true;
      } else
      if (a === true && b === true && c === true && spacecount === 2 
          && (middleName[middleName.length - 1] === ".")) {
        e = true;
      } else
      if (a === true && b === true && spacecount === 1) {
        e = true; 
      } else
      e = false;
        let fullName = firstName + " " + middleName + " " + lastName
      
        return e;
      
      }