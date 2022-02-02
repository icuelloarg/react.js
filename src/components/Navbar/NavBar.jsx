
function navbar(){
    return(
        <nav class="menu mainNav flex-row" id="mainNavbar">
        <ul class="navbar flex-row">
            <li className="slideOn" id="formLi"><h4> Todo crypto </h4></li>
            <li className="slideOn active" id="expLi"><h4> Wallets</h4></li>
            <li className="slideOn" id="aboutLi"><h4>Rigs Mineros</h4> </li>
            <li className="slideOn active" id="refLi"><h4>GPU's</h4></li>
        </ul>
    </nav>
    )
}

export default navbar