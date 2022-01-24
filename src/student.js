class Student {

  constructor(name, skillLevel){

      this.name = name;
      this.skillLevel = skillLevel;

      this.assignments = [];
  }

  study(){

    if(this.skillLevel === 100){
        return this;
    }
    this.skillLevel +=1;
    return this;

  }

  doHomework(assignment){



    if(assignment === undefined){
      console.log("does this trigger?")
      for(let i = 0; i < this.assignments.length; ++i){
        if(this.skillLevel >= this.assignments[i].skillLevel){
          console.log("Set " +this.assignments[i]+ "to true")
          this.assignments[i].completed = true;
        }
      }
    }else if((assignment.skillLevel > 0) && (assignment.skillLevel <= 100)){

       if(this.skillLevel >= assignment.skillLevel){
                  assignment.completed = true;

       }else{
         assignment.completed = false;//false if not
       }
       this.assignments.push(assignment);//put in array either way

      }else {
       console.log("does this else do anything");
     }



   }
}

module.exports = Student