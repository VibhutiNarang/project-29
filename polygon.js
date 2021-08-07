class Polygon{
    constructor(x,y){

        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

        
        this.body = Bodies.circle(x,y,20,options)
        this.image = loadImage("sprites/Polygon.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,40,40);
    }

}