import axios from 'axios';

const CLIENTES_API_BASE_URL = "http://localhost:8080/api/v1/clientes";

class ClientesService {

    getClientes() {
        return axios.get(CLIENTES_API_BASE_URL);
    }

    createClientes(clientes) {
        return axios.post(CLIENTES_API_BASE_URL, clientes);
    }

    getClientesById(clientesId_cliente) {
        return axios.get(CLIENTES_API_BASE_URL + '/' + clientesId_cliente);
    }

    updateClientes(clientes, clientesId_cliente) {
        return axios.put(CLIENTES_API_BASE_URL + '/' + clientesId_cliente, clientes);
    }

    deleteClientes(clientesId_cliente) {
        return axios.delete(CLIENTES_API_BASE_URL + '/' + clientesId_cliente);
    }
}

export default new ClientesService()