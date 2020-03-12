import React from "react";
import classes from "./Header.module.css"

const Header = (props) =>{
    let allBusiness = () =>{
        props.changeFilter('all')
    }
    let activeBusiness = () =>{
        props.changeFilter('active')
    }
    let doneBusiness = () =>{
        props.changeFilter('done')
    }
    return(
        <div className={classes.header}>
            <h1>TODO List</h1>
            <div>
                <span>Осталось выполнить: <b>{props.state.todoList.item.length}</b></span>
                <div className={classes.buttons}>
                    <button onClick={allBusiness} className={props.state.filter === 'all' ? classes.activeFilter : ''}>Все</button>
                    <button onClick={activeBusiness} className={props.state.filter === 'active' ? classes.activeFilter : ''}>Активные</button>
                    <button onClick={doneBusiness} className={props.state.filter === 'done' ? classes.activeFilter : ''}>Выполненые</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
