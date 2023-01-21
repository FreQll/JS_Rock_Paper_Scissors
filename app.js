const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = ()=> {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const score = document.querySelector('.score');

        pScore = 0;
        cScore = 0;

        playButton.addEventListener('click', ()=> {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            score.classList.add('fadeIn');
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        const restart = document.querySelector('.restart');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        restart.addEventListener('click', () => {
            startGame();
            updateScore();
            restart.classList.remove('fadeIn');
        });

        options.forEach(option =>{
            option.addEventListener("click", function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3); 
                const computerChoice = computerOptions[computerNumber];
                const restart = document.querySelector('.restart');

                //animation
                playerHand.src = 'images/rock.png';
                computerHand.src = 'images/rock.png';
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                setTimeout(()=> {
                    compareHands(this.textContent, computerChoice);

                    updateScore();

                    console.log(pScore, cScore);
                    if (pScore >= 10 || cScore >= 10) {
                        console.log(pScore, cScore);
                        restart.classList.add('fadeIn');
                    }
    
                    playerHand.src = `/images/${this.textContent}.png`;
                    computerHand.src = `/images/${computerChoice}.png`;
                }, 2000);
            });
        });

        const updateScore = () => {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }

        const compareHands = (playerChoice, computerChoice) => {
            const winner = document.querySelector('.winner');
            //Tie check
            console.log(playerChoice, computerChoice);
            if (playerChoice === computerChoice) {
                winner.textContent = 'It is a tie';
                return;
            }
            //Rock check
            if (playerChoice === 'rock') {
                if (computerChoice === 'paper') {
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    return;
                }
                else {
                    winner.textContent = 'Player wins!';
                    pScore++;
                    return;
                }
            }
            //Paper check
            if (playerChoice === 'paper') {
                if (computerChoice === 'scissors') {
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    return;
                }
                else {
                    winner.textContent = 'Player wins!';
                    pScore++;
                    return;
                }
            }
            //Scissors check
            if (playerChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    return;
                }
                else {
                    winner.textContent = 'Player wins!';
                    pScore++;
                    return;
                }
            }
        }
    }
    //Inner functions
    startGame();
    playMatch();
};

game();
