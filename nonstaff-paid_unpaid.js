
// debugger;

form = SateraitoWF.getForm(document.getElementsByName('workflow_doc_load_handler'));

var date1_str	= SateraitoWF.getFormValue(form, 'dummy_date');

//date1_str is 2020-09-29

	var date_obj	= date1_str.split('-');
	//2020 09 29
	var year_int	= date_obj[0];
	//2020
	var month_int	= date_obj[1];
	//09
	var date_int	= date_obj[2];
	//29

//    if(month_int<4){  //4月はじまり
//        result = year_int-1;
//      }else{
//        result = year_int;
//      }

	var year_str = year_int.toString();

	SateraitoWF.setFormValue(form, 'fsyear', year_str);

	var month_str = month_int.toString();


	if(month_str == '01'){
	    	SateraitoWF.setFormValue(form, 'month', 'JAN');
	}else if(month_str == '02'){
	    	SateraitoWF.setFormValue(form, 'month', 'FEB');
	}else if(month_str == '03'){
	    	SateraitoWF.setFormValue(form, 'month', 'MAR');
	}else if(month_str == '04'){
	    	SateraitoWF.setFormValue(form, 'month', 'APR');
	}else if(month_str == '05'){
	    	SateraitoWF.setFormValue(form, 'month', 'MAY');
	}else if(month_str == '06'){
	    	SateraitoWF.setFormValue(form, 'month', 'JUN');
	}else if(month_str == '07'){
	    	SateraitoWF.setFormValue(form, 'month', 'JUL');
	}else if(month_str == '08'){
	    	SateraitoWF.setFormValue(form, 'month', 'AUG');
	}else if(month_str == '09'){
	    	SateraitoWF.setFormValue(form, 'month', 'SEP');
	}else if(month_str == '10'){
	    	SateraitoWF.setFormValue(form, 'month', 'OCT');
	}else if(month_str == '11'){
	    	SateraitoWF.setFormValue(form, 'month', 'NOV');
	}else if(month_str == '12'){
	    	SateraitoWF.setFormValue(form, 'month', 'DEC');
	}



//======< 申請書のフォームを取得する >======


//======< ドキュメントステータス取得 >======

var doc_status = SateraitoWF.getDocStatus(form);

    if(doc_status == 'final_approved'){
		SateraitoWF.enableFormElement(form, 'btn2');
	}else{
		SateraitoWF.disableFormElement(form, 'btn2');
	}

//======< ユーザー作成系ステータス（新規、下書き編集、差戻再申請）以外はリターン >======

//SateraitoWF.hideRouteSelection(form,1);
//SateraitoWF.hideRouteSelection(form,2);
//SateraitoWF.hideRouteSelection(form,3);

// if(doc_status != '' && doc_status != 'draft' && doc_status != 'remanded'){
// 	return;
// }

SateraitoWF.hideRouteSelection(form);

		$(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Special_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');


$(form).find(':input[name=Leave_Type]').change(function(){

	var Leave_Type = SateraitoWF.getFormValue(form, 'Leave_Type');

	if(Leave_Type == 'Paid_Leave'){
        $(form).find('div[name=Paid_Leave]').css('display', 'block');
        SateraitoWF.setFormValue(form, 'Paid_Leave','');
        $(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Special_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');
		SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Leave_Type == 'Unpaid_Leave'){
        $(form).find('div[name=Unpaid_Leave]').css('display', 'block');
        SateraitoWF.setFormValue(form, 'Unpaid_Leave','');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Special_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');
		SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Leave_Type == 'Special_Leave'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        SateraitoWF.setFormValue(form, 'Special_Leave','');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');
		SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Leave_Type == ''){
        $(form).find('div[name=Special_Leave]').css('display', 'none');
        SateraitoWF.setFormValue(form, 'Special_Leave','');
        $(form).find('div[name=Unpaid_Leave]').css('display', 'none');
        SateraitoWF.setFormValue(form, 'Unpaid_Leave','');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
        SateraitoWF.setFormValue(form, 'Paid_Leave','');
        $(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');
		SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');
	}
});



//$(form).find(':input[name=Paid_End_Date]').blur(function(){
//	    var Start_Date = SateraitoWF.getFormValue(form, 'Paid_Start_Date');
//	    var End_Date = SateraitoWF.getFormValue(form, 'Paid_End_Date');
//	    var Days1 = SateraitoWF.dateDiff(Start_Date, End_Date) + 1 - weekendsBetween(new Date(Start_Date), new Date(End_Date));
//	    SateraitoWF.setFormValue(form, 'Paid_Apply_Day', Days1);

//});


$(form).find(':input[name=Unpaid_End_Date]').blur(function(){
	    var Start_Date = SateraitoWF.getFormValue(form, 'Unpaid_Start_Date');
	    var End_Date = SateraitoWF.getFormValue(form, 'Unpaid_End_Date');
	    var Days1 = SateraitoWF.dateDiff(Start_Date, End_Date) + 1 - weekendsBetween(new Date(Start_Date), new Date(End_Date));
	    SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day', Days1);
});

$(form).find(':input[name=Special_End_Date]').blur(function(){
	    var Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
	    var End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
	    var Days1 = SateraitoWF.dateDiff(Start_Date, End_Date) + 1 - weekendsBetween(new Date(Start_Date), new Date(End_Date));
	    SateraitoWF.setFormValue(form, 'Special_Apply_Day', Days1);
});

$(form).find(':input[name=Paid_End_Date]').blur(function(){

	var Paid_Leave = SateraitoWF.getFormValue(form, 'Paid_Leave');


	if(Paid_Leave == 'One_Day_Leave'){
	    var Start_Date = SateraitoWF.getFormValue(form, 'Paid_Start_Date');
	    var End_Date = SateraitoWF.getFormValue(form, 'Paid_End_Date');
	    var Days1 = SateraitoWF.dateDiff(Start_Date, End_Date) + 1 - weekendsBetween(new Date(Start_Date), new Date(End_Date));
	    SateraitoWF.setFormValue(form, 'Paid_Apply_Day', Days1);
	}else if(Paid_Leave == 'AM_Leave'||'PM_Leave' || ''){
    ;

	}else{
	   ;
	}

});
function weekendsBetween(start, end) {
    var weekendDays = 0;
    dayMilliseconds = 1000 * 60 * 60 * 24;

    while (start <= end) {
        var day = start.getDay();
        if (day == 0 || day == 6) {
            weekendDays++;
        }
        start = new Date(+start + dayMilliseconds);
    }

    return weekendDays;
}


//=====< Toを選択したらFrom toを取得して計算 >=====

//======< 承認ルートの設定 >======

$(form).find(':input[name=Special_Leave]').change(function(){

	var Special_Leave = SateraitoWF.getFormValue(form, 'Special_Leave');

	if(Special_Leave == 'Own_Marriage'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','3');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');


	}else if(Special_Leave == 'Child_Marriage'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','2');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Baptism_Circumcision_Child'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','2');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Childbearing'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','2');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Pass_Away_Spouse_Parents_Child'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','2');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Pass_Away_Brother_Sister'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','1');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Pass_Away_of_The_Family_Live_Together'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','1');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Miscarriage'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'block');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','2');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Menstruation'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','2');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Child_Hospitalization'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','1');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'National_Work'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == 'Haji'){
        $(form).find('div[name=Special_Leave]').css('display', 'block');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');

	}else if(Special_Leave == ''){
        $(form).find('div[name=Special_Leave]').css('display', 'none');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'none');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');
    }else{
        ;
	}

});

$(form).find(':input[name=Paid_Leave]').change(function(){

	var Paid_Leave = SateraitoWF.getFormValue(form, 'Paid_Leave');

	if(Paid_Leave == 'AM_Leave'){
	    SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Apply_Day',  '0.5');
	}else if(Paid_Leave == 'PM_Leave'){
	    SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Apply_Day',  '0.5');
	}else if(Paid_Leave == 'One_Day_Leave'){
	    SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Apply_Day',  '');
	}else if(Paid_Leave == ''){
	    SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Apply_Day',  '');
	}

});


$(form).find(':input[name=Unpaid_Leave]').change(function(){

	var Unpaid_Leave = SateraitoWF.getFormValue(form, 'Unpaid_Leave');

	if(Unpaid_Leave == 'Absence'){
        $(form).find('div[name=Special_Leave]').css('display', 'none');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'block');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');


	}else if(Unpaid_Leave == 'Arrive_Late'){
        $(form).find('div[name=Special_Leave]').css('display', 'none');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'block');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'block');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');


	}else if(Unpaid_Leave == 'Leave_Early'){
        $(form).find('div[name=Special_Leave]').css('display', 'none');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'block');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'block');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'block');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');


	}else if(Unpaid_Leave == ''){
        $(form).find('div[name=Special_Leave]').css('display', 'none');
        $(form).find('div[name=Paid_Leave]').css('display', 'none');
		$(form).find('div[name=Unpaid_Leave]').css('display', 'block');
		$(form).find('div[name=Detail_Paid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Unpaid_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Detail_Special_Leave_Request]').css('display', 'none');
        $(form).find('div[name=Attach_Document]').css('display', 'none');
        $(form).find('div[name=Late_Early]').css('display', 'none');

        SateraitoWF.setFormValue(form, 'Special_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Special_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Special_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Paid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Paid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Paid_Back_to_Work_Date',  '');

        SateraitoWF.setFormValue(form, 'Unpaid_Apply_Day','');
        SateraitoWF.setFormValue(form, 'Unpaid_Start_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_End_Date',  '');
        SateraitoWF.setFormValue(form, 'Unpaid_Back_to_Work_Date',  '');


	}else{
        ;
	}

});

//$(form).find(':input[name=Leave_Type]').change(function(){
//        displaySection();
//});

//======< 承認ルートの設定 >======

//==================< 申請・承認 イベントハンドラ >==================
// action_type…実行されようとしているアクションを示す値がセットされます
// ・submit…新規申請
// ・approve…承認
// ・look…回覧
// ・reject…否決
// ・update…更新
// ・remand…差し戻し
// ・resubmit…再申請
//==================================================================






SateraitoWF.registerWFHandler(form, 'onFormValidate', function(action_type){

	switch(action_type)
	{
		case 'submit':		//新規申請
		case 'resubmit':	//再申請
			//=====< 表示セクション状態の取得 >=====

		var Special_Leave = SateraitoWF.getFormValue(form, 'Special_Leave');
		var Unpaid_Leave = SateraitoWF.getFormValue(form, 'Unpaid_Leave');
		var Paid_Leave = SateraitoWF.getFormValue(form, 'Paid_Leave');
		var Leave_Type = SateraitoWF.getFormValue(form, 'Leave_Type');

	    if(Special_Leave == 'Own_Marriage'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 3.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [3.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Child_Marriage'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 2.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [2.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Baptism_Circumcision_Child'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 2.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [2.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Childbearing'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 2.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [2.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Pass_Away_Spouse_Parents_Child'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 2.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [2.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Pass_Away_Brother_Sister'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 1.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [1.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Pass_Away_of_The_Family_Live_Together'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 1.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [1.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Miscarriage'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 2.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [2.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Menstruation'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 2.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [2.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'Child_Hospitalization'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Special_Apply_Day > 1.0){
			        SateraitoWF.alert('You cannot submit because your apply day more than [1.0 Days]');
		            return false;
			    }return true;

			}else if(Special_Leave == 'National_Work'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }return true;

			}else if(Special_Leave == 'Haji'){

        		var Special_Start_Date = SateraitoWF.getFormValue(form, 'Special_Start_Date');
				var Special_End_Date = SateraitoWF.getFormValue(form, 'Special_End_Date');
				var Special_Apply_Day = SateraitoWF.getFormValue(form, 'Special_Apply_Day');
				var Special_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Special_Back_to_Work_Date');
				var Special_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Special_Apply_Day'));

				if(Special_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Special_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Special_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Special_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }return true;

			}else if(Unpaid_Leave == 'Arrive_Late'){

        		var Unpaid_Start_Date = SateraitoWF.getFormValue(form, 'Unpaid_Start_Date');
				var Unpaid_End_Date = SateraitoWF.getFormValue(form, 'Unpaid_End_Date');
				var Unpaid_Apply_Day = SateraitoWF.getFormValue(form, 'Unpaid_Apply_Day');
				var Unpaid_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Unpaid_Back_to_Work_Date');
				var Unpaid_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Unpaid_Apply_Day'));
				var Late_Early_Start_Time = SateraitoWF.getFormValue(form, 'Late_Early_Start_Time');
				var Late_Early_End_Time = SateraitoWF.getFormValue(form, 'Late_Early_End_Time');
				var Late_Early_Total_Hour = SateraitoWF.getFormValue(form, 'Late_Early_Total_Hour');

				if(Unpaid_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Unpaid_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Unpaid_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Unpaid_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Late_Early_Start_Time == ''){
				    SateraitoWF.alert('Please input [Late From Time]');
				    return false;
			    }else if(Late_Early_End_Time == ''){
				    SateraitoWF.alert('Please input [Late To Time]');
				    return false;
			    }else if(Late_Early_Total_Hour == ''){
				    SateraitoWF.alert('Please input [Late Total Hour]');
				    return false;
			    }return true;

			}else if(Unpaid_Leave == 'Leave_Early'){

        		var Unpaid_Start_Date = SateraitoWF.getFormValue(form, 'Unpaid_Start_Date');
				var Unpaid_End_Date = SateraitoWF.getFormValue(form, 'Unpaid_End_Date');
				var Unpaid_Apply_Day = SateraitoWF.getFormValue(form, 'Unpaid_Apply_Day');
				var Unpaid_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Unpaid_Back_to_Work_Date');
				var Unpaid_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Unpaid_Apply_Day'));
				var Late_Early_Start_Time = SateraitoWF.getFormValue(form, 'Late_Early_Start_Time');
				var Late_Early_End_Time = SateraitoWF.getFormValue(form, 'Late_Early_End_Time');
				var Late_Early_Total_Hour = SateraitoWF.getFormValue(form, 'Late_Early_Total_Hour');

				if(Unpaid_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Unpaid_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Unpaid_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Unpaid_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }else if(Late_Early_Start_Time == ''){
				    SateraitoWF.alert('Please input [Leave Early From Time]');
				    return false;
			    }else if(Late_Early_End_Time == ''){
				    SateraitoWF.alert('Please input [Leave Early To Time]');
				    return false;
			    }else if(Late_Early_Total_Hour == ''){
				    SateraitoWF.alert('Please input [Leave Early Total Hour]');
				    return false;
			    }return true;

			}else if(Unpaid_Leave == 'Absence'){

        		var Unpaid_Start_Date = SateraitoWF.getFormValue(form, 'Unpaid_Start_Date');
				var Unpaid_End_Date = SateraitoWF.getFormValue(form, 'Unpaid_End_Date');
				var Unpaid_Apply_Day = SateraitoWF.getFormValue(form, 'Unpaid_Apply_Day');
				var Unpaid_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Unpaid_Back_to_Work_Date');
				var Unpaid_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Unpaid_Apply_Day'));


				if(Unpaid_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Unpaid_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Unpaid_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Unpaid_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }return true;

			}else if(Paid_Leave == 'One_Day_Leave'){

        		var Paid_Start_Date = SateraitoWF.getFormValue(form, 'Paid_Start_Date');
				var Paid_End_Date = SateraitoWF.getFormValue(form, 'Paid_End_Date');
				var Paid_Apply_Day = SateraitoWF.getFormValue(form, 'Paid_Apply_Day');
				var Paid_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Paid_Back_to_Work_Date');
				var Paid_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Paid_Apply_Day'));


				if(Paid_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Paid_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Paid_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Paid_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }return true;

			}else if(Paid_Leave == 'AM_Leave'){

        		var Paid_Start_Date = SateraitoWF.getFormValue(form, 'Paid_Start_Date');
				var Paid_End_Date = SateraitoWF.getFormValue(form, 'Paid_End_Date');
				var Paid_Apply_Day = SateraitoWF.getFormValue(form, 'Paid_Apply_Day');
				var Paid_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Paid_Back_to_Work_Date');
				var Paid_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Paid_Apply_Day'));


				if(Paid_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Paid_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Paid_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Paid_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }return true;

			}else if(Paid_Leave == 'PM_Leave'){

        		var Paid_Start_Date = SateraitoWF.getFormValue(form, 'Paid_Start_Date');
				var Paid_End_Date = SateraitoWF.getFormValue(form, 'Paid_End_Date');
				var Paid_Apply_Day = SateraitoWF.getFormValue(form, 'Paid_Apply_Day');
				var Paid_Back_to_Work_Date = SateraitoWF.getFormValue(form, 'Paid_Back_to_Work_Date');
				var Paid_Apply_Day = parseFloat(SateraitoWF.getFormValue(form, 'Paid_Apply_Day'));


				if(Paid_Start_Date == ''){
					SateraitoWF.alert('Please input [Start Date]');
					return false;
				}else if(Paid_End_Date == ''){
					SateraitoWF.alert('Please input [End Date]');
					return false;
		    	}else if(Paid_Apply_Day == ''){
				    SateraitoWF.alert('Please input [Total Days]');
				    return false;
		        }else if(Paid_Back_to_Work_Date == ''){
				    SateraitoWF.alert('Please input [Back to Work Date]');
				    return false;
			    }return true;

			}else if(Leave_Type == 'Paid_Leave'){

        		var Paid_Leave = SateraitoWF.getFormValue(form, 'Paid_Leave');


				if(Paid_Leave == ''){
					SateraitoWF.alert('Please select [Paid Leave]');
					return false;
				}return true;

			}else if(Leave_Type == 'Unpaid_Leave'){

        		var Unpaid_Leave = SateraitoWF.getFormValue(form, 'Unpaid_Leave');


				if(Unpaid_Leave == ''){
					SateraitoWF.alert('Please select [Unpaid Leave]');
					return false;
				}return true;

			}else if(Leave_Type == 'Special_Leave'){

        		var Special_Leave = SateraitoWF.getFormValue(form, 'Special_Leave');


				if(Special_Leave == ''){
					SateraitoWF.alert('Please select [Special Leave]');
					return false;
				}return true;

			}else{

				return true;

			}
			break;
		    default:
			return true;
			break;
	}
});




var data_non_staff = new Array();
SateraitoWF.requestMasterData('nonstaff', function(aRow){
    for(var i = 0; i < aRow.length; i++) {
        var data = aRow[i];
        data_non_staff.push(data.attribute_1);
    }
});

$(form).find('input[name=btn1]').click(function(){

    var search = SateraitoWF.getFormValue(form, 'search_text');
    // var data =  data_non_staff;s

    var term = search;
    var search = new RegExp(term , 'i'); // prepare a regex object
    let filtered = data_non_staff.filter(item => search.test(item));

    console.log(filtered);

    if(filtered.length > 1){
        search = SateraitoWF.getFormValue(form, 'search_text');
        SateraitoWF.alert('pencarian dengan inisial nama : `'+search+'` lebih dari 1 <br> nama : <br>'+filtered);
    }else{

        SateraitoWF.setFormValue(form, 'search_text', filtered[0]);

        //populate all data
        var alldatanonstaff = new Array();
        SateraitoWF.requestMasterData('nonstaff', function(aRow){
            for(var i = 0; i < aRow.length; i++) {
                var data = aRow[i];
                alldatanonstaff.push(data);
            }
        });

        var newArray = alldatanonstaff.filter(function (el) {
            var corrected = SateraitoWF.getFormValue(form,'search_text');

            return el.attribute_1 == corrected;
        });

        console.log(newArray[0].data_key);
        SateraitoWF.setFormValue(form, 'data_key', newArray[0].data_key);

        var data_key = SateraitoWF.getFormValue(form, 'data_key');
        SateraitoWF.requestMasterDataRow('Paid_Leave_Master', data_key, function(aRow){
            if(typeof(aRow) != 'undefined' && typeof(aRow.data_key) != 'undefined'){
            SateraitoWF.setFormValue(form, 'Leave_Balance', aRow.attribute_2);
            }else{
            SateraitoWF.setFormValue(form, 'Leave_Balance', '');
            }
        });
    }
});