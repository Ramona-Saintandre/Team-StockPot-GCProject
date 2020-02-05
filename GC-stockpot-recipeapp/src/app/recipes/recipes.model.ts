// This is the frame for the recipe 
// added classification so that they know if it is a crockpot, or instpot recipe 

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public classification:string;

    constructor(name:string, desc:string, imagePath:string,classification:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.classification = classification;
    }
}