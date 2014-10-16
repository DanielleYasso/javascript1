var cat = {
        tiredness: 20,
        hunger: 20,
        lonliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(){
            console.log("Om nom nom");
            this.hunger -= 5;
            this.happiness += 5;
        },
        sleep: function(){
            console.log("zzzzzzzz");
            this.tiredness -= 10;
            this.happiness += 5;
        },
        pet: function(){
            console.log("Prrrrrrr");
            this.happiness +=5;
            this.tiredness += 5;
            this.lonliness -= 1;
        },
        status: function(){
            console.log("Tiredness: ", this.tiredness);
            console.log("Hunger: ", this.happiness);
            console.log("Lonliness: ", this.lonliness);
            console.log("Happiness: ", this.happiness);
            console.log("Obedientness ", this.obedientness);
        }
};

cat.status();
cat.feed();
cat.sleep();
cat.pet();
cat.status();
