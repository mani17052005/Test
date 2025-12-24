new Chart(document.getElementById("healthChart"),{
type:"line",
data:{labels:["10:30","10:45","11:00","11:15"],
datasets:[{label:"Glucose",data:[90,88,87,89],borderColor:"#3b82f6"}]},
options:{responsive:true}
});