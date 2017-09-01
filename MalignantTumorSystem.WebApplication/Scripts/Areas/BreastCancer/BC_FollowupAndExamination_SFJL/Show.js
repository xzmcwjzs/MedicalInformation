$(function () {
    //表MT_BC_Followup
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/BreastCancer/BC_FollowupAndExamination_SFJL/ShowFollowup",
        data: { id: id},
        success: function (data) {
            if (data == null || data == "") {
                return;
            }
            $("#name").val(data[0].name)
            $("input[name=sex][value=" + data[0].sex + "]").attr("checked", "checked");
            $("#id_card_number").val(data[0].id_card_number);
            if (data[0].birth_date != "") {
                var date = new Date(parseInt(data[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                $("#birth_date").val(date.getFullYear() + '-' + a1 + '-' + a2);
                var dates = new Date();
                var year = dates.getFullYear() - date.getFullYear();
                if (year > 0) {
                    $("#age").val(year + "岁");
                } else if (year == 0) {
                    var month = dates.getMonth() - a1;
                    if (month > 0) {
                        $("#age").val(month + "月");
                    } else if (month == 0) {
                        var day = dates.getDay() - a2;
                        if (day > 0) {
                            $("#age").val(day + "天");
                        }
                    }
                }
            }

            //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
            if (data[0].community_code != "") {
                var code1 = data[0].community_code;
                $("#ddlProvince").val(code1.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + code1.substring(0, 2),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlCity").empty();
                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity").val(code1.substring(0, 4));
                     }
                 })

                //-----区/县-----
                $.post("/Data/County?code=" + code1.substring(0, 4),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlCounty").empty();
                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCounty").val(code1.substring(0, 6));
                     }
                 })
                //-------镇/村-------
                $.post("/Data/Street?code=" + code1.substring(0, 6),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlStreet").empty();
                     $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlStreet").val(code1.substring(0, 9));
                     }
                 })
                $.post("/Data/Community?code=" + code1.substring(0, 9),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlCommunity").empty();
                     $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCommunity").val(code1);
                     }
                 })
                $("#perment_community_address").val(data[0].address);
            }

            $("#zipCode").val(data[0].zipcode);
            $("input[name=way][value=" + data[0].followup_type + "]").attr("checked", "checked");
              
            $("#ssy").val(data[0].systolic_pressure);
            $("#szy").val(data[0].diastolic_pressure);
            $("#height").val(data[0].height);
            $("#weight1").val(data[0].weight);
            $("#weight2").val(data[0].next_weight);
            $("#bmi").val(data[0].height_weight_index);
            $("#heart1").val(data[0].heart1);
            $("#heart2").val(data[0].heart2);
            $("#other1").val(dat[0].signs_other);
            
            //心理调整
            $("input[name=xltz][value=" + data[0].xltz + "]").attr("checked", "checked");
            //遵医行为
            $("input[name=zyxw][value=" + data[0].abidance_result + "]").attr("checked", "checked");
            $("#bs").val(data[0].bloodsugar);

            $("#other4").val(data[0].bloodsugar_other);

             
            $("#reason").val(data[0].reason);
            $("#org").val(data[0].org);
            //随访分类
            $("input[name=sffl][value=" + data[0].followup_result + "]").attr("checked", "checked");

            $("#doctorname").val(data[0].followup_physician);


            if (data[0].followup_date != "") { 
                $("#time").val(ConvertDate(data[0].followup_date));
            }

            if (data[0].next_time != "") { 
                $("#nexttime").val(ConvertDate(data[0].next_time));
            }
            if (data[0].firstsymptomdate != "") {
                $("#firstsymptomdate").val(ConvertDate(data[0].firstsymptomdate));
            }
            if (data[0].firstvisitdate != "") {
                $("#firstvisitdate").val(ConvertDate(data[0].firstvisitdate));
            }
            if (data[0].firstdiagnosisdate != "") {
                $("#firstdiagnosisdate").val(ConvertDate(data[0].firstdiagnosisdate));
            }
            $("#diagnosishospital").val(data[0].diagnosishospital);
            $("#diseasename").val(data[0].diseasename); 
            if (data[0].diagnosisbasis != "" && data[0].diagnosisbasis != null) {
                var strs = new Array();
                strs = data[0].diagnosisbasis.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='diagnosisbasis'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            $("#pathologictype").val(data[0].pathologictype);
            if (data[0].treatmentsituation != "" && data[0].treatmentsituation != null) {
                $("input:radio[name='treatmentsituation'][value=" + data[0].treatmentsituation + "]").attr("checked", true);
            }
            $("#complication").val(data[0].complication);
            $("#treatmenthospital").val(data[0].treatmenthospital);
            if (data[0].treatment != "" && data[0].treatment != null) {
                var strs = new Array();
                strs = data[0].treatment.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='treatment'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            $("#treatmentother").val(data[0].treatmentother);
            $("#firstoperationhospital").val(data[0].firstoperationhospital);
            if (data[0].firstoperationdate != "" && data[0].firstoperationdate != null) $("#firstoperationdate").val(ConvertDate(data[0].firstoperationdate));
            if (data[0].firstoperationnature != "" && data[0].firstoperationnature != null) {
                $("input:radio[name='firstoperationnature'][value=" + data[0].firstoperationnature + "]").attr("checked", true);
            }
            if (data[0].transfer != "" && data[0].transfer != null) {
                $("input:radio[name='transfer'][value=" + data[0].transfer + "]").attr("checked", true);
            }
            $("#transferposition").val(data[0].transferposition);
            if (data[0].recrudescence != "" && data[0].recrudescence != null) {
                $("input:radio[name='recrudescence'][value=" + data[0].recrudescence + "]").attr("checked", true);
            } 
            if (data[0].recrudescencedate != "" && data[0].recrudescencedate != null) $("#recrudescencedate").val(ConvertDate(data[0].recrudescencedate));
            
            if (data[0].tumorhistory != "" && data[0].tumorhistory != null) { 
                $("input:radio[name='tumorhistory'][value=" + data[0].tumorhistory + "]").attr("checked", true);
            }
            if (data[0].tumorhistoryrelation != "" && data[0].tumorhistoryrelation != null) {
                $("input:radio[name='tumorhistoryrelation'][value=" + data[0].tumorhistoryrelation + "]").attr("checked", true);
            }
            if (data[0].tumorhistorytype != "" && data[0].tumorhistorytype != null) {
                var strs = new Array();
                strs = data[0].tumorhistorytype.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='tumorhistorytype'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            $("#tumorhistorytypeother").val(data[0].tumorhistorytypeother);
            if (data[0].correctdiagnosis != "" && data[0].correctdiagnosis != null) {
                $("input:radio[name='correctdiagnosis'][value=" + data[0].correctdiagnosis + "]").attr("checked", true);
            }
            $("#correctdiagnosissite").val(data[0].correctdiagnosissite);
            if (data[0].correctdiagnosisdate != "" && data[0].correctdiagnosisdate != null) $("#correctdiagnosisdate").val(ConvertDate(data[0].correctdiagnosisdate));
            if (data[0].presentsituation != "" && data[0].presentsituation != null) {
                $("input:radio[name='presentsituation'][value=" + data[0].presentsituation + "]").attr("checked", true);
            }
            if (data[0].guidecontent != "" && data[0].guidecontent != null) {
                var strs = new Array();
                strs = data[0].guidecontent.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='guidecontent'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            $("#cardscore").val(data[0].cardscore);
            $("#revokemanagedate").val(data[0].revokemanagedate);
            if (data[0].revokereason != "" && data[0].revokereason != null) {
                $("input:radio[name='revokereason'][value=" + data[0].revokereason + "]").attr("checked", true);
            }
            if (data[0].isdeath != "" && data[0].isdeath != null) {
                $("input:radio[name='isdeath'][value=" + data[0].isdeath + "]").attr("checked", true);
            }
            if (data[0].deathdate != "" && data[0].deathdate != null) $("#deathdate").val(ConvertDate(data[0].deathdate));
            if (data[0].deathreason != "" && data[0].deathreason != null) {
                $("input:radio[name='deathreason'][value=" + data[0].deathreason + "]").attr("checked", true);
            }
            if (data[0].deathsite != "" && data[0].deathsite != null) {
                $("input:radio[name='deathsite'][value=" + data[0].deathsite + "]").attr("checked", true);
            }
            $("#surviveyear").val(data[0].surviveyear);
            $("#survivemonth").val(data[0].survivemonth);


        }
    })
    //表MT_BC_Followup_Dose
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/BreastCancer/BC_FollowupAndExamination_SFJL/ShowFollowupDose",
        data: { id: id },
        success: function (data) {
            if (data == null || data == "") {
                return;
            }
            $("input[name=fyycx][value=" + data[0].dose_dependence + "]").attr("checked", "checked");
            $("#name1").val(data[0].drug_name);
            $("#name2").val(data[0].drug_name1);
            $("#name3").val(data[0].drug_name2);
            $("#other_medicals").val(data[0].drug_name3);

            $("#few1").val(data[0].drug_frequence);
            $("#few2").val(data[0].dosage_per_time);
            $("#few3").val(data[0].drug_frequence1);
            $("#few4").val(data[0].dosage_per_time1);
            $("#few5").val(data[0].drug_frequence2);
            $("#few6").val(data[0].dosage_per_time2);
            $("#few7").val(data[0].drug_frequence3);
            $("#few8").val(data[0].dosage_per_time3);

            $("input[name=blfy][value=" + data[0].has_side_effect + "]").attr("checked", "checked");
            if (data[0].has_side_effect == "true") {
                $("#discript").show();
                $("#discript").val(data[0].side_effect_description);
            }
        }
    })
     
})

function ConvertDate(data) {
    var date = new Date(parseInt(data.replace("/Date(", "").replace(")/", ""), 10));
    var a0 = date.getFullYear();
    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return a0 + '-' + a1 + '-' + a2;
}