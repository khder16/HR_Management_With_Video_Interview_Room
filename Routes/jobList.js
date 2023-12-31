const express =require('express')
const router=express.Router()
const {AddJob,DeleteJob,GetAllJob,Search,jobByDep,UpdateJob}=require('../Controllers/JobList')
router.route('/addjob').post(AddJob)
router.route('/deletejob/:id').delete(DeleteJob)
router.route('/updatejob').patch(UpdateJob)
router.route('/search').get(Search)
router.route('/job-by-department').get(jobByDep)
router.route('/').get(GetAllJob)
module.exports=router