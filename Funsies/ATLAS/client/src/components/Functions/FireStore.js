import { store } from '../../firebase'
import { v4 as uuidv4 } from 'uuid'

//Jobs

const jobDatabase = store.collection('Jobs')


// req. Job Title
// Company Name
// Company URL
// Qualifications (maybe tags?)
// Date Applied
// Resume Used (with customizations)
// Cover Letter
// Status: applied, follow-up, phone-interview, in-person interview, offer 

function AddJob(newJob){

    newJob._id = uuidv4()

    console.log(newJob)

    jobDatabase
    .doc(newJob._id)
    .set(newJob)
    .catch((err) => {
        console.log(err)
    })
}

export {
    AddJob
}