import { runCode } from './exercise';

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7, 8];
const rta = runCode(arrayA, arrayB);

document.getElementById("app").innerHTML = `
<p>Array A: ${arrayA}</p>
<p>Array B: ${arrayB}</p>
<p>Rta: ${rta}</p>`;
