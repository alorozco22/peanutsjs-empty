// Here require specificl models

let init_models = function(mysql){
	return new Promise((resolve,reject)=>{
		// Here initialize each model
		resolve('::Main Model:: Models initialized.');
	});
}

module.exports={
	'init_models':init_models
}