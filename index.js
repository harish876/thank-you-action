const core = require('@actions/core');
const github = require('@actions/github');
const obj=[
    {
      Name: 'dyte-js-sample-app',
      repo: 'https://github.com/dyte-in/javascript-sample-app',
      version: '0.21.1',
      originalVersion:'0.23.0',
      versionSatisfied: 'false'
    }
]
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const version = obj[0].version;
  core.setOutput("version", version);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);



} catch (error) {
  core.setFailed(error.message);
}