import React, { Component } from 'react'
import ClientesService from '../services/ClientesService'

class ViewClientesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_cliente: this.props.match.params.id_cliente,
            clientes: {}
        }
    }

    componentDidMount() {
        ClientesService.getClientesById(this.state.id_cliente).then(res => {
            this.setState({ clientes: res.data });
        })
    }

    voltar() {
        this.props.history.push('/clientes');
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Detalhes do Cliente</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Nome :  </label>
                            <div> {this.state.clientes.nome}</div>
                        </div>
                        <div className="row">
                            <label> Telefone :  </label>
                            <div> {this.state.clientes.telefone}</div>
                        </div>
                        <div className="row">
                            <label> Cidade :  </label>
                            <div> {this.state.clientes.cidadeReside}</div>
                        </div>
                        <div className="row">
                            <label> Uf :  </label>
                            <div> {this.state.clientes.ufReside}</div>
                        </div>
                        <div className="row">
                            <label> E-mail :  </label>
                            <div> {this.state.clientes.email}</div>
                        </div>
                        <div className="row">
                            <label> País :  </label>
                            <div> {this.state.clientes.paisReside}</div>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={this.voltar.bind(this)} style={{ margin: "30px" }}>Voltar</button>

                </div>
            </div>
        )
    }
}

export default ViewClientesComponent
