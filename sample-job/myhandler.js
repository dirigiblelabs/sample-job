var scheduler = require("job/v4/scheduler");

let job = scheduler.getJob("/sample-job/myjob.job");

let stringParam = job.getParameter("stringParam");
let numberParam = job.getParameter("numberParam");
let boolParam = job.getParameter("boolParam");
let choiceParam = job.getParameter("choiceParam");
let notExisting = job.getParameter("notExisting");

console.log('echo stringParam: ' + stringParam);
console.log('echo numberParam: ' + numberParam);
console.log('echo boolParam: ' + boolParam);
console.log('echo choiceParam: ' + choiceParam);
console.log('echo notExisting: ' + notExisting);

job.log("my message");
job.error("my error");
job.warn("my warning");
job.info("my info");

// enable Job
//job.enable();

// disable Job
//job.disable();

//job.trigger({ "stringParam": "programmatic value" });