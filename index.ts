const { spawn } = require("child_process");
const ls = spawn("ls", ["-l"]); // Ejemplo de ejecución del comando 'ls -l'

ls.stdout.on("data", (data) => {
  console.log(`Salida estándar: ${data}`);
});

ls.on("close", (code) => {
  console.log(`Proceso secundario finalizado con código de salida ${code}`);
});

const { exec } = require("child_process");
exec("ls -l", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`Salida estándar: ${stdout}`);
});

process.stdin.on("data", (data) => {
  console.log(`Datos recibidos del proceso secundario: ${data}`);
});

process.on("exit", (code) => {
  console.log(
    `El proceso principal está cerrando con código de salida ${code}`
  );
});

if (process.killed) {
  console.log('El proceso principal ha sido terminado.');
}