import React from "react";
import classes from './AddItem.module.css'

const AddItem = (props) =>{
    let showModule = () =>{
        props.showModule();
    }
    let addBusiness = () => {
        props.addBusiness(name.current.value,desc.current.value,show());
        showModule();
    }
    let show = () =>{
        isImportant.current.value = isImportant.current.value === 'on' ? 'off':'on';
        return isImportant.current.value === 'on' ? true : false
    }
    let desc =React.createRef();
    let name = React.createRef();
    let isImportant = React.createRef();
    return(
        <div className={classes.content}>
            <button onClick={showModule}>Add the business</button>
            <div className={props.state.addButton? classes.show : classes.hide}>
                <ul>
                    <li><span>Name:</span><textarea ref={name} rows='1'></textarea></li>
                    <li><span className={classes.desc}>Description:</span><textarea rows='5' ref={desc}></textarea></li>
                    <li><span>Important: </span> <input type="checkbox"  ref={isImportant} onClick={show} /></li>
                    <li><button onClick={addBusiness}>Add</button></li>
                </ul>
            </div>
        </div>
    )
}

export  default AddItem;