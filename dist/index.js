/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
const core = require('@actions/core');
const github = require('@actions/github');
var __webpack_exports__ = {};
async function run()
{
    const obj=[
        {
          Name: 'dyte-js-sample-app',
          repo: 'https://github.com/dyte-in/javascript-sample-app',
          version: '0.21.1',
          versionSatisfied: 'false'
        }
    ]
    try
    {
    const nameToGreet=core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
    //console.log(obj[0].repo);
    }
    catch(err)
        {
            core.setFailed(error.message);
        }
}
run();
module.exports = __webpack_exports__;
/******/ })()
;