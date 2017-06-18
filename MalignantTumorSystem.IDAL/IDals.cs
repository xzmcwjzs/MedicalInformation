 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
namespace MalignantTumorSystem.IDAL
{
	
	public partial interface IComm_Platform_WorkerDal : IBaseDal<Comm_Platform_Worker>
    { 
    }   
	
	public partial interface IMT_RoleInfoDal : IBaseDal<MT_RoleInfo>
    { 
    }   
	
	public partial interface IMT_WorkerRoleInfoDal : IBaseDal<MT_WorkerRoleInfo>
    { 
    }   
	
	public partial interface IShare_ProvinceDal : IBaseDal<Share_Province>
    { 
    }   
	
	public partial interface IShare_CityDal : IBaseDal<Share_City>
    { 
    }   
	
	public partial interface IShare_CountyDal : IBaseDal<Share_County>
    { 
    }   
	
	public partial interface IShare_StreetDal : IBaseDal<Share_Street>
    { 
    }   
	
	public partial interface IShare_CommunityInfoDal : IBaseDal<Share_CommunityInfo>
    { 
    }   
	
	public partial interface IComm_TumourDal : IBaseDal<Comm_Tumour>
    { 
    }   
	
	public partial interface IComm_ResidentFileDal : IBaseDal<Comm_ResidentFile>
    { 
    }   
	
	public partial interface IComm_ResidentFile_Followup_DiseaseDal : IBaseDal<Comm_ResidentFile_Followup_Disease>
    { 
    }   
	
	public partial interface IComm_ResidentFile_Followup_SurgeryDal : IBaseDal<Comm_ResidentFile_Followup_Surgery>
    { 
    }   
	
	public partial interface IComm_ResidentFile_Followup_TraumaDal : IBaseDal<Comm_ResidentFile_Followup_Trauma>
    { 
    }   
	
	public partial interface IComm_ResidentFile_Followup_Blood_TransfusionDal : IBaseDal<Comm_ResidentFile_Followup_Blood_Transfusion>
    { 
    }   
	
	public partial interface IComm_ResidentFile_Followup_Family_DiseaseDal : IBaseDal<Comm_ResidentFile_Followup_Family_Disease>
    { 
    }   
	
	public partial interface IChronic_disease_SmokeAndDrinkDal : IBaseDal<Chronic_disease_SmokeAndDrink>
    { 
    }   
	
	public partial interface IComm_EHR_AbstractDal : IBaseDal<Comm_EHR_Abstract>
    { 
    }   
	
	public partial interface IComm_ResidentFile_Change_AddressDal : IBaseDal<Comm_ResidentFile_Change_Address>
    { 
    }   
	
	public partial interface IShare_DataDictionaryDal : IBaseDal<Share_DataDictionary>
    { 
    }   
	
	public partial interface IChronic_disease_Diabetes_familyDal : IBaseDal<Chronic_disease_Diabetes_family>
    { 
    }   
	
	public partial interface IChronic_disease_Diabetes_family_relationDal : IBaseDal<Chronic_disease_Diabetes_family_relation>
    { 
    }   
	
	public partial interface IChronic_disease_DailyLifeDal : IBaseDal<Chronic_disease_DailyLife>
    { 
    }   
	
	public partial interface IChronic_disease_PhysicalExerciseDal : IBaseDal<Chronic_disease_PhysicalExercise>
    { 
    }   
	
	public partial interface IChronic_disease_PhysicalExercise_AddDal : IBaseDal<Chronic_disease_PhysicalExercise_Add>
    { 
    }   
	
	public partial interface IICD_10_oldDal : IBaseDal<ICD_10_old>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_MedicineDal : IBaseDal<Chronic_disease_Comm_Medicine>
    { 
    }   
	
	public partial interface IChronic_disease_Data_DiseaseNameDal : IBaseDal<Chronic_disease_Data_DiseaseName>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_DiagnosticDal : IBaseDal<Chronic_disease_Comm_Diagnostic>
    { 
    }   
	
	public partial interface IChronic_disease_OutpatientDal : IBaseDal<Chronic_disease_Outpatient>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_MedicationDal : IBaseDal<Chronic_disease_Comm_Medication>
    { 
    }   
	
	public partial interface IChronic_disease_Outpatient_JudgeDal : IBaseDal<Chronic_disease_Outpatient_Judge>
    { 
    }   
	
	public partial interface IChronic_disease_Outpatient_PrescriptionDal : IBaseDal<Chronic_disease_Outpatient_Prescription>
    { 
    }   
	
	public partial interface IChronic_disease_Outpatient_AccessoryExaminationDal : IBaseDal<Chronic_disease_Outpatient_AccessoryExamination>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_MedicationAddDal : IBaseDal<Chronic_disease_Comm_MedicationAdd>
    { 
    }   
	
	public partial interface IChronic_disease_HospitalizationDal : IBaseDal<Chronic_disease_Hospitalization>
    { 
    }   
	
	public partial interface IChronic_disease_Hospitalization_ConsultationRecordDal : IBaseDal<Chronic_disease_Hospitalization_ConsultationRecord>
    { 
    }   
	
	public partial interface IChronic_disease_Hospitalization_CourseRecordDal : IBaseDal<Chronic_disease_Hospitalization_CourseRecord>
    { 
    }   
	
	public partial interface IChronic_disease_Hospitalization_ExpensesDal : IBaseDal<Chronic_disease_Hospitalization_Expenses>
    { 
    }   
	
	public partial interface IChronic_disease_Hospitalization_DischargeAbstractDal : IBaseDal<Chronic_disease_Hospitalization_DischargeAbstract>
    { 
    }   
	
	public partial interface IChronic_disease_Hospitalization_DischargeAbstract_AdviceDal : IBaseDal<Chronic_disease_Hospitalization_DischargeAbstract_Advice>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_DiagnosticAddDal : IBaseDal<Chronic_disease_Comm_DiagnosticAdd>
    { 
    }   
	
	public partial interface IChronic_disease_Data_NamesDal : IBaseDal<Chronic_disease_Data_Names>
    { 
    }   
	
	public partial interface IChronic_disease_Data_UnitsDal : IBaseDal<Chronic_disease_Data_Units>
    { 
    }   
	
	public partial interface IChronic_disease_Data_SectionsDal : IBaseDal<Chronic_disease_Data_Sections>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_BloodDal : IBaseDal<Chronic_disease_Comm_Testing_Blood>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_Blood_AddDal : IBaseDal<Chronic_disease_Comm_Testing_Blood_Add>
    { 
    }   
	
	public partial interface IChronic_disease_PicturesDal : IBaseDal<Chronic_disease_Pictures>
    { 
    }   
	
	public partial interface IChronic_disease_Data_ResultsDal : IBaseDal<Chronic_disease_Data_Results>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_UrineDal : IBaseDal<Chronic_disease_Comm_Testing_Urine>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_Urine_AddDal : IBaseDal<Chronic_disease_Comm_Testing_Urine_Add>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_FaecesDal : IBaseDal<Chronic_disease_Comm_Testing_Faeces>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_SputumDal : IBaseDal<Chronic_disease_Comm_Testing_Sputum>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_CSFDal : IBaseDal<Chronic_disease_Comm_Testing_CSF>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_CSFAddDal : IBaseDal<Chronic_disease_Comm_Testing_CSFAdd>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_SCEDal : IBaseDal<Chronic_disease_Comm_Testing_SCE>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_SCEAddDal : IBaseDal<Chronic_disease_Comm_Testing_SCEAdd>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_HumorProjectNamesDal : IBaseDal<Chronic_disease_Comm_HumorProjectNames>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_HumorAddDal : IBaseDal<Chronic_disease_Comm_HumorAdd>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_HumorDal : IBaseDal<Chronic_disease_Comm_Humor>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_HumorUnitDal : IBaseDal<Chronic_disease_Comm_HumorUnit>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_HumorResultDal : IBaseDal<Chronic_disease_Comm_HumorResult>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_HumorQuJianDal : IBaseDal<Chronic_disease_Comm_HumorQuJian>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_BMCDal : IBaseDal<Chronic_disease_Comm_Testing_BMC>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_BMCAddDal : IBaseDal<Chronic_disease_Comm_Testing_BMCAdd>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_GeneDetection_AddDal : IBaseDal<Chronic_disease_Comm_Testing_GeneDetection_Add>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_Testing_GeneDetectionDal : IBaseDal<Chronic_disease_Comm_Testing_GeneDetection>
    { 
    }   
	
	public partial interface IICD_9_oldDal : IBaseDal<ICD_9_old>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_OperationDal : IBaseDal<Chronic_disease_Comm_Operation>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_OperationAddDal : IBaseDal<Chronic_disease_Comm_OperationAdd>
    { 
    }   
	
	public partial interface IChronic_disease_Supplementary_Examination_CTDal : IBaseDal<Chronic_disease_Supplementary_Examination_CT>
    { 
    }   
	
	public partial interface IChronic_disease_Supplementary_Examination_XDal : IBaseDal<Chronic_disease_Supplementary_Examination_X>
    { 
    }   
	
	public partial interface IChronic_disease_Supplementary_Examination_USDal : IBaseDal<Chronic_disease_Supplementary_Examination_US>
    { 
    }   
	
	public partial interface IChronic_disease_Supplementary_Examination_StomachDal : IBaseDal<Chronic_disease_Supplementary_Examination_Stomach>
    { 
    }   
	
	public partial interface IChronic_disease_Supplementary_Examination_MRIDal : IBaseDal<Chronic_disease_Supplementary_Examination_MRI>
    { 
    }   
	
	public partial interface IChronic_disease_Supplementary_Examination_HeartDal : IBaseDal<Chronic_disease_Supplementary_Examination_Heart>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungProjectNamesDal : IBaseDal<Chronic_disease_Comm_LungProjectNames>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungQuJianDal : IBaseDal<Chronic_disease_Comm_LungQuJian>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungSexQuJianDal : IBaseDal<Chronic_disease_Comm_LungSexQuJian>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungTitleDal : IBaseDal<Chronic_disease_Comm_LungTitle>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungUnitDal : IBaseDal<Chronic_disease_Comm_LungUnit>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungDal : IBaseDal<Chronic_disease_Comm_Lung>
    { 
    }   
	
	public partial interface IChronic_disease_Comm_LungAddDal : IBaseDal<Chronic_disease_Comm_LungAdd>
    { 
    }   
	
	public partial interface ITestDal : IBaseDal<Test>
    { 
    }   
	
	public partial interface IChronic_disease_BloodPressureDal : IBaseDal<Chronic_disease_BloodPressure>
    { 
    }   
	
	public partial interface IChronic_disease_BloodPressure_AddDal : IBaseDal<Chronic_disease_BloodPressure_Add>
    { 
    }   
	
	public partial interface IChronic_disease_BloodGlucoseDal : IBaseDal<Chronic_disease_BloodGlucose>
    { 
    }   
	
	public partial interface IChronic_disease_BloodGlucose_AddDal : IBaseDal<Chronic_disease_BloodGlucose_Add>
    { 
    }   
	
	public partial interface IChronic_disease_ConstitutionDal : IBaseDal<Chronic_disease_Constitution>
    { 
    }   
	
	public partial interface IMT_BC_SelfCheckDal : IBaseDal<MT_BC_SelfCheck>
    { 
    }   
	
	public partial interface IMT_BC_FollowupDal : IBaseDal<MT_BC_Followup>
    { 
    }   
	
	public partial interface IMT_BC_Followup_DoseDal : IBaseDal<MT_BC_Followup_Dose>
    { 
    }   
	
	public partial interface IMT_Comm_Adults_Health_Examination_NewDal : IBaseDal<MT_Comm_Adults_Health_Examination_New>
    { 
    }   
}