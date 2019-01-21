const cp = require('child_process')

console.log(process.cwd())
//process.chdir('/var/www/PUAPI')
const pull = cp.spawn('git',['pull'],{cwd:'/var/www/PUAPI'})
pull.stdout.on('data', d=> {
  console.log(d.toString())
})
pull.on('close',() => console.log("DONE"))
pull.on('exit',() => console.log('Exit'))
