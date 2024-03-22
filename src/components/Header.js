function Header(props){
    return (
        <header className="p-40 d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/imgs/logo.png" />
          <div>
            <h3 className="text-uppercase">Woose shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li onClick = {props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/imgs/card.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/imgs/user.svg" />
          </li>
        </ul>
      </header>
    )
}

export default Header;