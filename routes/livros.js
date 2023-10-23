const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    try {
        throw new Error('teste');
        res.send('Esta é a rota /livros');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
});

router.post('/', (req, res) => {
    try {
        throw new Error('testePOST')
        res.send('Você fez uma requisição do tipo POST na rota /livros');
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
});

module.exports = router;