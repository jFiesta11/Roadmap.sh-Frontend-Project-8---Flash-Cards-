import Statusbar from './Statusbar'
import Card from './Card'
import Button from './Button'

import '../styles/App.css'
import React, {useState} from "react";

function App(){
  return (  
          <section>
            <StatusBar />
            <Card />
            <Button />
          </section>
          )
}

export default App;