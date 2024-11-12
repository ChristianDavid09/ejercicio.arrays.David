
const frecuencias = new Array(10).fill(0);  
for (let i = 0; i < 10000; i++) { 
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1; 
    frecuencias[numeroAleatorio - 1]++; 
} 
for (let i = 0; i < frecuencias.length; i++) { 
    console.log(`Número ${i + 1}: ${frecuencias[i]}`);
}