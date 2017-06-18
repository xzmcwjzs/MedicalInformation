using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Enum
{
   public enum EHRAbstractTypeEnum
    {
        [Description("Comm_ResidentFile")]
       ResidentInfo,
       [Description("Chronic_disease_Diabetes_family")]
       Family,
       [Description("Chronic_disease_SmokeAndDrink")]
       SmokeAndDrink,
       [Description("Chronic_disease_DailyLife")]
       EHabits,
       [Description("Chronic_disease_PhysicalExercise")]
       Physical,
       [Description("Chronic_disease_Outpatient")]
       Outpatient,
       [Description("Chronic_disease_Hospitalization")]
       Hospitalization,
       [Description("Chronic_disease_Comm_Testing_Blood")]
       Blood,
       [Description("Chronic_disease_Comm_Testing_BMC")]
       BMC,
       [Description("Chronic_disease_Comm_Testing_CSF")]
       CSF,
       [Description("Chronic_disease_Comm_Testing_Faeces")]
       Faeces,
       [Description("Chronic_disease_Comm_Testing_GeneDetection")]
       GeneDetection,
       [Description("Chronic_disease_Comm_Humor")]
       HumorCheck,
       [Description("Chronic_disease_Comm_Testing_SCE")]
       SCE,
       [Description("Chronic_disease_Comm_Testing_Sputum")]
       Sputum,
       [Description("Chronic_disease_Comm_Testing_Urine")]
       Urine,
       [Description("Chronic_disease_Comm_Diagnostic")]
       DiaInfo,
       [Description("Chronic_disease_Comm_Medication")]
       MedInfo, 
       [Description("Chronic_disease_Comm_Operation")]
       OperR,
       [Description("Chronic_disease_Supplementary_Examination_X")]
       X,
       [Description("Chronic_disease_Supplementary_Examination_CT")]
      CT,
       [Description("Chronic_disease_Supplementary_Examination_US")]
       US,
       [Description("Chronic_disease_Supplementary_Examination_MRI")]
       MRI,
       [Description("Chronic_disease_Supplementary_Examination_Stomach")]
       Stomach,
       [Description("Chronic_disease_Supplementary_Examination_Heart")]
       Heart,
       [Description("Chronic_disease_Comm_Lung")]
       Lung,
       [Description("Chronic_disease_BloodPressure")]
       BloodPressure,
       [Description("Chronic_disease_BloodGlucose")]
       BloodGlucose,
       [Description("Chronic_disease_Constitution")]
       Constitution,
       [Description("MT_BC_SelfCheck")]
       SelfCheck,
        [Description("MT_BC_Followup")]
        Followup,
        [Description("MT_Comm_Adults_Health_Examination_New")]
        AdultsHealthExamination

    }
}
