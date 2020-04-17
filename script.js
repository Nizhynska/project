function myFirstApp (name, age) {

    alert(`Hello, my name is ${name} and this is my program`);
   
    function showSkills () {
        let skills = ["html", "css", "js"];
        for(let i = 0; i > skills.length; i++) {
           return alert("i know: " + skills[i]);
        }
    }
        function checkAge() {
            if(age == 18) {
                alert("great chences");
            } else if( age < 18) {
                alert("cool you are think about future");
            }
    }

}
myFirstApp ("ivan", 14);