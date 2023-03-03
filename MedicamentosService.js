import axios from 'axios';

const MEDICAMENTOS_API_BASE_URL = "http://localhost:8080/api/v1/medicamentos";

class MedicamentosService {

    getMedicamentos() {
        return axios.get(MEDICAMENTOS_API_BASE_URL);
    }

    createMedicamentos(medicamentos) {
        return axios.post(MEDICAMENTOS_API_BASE_URL, medicamentos);
    }

    getMedicamentosById(medicamentosId_medicamento) {
        return axios.get(MEDICAMENTOS_API_BASE_URL + '/' + medicamentosId_medicamento);
    }

    updateMedicamentos(medicamentos, medicamentosId_medicamento) {
        return axios.put(MEDICAMENTOS_API_BASE_URL + '/' + medicamentosId_medicamento, medicamentos);
    }

    deleteMedicamentos(medicamentosId_medicamento) {
        return axios.delete(MEDICAMENTOS_API_BASE_URL + '/' + medicamentosId_medicamento);
    }
}

export default new MedicamentosService()