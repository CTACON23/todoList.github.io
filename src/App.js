import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AddItem  from './components/AddItem/AddItem';

const App =(props)=>{
  return (
    <div className={props.state.addButton? "grey App" : "notgrey"+" App"}>
      <Header state={props.state} changeFilter={props.changeFilter}/>
      <Main state={props.state} makeImportant={props.makeImportant} makeDone={props.makeDone} removeBusiness={props.removeBusiness}/>

      <AddItem state={props.state} showModule={props.showModule} addBusiness={props.addBusiness}/>
    </div>
  );
}

export default App;
