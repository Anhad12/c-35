class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h1')
      this.greeting = createElement('h3');
    }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
   // this.title.hide();
  }
    display(){
     
      this.title.html("Car Racing Game");
      this.title.position(520, 0);
      
     
      
      this.input.position(530, 260);
      this.button.position(550, 300);
  
      this.button.mousePressed(
        ()=>{
            this.input.hide();
            this.button.hide();
      
            player.name = this.input.value();
            
            playerCount= playerCount + 1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name )
            this.greeting.position(530, 160)
          }
      );
  
    }
  }