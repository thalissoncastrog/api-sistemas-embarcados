import device from "../model/Device.js";

class DeviceController {

    static async wind(req, res) {
        try {
            const devices = await device.find({});
            res.status(200).json(devices);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }
}

export default DeviceController;