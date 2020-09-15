class instrument{
    constructor (loudness, family, play){
        this.loudness = loudness;
        this.family = family;
        this.play = play;
    }
}

class woodwind extends instrument {
    constructor(loudness, family, play){
        super(loudness, family, play)
        this.kind = "woodwind";

    }
    blow(){
        console.log("You are playing a " + this.family + " instrument and " + this.play + " " + this.loudness + "tly loud")
    }

}

class percussion extends instrument {
    constructor(loudness, family, play){
        super(loudness, family, play)
        this.kind = "percussion"
    }
    drum(){
        console.log("You are playing a " + this.family + " and are " + this.play + "ing " + this.loudness + "ly loud")
    }
}

class stringed extends instrument {
    constructor(loudness, family, play){
        super(loudness, family, play)
        this.kind = "stringed"
    }
    strum(){
        console.log( "You are playing a " + this.family + " instrument and " + this.play + " " +this.loudness + "tly loud")
    }
}

var tuba = new woodwind("Moderate", "woodwind", "blow");
var bongo = new percussion("Slight", "percussion", "bang");
var guitar = new stringed("Moderate", "stringed", "strum");

tuba.blow();
bongo.drum();
guitar.strum();