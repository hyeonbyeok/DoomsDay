let jsonData = [];

function addRecord(){
    const record = recordFnc();

    if(!record.recordRegex()){
        return;
    };

    record.addData(jsonData);

}

function onlyNumber(target) {
    let value = target.value;
    target.value = numberFormat(value, false, false, false);
}

function fileUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        alert("파일을 선택해주세요.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const fileContent = e.target.result;
        
        if (!fileContent.trim()) {
            alert("파일이 비어 있습니다.");
            return;
        }

        try {
            jsonData = JSON.parse(fileContent);
            jsonData = jsonData.sort((a, b) => new Date(a.date) - new Date(b.date));
            //tbody 초기화
            const tbody = document.getElementById('records-body');
            tbody.innerHTML = "";
            renderRecordTable(jsonData);
            
            const statsData = recordToStats(jsonData);
            renderStatsTable(statsData);

        } catch (err) {
            alert("유효한 JSON 파일이 아닙니다."); 
        }
    };
    
    reader.onerror = function() {
        alert("파일을 읽는 데 오류가 발생했습니다.");
    };

    reader.readAsText(file);
}

function download(){
    jsonData = jsonData.sort((a, b) => new Date(a.date) - new Date(b.date));
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(jsonBlob);
    link.download = "분배기록데이터.json";
    link.click();
}

function init(){

}

