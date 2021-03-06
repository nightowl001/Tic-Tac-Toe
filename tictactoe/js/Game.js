class Game{
    constructor(){
        this.inProgress=true;
        this.winner=null;
        this.currentTurn=Game.O;
        this.movesMade=0;
        //fill each element with a Squares object
        this.squares=new Array(9).fill().map(s=>new Squares());
    }

    makeMove(i){
        if(this.inProgress && !this.squares[i].value){
            this.squares[i].value=this.currentTurn;
            this.movesMade++;
            this.checkForWinner();
            this.currentTurn=(this.currentTurn===Game.O)?Game.X:Game.O;
        }
    }

    checkForWinner(){
        //an array of arrays, basically a multi d array
        const winningCombinations=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        winningCombinations.forEach((wc)=>{
            const [a,b,c]=wc;
            const sqA=this.squares[a];
            const sqB=this.squares[b];
            const sqC=this.squares[c];
            if(sqA.value && sqA.value===sqB.value && sqA.value===sqC.value){
                this.inProgress=false;
                this.winner=sqA.value;
                sqA.isHighlighted=sqB.isHighlighted=sqC.isHighlighted=true;
            }
        });

       
        if(this.movesMade===this.squares.length){
            this.inProgress=false;
        }
        

    }
}
//declaring global variables
Game.O='O';
Game.X='X';