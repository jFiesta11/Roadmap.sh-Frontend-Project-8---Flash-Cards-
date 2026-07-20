// data
import card from '../data/questions.json'
// components
import Button from "./Button";
import Statusbar from "./Statusbar";
import Card from "./Card";
// hook
import { useState } from 'react';

const flashcards = card.questions

function Parent(){
    const [index, setIndex] = useState(0);
    
    const [flipCard, setFlipCard] = useState(true)
    
    let currentCard = flashcards[index]
    const flip = ()=>{ 
                    setFlipCard(front => !front)
                }

    const previous = ()=>{  
                        (setFlipCard(true))
                        setIndex(i => Math.max(i - 1, 0));  
                    }
    const next = ()=>{
                        (setFlipCard(true))
                        setIndex(i => Math.min(i + 1, flashcards.length - 1));    
                    }

return (
    <>
        <Statusbar item={index+1} totalItem={flashcards.length} />
        <Card click={flip} front={currentCard.question} back={currentCard.answer} showAnswer={flipCard}/>
        <div className='btn-container'>
            <Button label={'Previous'} onClick={previous}/>
            <Button label={'Flip'} onClick={flip} />
            <Button label={'Next'} onClick={next}/>
        </div>
    </>
)
    }

export default Parent;