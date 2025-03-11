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
            const register = await this.serviceEntity.getByRegisteredId(Number(id));
            return res.status(200).json(register);
        } catch (error) {
            
        }
    }

    async createNew(req, res) {
        const registerData = req.body;

        try {
            const newRegister = await this.serviceEntity.createRegister(registerData);
            return res.status(200).json(newRegister);
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

    asnyc delete(req, res) {
        const { id } = req.params;

        try {
            await this.serviceEntity.deleteRegister(Number(id));
            return res.status(200).json({ message: `Item ${id} deletado.` })
        }
    }
}

module.exports = Controller;