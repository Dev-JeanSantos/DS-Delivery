function StepsHeader() {
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS
                </h1>
                <ul className="step-items">
                    <li className="step-li">
                        <span className="steps-number">1º -</span>
                        Selecione os produtos e localização
                    </li>
                    <li  className="step-li">
                        <span className="steps-number">2º -</span>
                        Depois clique em <strong>"ENVIAR PEDIDO"</strong> 
                    </li>
                </ul>
            </div>

        </header>
    )
    
}

export default StepsHeader;