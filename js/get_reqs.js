// get request function
	function getReq(){

		$.ajax({
			url:'api/request.php',
			type:'POST',
			data:'submit='+''+'&tok='+getCookie('token')+'&em='+getCookie('email'),
			success:function(data){

				// get json string
				if (data.reqs){

					//  empty container
					cont = '';               

				   // append content to glob var
				    for (var i in data.reqs){
				      if(data.reqs.hasOwnProperty(i)){

				      	 cont +='<tr>';
				      	 cont +='<td>'+data.reqs[i].ref+'</td>';
				      	 cont +='<td>'+data.reqs[i].total_req+'</td>';
				      	 cont +='<td>'+data.reqs[i].fdl+'</td>';
				      	 cont +='<td>'+data.reqs[i].fdltm+'</td>';
				      	 cont +='<td>'+data.reqs[i].cn+'</td>';
				      	 cont +='<td>';
				      	 	// if status is > 0 : for force gen rep
				      	 	if (data.reqs[i].req_sup_stat > 0){
				      	 	
				      	 		cont += ' <a onclick="viewstat(\''+data.reqs[i].ref+'\',"0")" id="frc_lnk'+data.reqs[i].no+'" class="btn btn-primary" style="display:none;"><i class="fa fa-clock-o"></i></a>';

				      	 	}

				      	 	// view req pro but : 
				      	 	cont += ' <a title="view more" onclick="viewRef(\''+data.reqs[i].ref+'\')" class="btn btn-success"><i class="fa fa-eye" ></i></a>';

				      	 	// view sup but
				      	 	 cont += ' <a title="view suppliers" onclick="viewsup(\''+data.reqs[i].ref+'\')" class="btn btn-danger"><i class="fa fa-truck"></i></a>';
				      	 	
				      	 	// if status is > 0 : for  gen rep
				      	 	if (data.reqs[i].req_sup_stat > 0){

				      	 		cont += ' <a id="vst_lnk'+data.reqs[i].no+'" onclick="viewstat(\''+data.reqs[i].ref+'\',\'\')" style="display:none;" title="view cost list" class="btn btn-warning"><i class="fa fa-list-ol"></i> </a>';
				      	 	}

				      	 	cont +='</td>';

				      	 	cont +='</tr>';

				      		 cont += '<script type="text/javascript">';			
				      	 	// call the realtime deadline function
				      	 	cont += 'timC(\''+data.reqs[i].dl+'\','+data.reqs[i].no+','+data.reqs[i].req_sup_stat+','+data.reqs[i].req_sup+');';

				      	 	cont += '</script>';

			     	    }

			     	   		 
			     	}

			     	cont += '<script type="text/javascript">';			
				    // call the realtime deadline function
				    cont += 'timC(\''+data.reqs[i].dl+'\','+data.reqs[i].no+','+data.reqs[i].req_sup_stat+','+data.reqs[i].req_sup+');';

				    cont += '</script>';

		 			// render html
		 			$('.cus_body').html(cont);
													
				}

			}
		});
	}
