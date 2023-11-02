import device from "../model/Device.js";

class DeviceController {

    static async listDevices(req, res) {
        try {
            const devices = await device.find({});
            res.status(200).json(devices);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }

    static async updateDevices(req, res) {
        try {
            const { id } = req.params;
            await device.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Dispositivo atualizado!" });

        } catch (erro) {
            res.status(500).json({ message: `${erro} - falha na atualização` });
        }
    }
}

export default DeviceController;