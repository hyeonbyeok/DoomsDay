function recordFnc(){
    const doc = document.getElementById("recordInput");
    let date = doc.querySelector("div #date").value;
    let name = doc.querySelector("div #name").value;
    let gold = doc.querySelector("div #gold").value;

    return {
        recordRegex : function(){
            if(!Regex.isDateValid(date)){
                alert(new Error("날짜 데이터 오류 : 날짜데이터가 이상합니다. es)20241128"));
                return false;
            }

            if(!Regex.isValidNumber(gold)){
                alert(new Error("골드 데이터 오류 : 숫자만 입력"));
                return false;
            }
            return true;
        },
        addData : function(data){
            date = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`
            let obj = {"date": date, "name": name , "gold" : gold}
            data.push(obj)
            renderRecordTable([obj]);

            const statsData = recordToStats(data);
            renderStatsTable(statsData);
        }
    }
}