import React, { Component } from 'react'
import ClientesService from '../services/ClientesService';

class UpdateClientesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_cliente: this.props.match.params.id_cliente,
            nome: '',
            telefone: '',
            cidadeReside: '',
            ufReside: '',
            email: '',
            paisReside: ''
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.changeCidadeResideHandler = this.changeCidadeResideHandler.bind(this);
        this.changeUfResideHandler = this.changeUfResideHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePaisResideHandler = this.changePaisResideHandler.bind(this);
        this.updateClientes = this.updateClientes.bind(this);
    }

    componentDidMount() {
        ClientesService.getClientesById(this.state.id_cliente).then((res) => {
            let clientes = res.data;
            this.setState({
                nome: clientes.nome,
                telefone: clientes.telefone,
                cidadeReside: clientes.cidadeReside,
                ufReside: clientes.ufReside,
                email: clientes.email,
                paisReside: clientes.paisReside
            });
        });
    }

    updateClientes = (e) => {
        e.preventDefault();
        let clientes = { nome: this.state.nome, telefone: this.state.telefone, cidadeReside: this.state.cidadeReside, ufReside: this.state.ufReside, email: this.state.email, paisReside: this.state.paisReside };
        console.log('clientes => ' + JSON.stringify(clientes));
        console.log('id_cliente => ' + JSON.stringify(this.state.id_cliente));
        ClientesService.updateClientes(clientes, this.state.id_cliente).then(res => {
            this.props.history.push('/clientes');
        });
    }

    changeNomeHandler = (event) => {
        this.setState({ nome: event.target.value });
    }

    changeTelefoneHandler = (event) => {
        this.setState({ telefone: event.target.value });
    }

    changeCidadeResideHandler = (event) => {
        this.setState({ cidadeReside: event.target.value });
    }

    changeUfResideHandler = (event) => {
        this.setState({ ufReside: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePaisResideHandler = (event) => {
        this.setState({ paisReside: event.target.value });
    }

    cancel() {
        this.props.history.push('/clientes');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Alterar Cliente</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nome: </label>
                                        <input placeholder="Nome" name="nome" className="form-control"
                                            value={this.state.nome} onChange={this.changeNomeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Telefone: </label>
                                        <input placeholder="Telefone" name="telefone" className="form-control"
                                            value={this.state.telefone} onChange={this.changeTelefoneHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Cidade: </label>
                                        <input placeholder="Cidade" name="cidadeReside" className="form-control"
                                            value={this.state.cidadeReside} onChange={this.changeCidadeResideHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Uf: </label>
                                        <input placeholder="Uf" name="ufReside" className="form-control"
                                            value={this.state.ufReside} onChange={this.changeUfResideHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> E-mail: </label>
                                        <input placeholder="E-mail" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> País: </label>
                                        <input placeholder="País" name="paisReside" className="form-control"
                                            value={this.state.paisReside} onChange={this.changePaisResideHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateClientes}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateClientesComponent
