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

    async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;

        try {
            const isUpdated = await this.serviceEntity.updateRegister
            (updatedData, Number(id));
            if (!isUpdated) {
                return res(400).json({ message: `O item ${id} não foi atualizado.`})
            }
            return res
        } catch (error) {

        }
    }
}

module.exports = Controller;