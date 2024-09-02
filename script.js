function generateGombalan() {
    const gombalanList = [
        "Kalau cinta kita adalah kode, kamu pasti jadi 'main function'-ku.",
        "Kamu seperti CSS, melengkapi tampilan hidupku.",
        "Kita ini kayak HTML dan CSS, beda file tapi satu tujuan.",
        "Tanpa kamu, hidupku cuma 404: Not Found.",
        "Cintaku ke kamu seperti loop yang tak berujung."
    ];

    const randomIndex = Math.floor(Math.random() * gombalanList.length);
    document.getElementById("gombalan").innerText = gombalanList[randomIndex];
}
