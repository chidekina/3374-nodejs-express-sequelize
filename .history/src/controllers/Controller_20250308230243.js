class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const registerList = await db.Person.findAll();
            return res.status(200).json(registerList);
        } catch (error) {

        }
    }
}

module.exports = Controller;