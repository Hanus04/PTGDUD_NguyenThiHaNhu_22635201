import {useEffect, useState} from "react";
import "./Menu.css";

function Menu(){
    const [menu, setMenu]  = useState([]);

    useEffect(()=>{
        fetch("https://67c822500acf98d070850b7d.mockapi.io/food")
        .then((response) => response.json())
        .then((menu)=> setMenu(menu))
    },[])

    return(
        <>
            <h1>MENU MÓN ĂN TỪ FETCH API </h1>
            <ul>
                {menu.map((item, index)=>{
                    return (
                        <>
                            <div className="menu-item">
                                <img src= {item.image} alt="" />
                                <h2>{item.title}</h2>
                                <h3>{item.price}</h3>
                            </div>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Menu;