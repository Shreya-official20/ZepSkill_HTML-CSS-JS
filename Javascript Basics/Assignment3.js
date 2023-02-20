let subjects = [['physics', 80], ['chemistry', 75], ['biology', 65], ['english', 55], ['computer', 90]];

let per =
    ((subjects.physics + subjects.chemistry + subjects.biology + subjects.english + subjects.computer)/500)*100;
// document.write("Percentage:" +per);


        if (per < 60){
          console.log("Grade : F");      
          } 
        else if (per < 70) {
            console.log("Grade : D"); 
            } 
        else if (per < 80) 
        {
            console.log("Grade : C"); 
        } else if (per < 90) {
            console.log("Grade : B"); 
        } else if (per < 100) {
            console.log("Grade : A");
        }


