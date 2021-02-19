class Food{
    constructor(){
        var foodStock

        if(mousePressed("Feed the dog")){
          this.image = addImage(happyDog)
        }
        else{
          this.image = addImage(sadDog)
        }
    }

    display(){
        var x=80,y=100

        imageMode(CENTER)
        image(this.image,720,220,70,70)

        if(this.foodStock!=0){
           for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                 x=80
                 y+=50
                }
                this.image(this.image,x,y,50,50)
                x+=30
            }

        }
    }
}