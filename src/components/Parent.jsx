// data
import questions from '../data/questions.json'
// components
import Button from "./Button";
import Statusbar from "./Statusbar";
import Card from "./Card";
// hook
import { useState } from 'react';

    function Parent(){

    const previous = ()=>{}
    const flip = ()=>{}
    const next = ()=>{}


return (
    <>
        <Statusbar />
        <Card />
        <div className='btn-container'>
            <Button label={'Previous'} />
            <Button label={'Flip'} />
            <Button label={'Next'} />
        </div>
    </>
)
    }

export default Parent;