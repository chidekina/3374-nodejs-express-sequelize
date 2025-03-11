class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const registerList = await this.serviceEntity.getAllRegisters();
            return res.status(200).json(registerList);
        } catch (error) {

        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const register = await this.serviceEntity
        } catch (error) {
            
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;

        try {
            const isUpdated = await this.serviceEntity.updateRegister
            (updatedData, Number(id));
            if (!isUpdated) {
                return res(400).json({ message: `O item ${id} não foi atualizado.`});
            }
            return res(200).json({ message: `Item ${id} atualizado com sucesso.` });
        } catch (error) {

        }
    }
}

module.exports = Controller;