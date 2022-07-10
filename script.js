let todayRecords = []

let savedRecords = JSON.parse(localStorage.getItem('Record'))

class Record {
    constructor(names, service, amount, paid, due, stats){
        this.names = names
        this.service = service
        this.amount = amount
        this.paid = paid
        this.due = due
        this.stats = stats
    }
}

if(savedRecords){
    todayRecords = savedRecords
}

document.getElementById('day-book-form').addEventListener('submit', (e)=>{
    e.preventDefault()

    const names = document.getElementById('name').value
    const service = document.getElementById('service').value
    const amount = document.getElementById('amount').value
    const paid = document.getElementById('paid').value
    const due = document.getElementById('due').value
    const stats = document.getElementById('status').value

    const records = new Record(names, service, amount, paid, due, stats)

    clearfields()

    todayRecords.push(records)

    localStorage.setItem('Record', JSON.stringify(todayRecords))
    
})

function clearfields(){
    document.getElementById('name').value = ''
    document.getElementById('service').value = ''
    document.getElementById('amount').value = ''
    document.getElementById('paid').value = ''
    document.getElementById('due').value = ''
    document.getElementById('status').value = ''
}

let today = new Date()

let dd = String(today.getDate()).padStart(2,'0')
let mm = String(today.getMonth() + 1).padStart(2,'0')
let yyyy = today.getFullYear()

document.getElementById('date').textContent = dd + '/' + mm + '/' + yyyy


document.getElementById('view-btn').addEventListener('click',() => {
    location.href = '../records/records.html'
})