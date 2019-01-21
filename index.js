const app = require('express')();
const cp = require('child_process')
const PORT = 8000;
// LOCATION OF GIT DIRECTORY
const gitDir = "/var/www/PUAPI"

function doGitPull(req,res,next) {
  // CREATE GIT PULL CHILD PROCESS
  const pull = cp.spawn('git',['pull'],{cwd:gitDir}) 
  // HANDLE CHILD PROCESS' OUTPUT
  pull.stdout.on('data', d => console.log(d.toString()))
  // HANDLE CHILD PROCESS' ERROR OUTPUT
  pull.stderr.on('data', e => console.error(e.toString()))
  // HANDLE CHILD PROCESS ERRORS
  pull.on('error', e=> res.sendStatus(500))
  // HANDLE PROCESS EXIT CODES. IF 0, SUCCESSFULLY CONTINUE
  pull.on('exit',code => {
    if (code == 0) next()
    else res.sendStatus(500)
  })
}

app.get('/',(req,res) => {
  res.send("<h1>Simple Node Git Pull</h1>")
})
app.get('/pull',doGitPull, (req,res) => {
  res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
