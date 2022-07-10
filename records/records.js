const records = JSON.parse(localStorage.getItem("Record"))

if(records){
    records.forEach(record => {
        const table = document.getElementById('records-table')
    
        const row = document.createElement('tr')
    
        row.innerHTML = `
            <td>${record.names}</td>
            <td>${record.service}</td>
            <td>${record.amount}</td>
            <td>${record.paid}</td>
            <td>${record.due}</td>
            <td>${record.stats}</td>
        `
        table.append(row)
    });
}

else{
    document.getElementById('table').style.display = 'none'

    document.getElementById('delete').style.display = 'none'
    const message = document.getElementById('message')
    const para = document.createElement("p")

    const messageText = document.getElementById('message')
    messageText.innerHTML = `
    <p href="#">Sorry There is no Records to Display </p>
    <a href="../index.html" id="link">Go To Home</a>
    `

    message.append(para)
}

document.getElementById('delete').addEventListener('click', () => {
    localStorage.clear()
    document.getElementById('table').style.display = 'none'

    document.getElementById('delete').style.display = 'none'

    const message = document.getElementById('message')
    message.innerHTML = `
    <p href="#">Sorry There is no Records to Display </p>
    <a href="../index.html" id="link">Go To Home</a>
    `
    
})