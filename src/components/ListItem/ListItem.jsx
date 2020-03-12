import React from "react";
import classes from './ListItem.module.css'


const ListItem = (props) =>{
    let isImportant = () =>{
        props.makeImportant(props.id);
    }
    let isDone = () =>{
        props.makeDone(props.id);
    }
    let removeBusiness = () =>{
        props.removeBusiness(props.id);
    }
    return(
        <div className={`${classes.item} ${props.isImportant ? classes.important : ' '}`}>
            <h3>{props.name}</h3>
            <p>{props.value}</p>
            <button className={classes.important} onClick={isImportant}>IMPORTANT</button>
            <button className={`${classes.done} ${props.isDone ? classes.buttonForDone : ' '}`} onClick={isDone}>DONE</button>
            <button className={`${props.isDone ? classes.buttonForRemove : classes.buttonForRemoveHide}`} onClick={removeBusiness}>REMOVE</button>
            <div className={`${props.isDone ? classes.layout : classes.layoutHide}`}>
                <h3>DONE</h3>
            </div>
        </div>
    )
}

export default ListItem;