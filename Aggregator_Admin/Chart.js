
// ------Dashboard Charts----------//
var ctx = document.getElementById('dashboard1Chart')
// ctx.height = 150,
// ctx.width = 100
var data = {
	labels: [ 'In Queue', 'Shipped', 'Packed'],
	datasets: [{
		fill: false,
		label: 'Completed',
		// borderColor: 'green',
		data: [20, 30, 40],
		borderWidth: 0,
        
        // hoverBackgroundColor:
            // 'rgb(255, 136, 0)'
            // 'rgb(0,58,186)',
            // 'rgb(62,199,47)'
		backgroundColor:[
                'rgb(255, 136, 0)',
                'rgb(62,199,47)',
                'rgb(0,58,186)',
		],
		lineTension: 0,
	}
	]
}
var options={
	responsive:true,
	legend:{
		display:true,
		position:"left",
		lebels:{
			fontColor:"#000",
			fontSize:16,
			lineHeight:1.8
		}
	}
}

var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: data,
	options:
		// maintainAspectRatio: false,
		// bezierCurve: false,
		options
	
	
})

// --------------Restaurent Charts ----------//

var ctx = document.getElementById('restaurentChart')
ctx.height = 250,
ctx.width = 100
var data = {
	labels: [ 'In Queue', 'Shipped', 'Packed'],
	datasets: [{
		fill: false,
		label: 'Completed',
		// borderColor: 'green',
		data: [20, 30, 40],
		borderWidth: 0,
        
        // hoverBackgroundColor:
            // 'rgb(255, 136, 0)'
            // 'rgb(0,58,186)',
            // 'rgb(62,199,47)'
		backgroundColor:[
                'rgb(255, 136, 0)',
                'rgb(62,199,47)',
                'rgb(0,58,186)',
		],
		lineTension: 0,
	}
	]
}

var myChart1 = new Chart(ctx, {
	type: 'doughnut',
	data: data,
	options: {
		maintainAspectRatio: false,
		bezierCurve: false,
		
	}
})

// ---------------Gorcery or Stores Chart--------------//
var ctx = document.getElementById('groceryChart')
ctx.height = 250,
ctx.width = 100
var data = {
	labels: [ 'In Queue', 'Shipped', 'Packed'],
	datasets: [{
		fill: false,
		label: 'Completed',
		// borderColor: 'green',
		data: [20, 30, 40],
		borderWidth: 0,
        
        // hoverBackgroundColor:
            // 'rgb(255, 136, 0)'
            // 'rgb(0,58,186)',
            // 'rgb(62,199,47)'
		backgroundColor:[
                'rgb(255, 136, 0)',
                'rgb(62,199,47)',
                'rgb(0,58,186)',
		],
		lineTension: 0,
	}
	]
}

var myChart2 = new Chart(ctx, {
	type: 'doughnut',
	data: data,
	options: {
		maintainAspectRatio: false,
		bezierCurve: false,
		
	}
})