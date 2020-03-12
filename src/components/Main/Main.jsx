import React from "react";
import classes from './Main.module.css'
import ListItem from "../ListItem/ListItem";

const Main = (props) =>{
    let postElement;
    if(props.state.filter === 'done'){
        postElement = props.state.todoList.item.map(p => p.isDone === true ? <ListItem key={p.id} value={p.description} name={p.name} isImportant={p.isImportant} isDone={p.isDone} id={p.id} makeImportant={props.makeImportant} makeDone={props.makeDone} removeBusiness={props.removeBusiness}/> : false);
    }else if(props.state.filter ==='all'){
        postElement = props.state.todoList.item.map(p => <ListItem key={p.id} value={p.description} name={p.name} isImportant={p.isImportant} id={p.id} isDone={p.isDone} makeImportant={props.makeImportant} makeDone={props.makeDone} removeBusiness={props.removeBusiness}/>);
    }else{
        postElement = props.state.todoList.item.map(p => p.isDone === false ? <ListItem key={p.id} value={p.description} name={p.name} isImportant={p.isImportant} isDone={p.isDone} id={p.id} makeImportant={props.makeImportant} makeDone={props.makeDone} removeBusiness={props.removeBusiness}/> : false);
    }
    return(
        <div className={classes.main}>
            {postElement}
        </div>
    )
}

export default Main;