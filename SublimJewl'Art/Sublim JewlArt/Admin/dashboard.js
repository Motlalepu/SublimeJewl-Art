//sidebar toggel
  
var sideBarOpen = false; //default
var sideBar = document.getElementById("sideBar"); //html element

function openSideBar() { //manipulating the default
  if(!sideBarOpen) { //this is the check if the default is active if not,the following happens "sideBar-responsive"
    sideBar.classList.add("sideBar-responsive"); //get to know later what this tag means
    sideBarOpen = true;
  }
}
function closeSideBar() { 
  if(sideBarOpen) { //ifsideBarOpen is true
      sideBar.classList.remove("sideBar-responsive"); //once class is removed
      sideBarOpen = false;
  } 
}

//Charts
//barChart
 
const xValues = ["Pink Necklace", "Black Necklace", "Yellow Necklace", "Off-White Necklace", "Peach Necklace"];
const yValues = [10, 8, 6, 4, 2, 0]; //want it to begin at 0 just add 0 to the list
const barColors = ["red", "green","blue","orange","violet"];
const barChart= document.getElementById('barChart').getContext('2d'); 
 
new Chart("barChart", {
  type: "bar",
  height:350,
  toolbar: {
    show:false
  },
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
       
          
    }]
  },
  barChartOptions: {
    legend: {display: false},
    title: {
      display: true,
      text: "Top 5 Prodcucts"
    }
  }
});

//how to define the undifined!!
//AREA CHART
const xValuesArea = [11,200,300,400,500,600,700,800,900,1000];

new Chart("areaChart", {
  type: "line",
  
  data: {
    labels: xValuesArea,
    name: 'Purchase Orders',
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      name:'Sale Orders',
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  areaChartOptions: {
    legend: {display: false}
  }
});
 
  