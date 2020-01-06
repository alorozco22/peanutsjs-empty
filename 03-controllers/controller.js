let model;

let init_controller = function(pModel){
	return new Promise((resolve,reject)=>{
		model = pModel;
		resolve('::Controller:: Controller initialized.');
	});
}

// Here define your functions called from the router

module.exports={
	'init_controller':init_controller
}