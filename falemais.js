function Simular(){
    const dddOrigem = document.getElementById('dddOrigem').value;
    const dddDestino = document.getElementById('dddDestino').value;
    const tempo = document.getElementById("tempo").value;
    const resultado = document.getElementById("resultado");

    let result = dddOrigem * dddDestino * tempo;
    document.getElementById('resultado').textContent = result;
}
