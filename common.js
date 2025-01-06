function renderRecordTable(data){
    // data is JsonArray 

    const tbody = document.getElementById('records-body');

    data.forEach(item => {

        let tr = document.createElement('tr');
        let tdDate = document.createElement('td');

        tdDate.textContent = item.date;
        tr.appendChild(tdDate);
        
        let tdName = document.createElement('td');
        tdName.textContent = item.name;
        tr.appendChild(tdName);
        
        let tdGold = document.createElement('td');
        tdGold.textContent = item.gold;
        tr.appendChild(tdGold);
        
        tbody.prepend(tr);
    });
}

function renderStatsTable(data){

    const tbody = document.getElementById('stats-body');
    tbody.innerHTML = "";
    data.forEach(item => {

        let tr = document.createElement('tr');
        let tdDate = document.createElement('td');

        tdDate.textContent = item.date;
        tr.appendChild(tdDate);
        
        let tdName = document.createElement('td');
        tdName.textContent = item.name;
        tr.appendChild(tdName);
        
        let tdGold = document.createElement('td');
        tdGold.textContent = item.gold;
        tr.appendChild(tdGold);
        
        tbody.prepend(tr);
    });

}

function recordToStats(data){

    let statistics = Object.values(
        data.reduce((acc, item) => {
            const key = item.name;
            const gold = Number(item.gold); // 숫자로 변환
            const date = item.date;
            if (!acc[key]) {
                // 처음 등장한 name의 경우
                acc[key] = { name: item.name, gold, date};
            } else {
                // 기존 name에 데이터를 합산
                acc[key].gold += gold;
                // 최신 날짜로 업데이트
                acc[key].date = new Date(acc[key].date) > new Date(item.date) ? acc[key].date : item.date;
            }
            return acc;
        }, {})
    );
    
    statistics = statistics.sort((a, b) => a.gold - b.gold);
    return statistics;
}