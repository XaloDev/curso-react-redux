import React from 'react'
import Card from "./Card";
import { connect } from 'react-redux'

function Sorteio(props){

    const { min, max } = props

    return(
        <Card title={'Sorteio de um número'} purple>
            <div>
            <span>
                <span>Resultado: </span>
                <strong>{Math.floor(Math.random() * (max - min) + min + 0.5)}</strong>
            </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)