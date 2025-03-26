function printFibonacci() {
    const n = parseInt(document.getElementById('jumlah').value);
    if (n < 1) {
        document.getElementById('hasil').innerText = "Masukkan angka lebih besar dari 0!";
        return;
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    document.getElementById('hasil').innerText = fib.slice(0, n).join(', ');
}
