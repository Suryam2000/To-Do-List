const express = require('express');
const router = express.Router();

router.use(express.urlencoded());

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home);
router.post('/create_list', homeController.createList);
router.all('/delete', homeController.deleteList);

module.exports = router;