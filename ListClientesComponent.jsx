import React, { Component } from 'react'
import ClientesService from '../services/ClientesService'

class ListClientesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clientes: []
        }
        this.addClientes = this.addClientes.bind(this);
        this.editClientes = this.editClientes.bind(this);
        this.deleteClientes = this.deleteClientes.bind(this);
    }

    deleteClientes(id_cliente) {
        ClientesService.deleteClientes(id_cliente).then(res => {
            this.setState({ clientes: this.state.clientes.filter(clientes => clientes.id_cliente !== id_cliente) });
        });
    }
    viewClientes(id_cliente) {
        this.props.history.push(`/view-clientes/${id_cliente}`);
    }
    editClientes(id_cliente) {
        this.props.history.push(`/add-clientes/${id_cliente}`);
    }

    componentDidMount() {
        ClientesService.getClientes().then((res) => {
            this.setState({ clientes: res.data });
        });
    }

    addClientes() {
        this.props.history.push('/add-clientes/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Clientes</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addClientes}> Adicionar Cliente</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                                <th>Uf</th>
                                <th>E-mail</th>
                                <th>País</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clientes.map(
                                    clientes =>
                                        <tr key={clientes.id_cliente}>
                                            <td> {clientes.nome} </td>
                                            <td> {clientes.telefone}</td>
                                            <td> {clientes.cidadeReside}</td>
                                            <td> {clientes.ufReside} </td>
                                            <td> {clientes.email}</td>
                                            <td> {clientes.paisReside}</td>
                                            <td>
                                                <button onClick={() => this.editClientes(clientes.id_cliente)} className="btn btn-info">Alterar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteClientes(clientes.id_cliente)} className="btn btn-danger">Excluir </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewClientes(clientes.id_cliente)} className="btn btn-info">Detalhes </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListClientesComponent
