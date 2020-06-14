const router = require('express').Router();
const Student = require('../models/studentSchema');

router.route('/').get((req, res) =>{
    Student.find().then(students => res.json(students)).catch(err => res.status(400).json(`err: ${err}`));
});

router.route('/init').post((req, res) => {
    //const {firstName, lastName, age, nationality} = req.body;

    const student = new Student(req.body);

    student.save().then(() => res.json('Student added')).catch(err => res.status(400).json(`err: ${err}`));
});

router.route('/all').post((req, res) => {
    Student.find({ "nationality": req.body.nationality }).sort({ firstName: req.body.sort }).then( students => res.json(students) ).catch(err => res.status(400).json(`err: ${err}`));
});


router.route('/nationality/').get((req, res) => {
    Student.aggregate([
        { $group : { _id : "$nationality" } }]).sort({ _id: 1 }).then( students => res.json(students) ).catch(err => res.status(400).json(`err: ${err}`));
});

router.route('/delete/all').get((req, res) =>{
    Student.find().then(students => res.json(students)).catch(err => res.status(400).json(`err: ${err}`));
});

module.exports = router;