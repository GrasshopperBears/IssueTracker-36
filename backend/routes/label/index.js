const { Router } = require('express');

const router = Router();
const service = require('../../services').label;

// get
router.get('/labels', service.getLabels);
// post
router.post('/label', service.addLabel);
// put
router.put('/label/:id', service.updateLabel);
// delete
router.delete('/label/:id', service.deleteLabel);

module.exports = router;
