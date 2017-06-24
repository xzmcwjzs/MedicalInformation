 
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using MalignantTumorSystem.IDAL;
namespace MalignantTumorSystem.DAL{

		
	public partial class Comm_Platform_WorkerDal:BaseDal<Comm_Platform_Worker>,IComm_Platform_WorkerDal
    {
	}
		
	public partial class MT_RoleInfoDal:BaseDal<MT_RoleInfo>,IMT_RoleInfoDal
    {
	}
		
	public partial class MT_WorkerRoleInfoDal:BaseDal<MT_WorkerRoleInfo>,IMT_WorkerRoleInfoDal
    {
	}
		
	public partial class Share_ProvinceDal:BaseDal<Share_Province>,IShare_ProvinceDal
    {
	}
		
	public partial class Share_CityDal:BaseDal<Share_City>,IShare_CityDal
    {
	}
		
	public partial class Share_CountyDal:BaseDal<Share_County>,IShare_CountyDal
    {
	}
		
	public partial class Share_StreetDal:BaseDal<Share_Street>,IShare_StreetDal
    {
	}
		
	public partial class Share_CommunityInfoDal:BaseDal<Share_CommunityInfo>,IShare_CommunityInfoDal
    {
	}
		
	public partial class Comm_TumourDal:BaseDal<Comm_Tumour>,IComm_TumourDal
    {
	}
		
	public partial class Comm_ResidentFileDal:BaseDal<Comm_ResidentFile>,IComm_ResidentFileDal
    {
	}
		
	public partial class Comm_ResidentFile_Followup_DiseaseDal:BaseDal<Comm_ResidentFile_Followup_Disease>,IComm_ResidentFile_Followup_DiseaseDal
    {
	}
		
	public partial class Comm_ResidentFile_Followup_SurgeryDal:BaseDal<Comm_ResidentFile_Followup_Surgery>,IComm_ResidentFile_Followup_SurgeryDal
    {
	}
		
	public partial class Comm_ResidentFile_Followup_TraumaDal:BaseDal<Comm_ResidentFile_Followup_Trauma>,IComm_ResidentFile_Followup_TraumaDal
    {
	}
		
	public partial class Comm_ResidentFile_Followup_Blood_TransfusionDal:BaseDal<Comm_ResidentFile_Followup_Blood_Transfusion>,IComm_ResidentFile_Followup_Blood_TransfusionDal
    {
	}
		
	public partial class Comm_ResidentFile_Followup_Family_DiseaseDal:BaseDal<Comm_ResidentFile_Followup_Family_Disease>,IComm_ResidentFile_Followup_Family_DiseaseDal
    {
	}
		
	public partial class Chronic_disease_SmokeAndDrinkDal:BaseDal<Chronic_disease_SmokeAndDrink>,IChronic_disease_SmokeAndDrinkDal
    {
	}
		
	public partial class Comm_EHR_AbstractDal:BaseDal<Comm_EHR_Abstract>,IComm_EHR_AbstractDal
    {
	}
		
	public partial class Comm_ResidentFile_Change_AddressDal:BaseDal<Comm_ResidentFile_Change_Address>,IComm_ResidentFile_Change_AddressDal
    {
	}
		
	public partial class Share_DataDictionaryDal:BaseDal<Share_DataDictionary>,IShare_DataDictionaryDal
    {
	}
		
	public partial class Chronic_disease_Diabetes_familyDal:BaseDal<Chronic_disease_Diabetes_family>,IChronic_disease_Diabetes_familyDal
    {
	}
		
	public partial class Chronic_disease_Diabetes_family_relationDal:BaseDal<Chronic_disease_Diabetes_family_relation>,IChronic_disease_Diabetes_family_relationDal
    {
	}
		
	public partial class Chronic_disease_DailyLifeDal:BaseDal<Chronic_disease_DailyLife>,IChronic_disease_DailyLifeDal
    {
	}
		
	public partial class Chronic_disease_PhysicalExerciseDal:BaseDal<Chronic_disease_PhysicalExercise>,IChronic_disease_PhysicalExerciseDal
    {
	}
		
	public partial class Chronic_disease_PhysicalExercise_AddDal:BaseDal<Chronic_disease_PhysicalExercise_Add>,IChronic_disease_PhysicalExercise_AddDal
    {
	}
		
	public partial class ICD_10_oldDal:BaseDal<ICD_10_old>,IICD_10_oldDal
    {
	}
		
	public partial class Chronic_disease_Comm_MedicineDal:BaseDal<Chronic_disease_Comm_Medicine>,IChronic_disease_Comm_MedicineDal
    {
	}
		
	public partial class Chronic_disease_Data_DiseaseNameDal:BaseDal<Chronic_disease_Data_DiseaseName>,IChronic_disease_Data_DiseaseNameDal
    {
	}
		
	public partial class Chronic_disease_Comm_DiagnosticDal:BaseDal<Chronic_disease_Comm_Diagnostic>,IChronic_disease_Comm_DiagnosticDal
    {
	}
		
	public partial class Chronic_disease_OutpatientDal:BaseDal<Chronic_disease_Outpatient>,IChronic_disease_OutpatientDal
    {
	}
		
	public partial class Chronic_disease_Comm_MedicationDal:BaseDal<Chronic_disease_Comm_Medication>,IChronic_disease_Comm_MedicationDal
    {
	}
		
	public partial class Chronic_disease_Outpatient_JudgeDal:BaseDal<Chronic_disease_Outpatient_Judge>,IChronic_disease_Outpatient_JudgeDal
    {
	}
		
	public partial class Chronic_disease_Outpatient_PrescriptionDal:BaseDal<Chronic_disease_Outpatient_Prescription>,IChronic_disease_Outpatient_PrescriptionDal
    {
	}
		
	public partial class Chronic_disease_Outpatient_AccessoryExaminationDal:BaseDal<Chronic_disease_Outpatient_AccessoryExamination>,IChronic_disease_Outpatient_AccessoryExaminationDal
    {
	}
		
	public partial class Chronic_disease_Comm_MedicationAddDal:BaseDal<Chronic_disease_Comm_MedicationAdd>,IChronic_disease_Comm_MedicationAddDal
    {
	}
		
	public partial class Chronic_disease_HospitalizationDal:BaseDal<Chronic_disease_Hospitalization>,IChronic_disease_HospitalizationDal
    {
	}
		
	public partial class Chronic_disease_Hospitalization_ConsultationRecordDal:BaseDal<Chronic_disease_Hospitalization_ConsultationRecord>,IChronic_disease_Hospitalization_ConsultationRecordDal
    {
	}
		
	public partial class Chronic_disease_Hospitalization_CourseRecordDal:BaseDal<Chronic_disease_Hospitalization_CourseRecord>,IChronic_disease_Hospitalization_CourseRecordDal
    {
	}
		
	public partial class Chronic_disease_Hospitalization_ExpensesDal:BaseDal<Chronic_disease_Hospitalization_Expenses>,IChronic_disease_Hospitalization_ExpensesDal
    {
	}
		
	public partial class Chronic_disease_Hospitalization_DischargeAbstractDal:BaseDal<Chronic_disease_Hospitalization_DischargeAbstract>,IChronic_disease_Hospitalization_DischargeAbstractDal
    {
	}
		
	public partial class Chronic_disease_Hospitalization_DischargeAbstract_AdviceDal:BaseDal<Chronic_disease_Hospitalization_DischargeAbstract_Advice>,IChronic_disease_Hospitalization_DischargeAbstract_AdviceDal
    {
	}
		
	public partial class Chronic_disease_Comm_DiagnosticAddDal:BaseDal<Chronic_disease_Comm_DiagnosticAdd>,IChronic_disease_Comm_DiagnosticAddDal
    {
	}
		
	public partial class Chronic_disease_Data_NamesDal:BaseDal<Chronic_disease_Data_Names>,IChronic_disease_Data_NamesDal
    {
	}
		
	public partial class Chronic_disease_Data_UnitsDal:BaseDal<Chronic_disease_Data_Units>,IChronic_disease_Data_UnitsDal
    {
	}
		
	public partial class Chronic_disease_Data_SectionsDal:BaseDal<Chronic_disease_Data_Sections>,IChronic_disease_Data_SectionsDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_BloodDal:BaseDal<Chronic_disease_Comm_Testing_Blood>,IChronic_disease_Comm_Testing_BloodDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_Blood_AddDal:BaseDal<Chronic_disease_Comm_Testing_Blood_Add>,IChronic_disease_Comm_Testing_Blood_AddDal
    {
	}
		
	public partial class Chronic_disease_PicturesDal:BaseDal<Chronic_disease_Pictures>,IChronic_disease_PicturesDal
    {
	}
		
	public partial class Chronic_disease_Data_ResultsDal:BaseDal<Chronic_disease_Data_Results>,IChronic_disease_Data_ResultsDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_UrineDal:BaseDal<Chronic_disease_Comm_Testing_Urine>,IChronic_disease_Comm_Testing_UrineDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_Urine_AddDal:BaseDal<Chronic_disease_Comm_Testing_Urine_Add>,IChronic_disease_Comm_Testing_Urine_AddDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_FaecesDal:BaseDal<Chronic_disease_Comm_Testing_Faeces>,IChronic_disease_Comm_Testing_FaecesDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_SputumDal:BaseDal<Chronic_disease_Comm_Testing_Sputum>,IChronic_disease_Comm_Testing_SputumDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_CSFDal:BaseDal<Chronic_disease_Comm_Testing_CSF>,IChronic_disease_Comm_Testing_CSFDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_CSFAddDal:BaseDal<Chronic_disease_Comm_Testing_CSFAdd>,IChronic_disease_Comm_Testing_CSFAddDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_SCEDal:BaseDal<Chronic_disease_Comm_Testing_SCE>,IChronic_disease_Comm_Testing_SCEDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_SCEAddDal:BaseDal<Chronic_disease_Comm_Testing_SCEAdd>,IChronic_disease_Comm_Testing_SCEAddDal
    {
	}
		
	public partial class Chronic_disease_Comm_HumorProjectNamesDal:BaseDal<Chronic_disease_Comm_HumorProjectNames>,IChronic_disease_Comm_HumorProjectNamesDal
    {
	}
		
	public partial class Chronic_disease_Comm_HumorAddDal:BaseDal<Chronic_disease_Comm_HumorAdd>,IChronic_disease_Comm_HumorAddDal
    {
	}
		
	public partial class Chronic_disease_Comm_HumorDal:BaseDal<Chronic_disease_Comm_Humor>,IChronic_disease_Comm_HumorDal
    {
	}
		
	public partial class Chronic_disease_Comm_HumorUnitDal:BaseDal<Chronic_disease_Comm_HumorUnit>,IChronic_disease_Comm_HumorUnitDal
    {
	}
		
	public partial class Chronic_disease_Comm_HumorResultDal:BaseDal<Chronic_disease_Comm_HumorResult>,IChronic_disease_Comm_HumorResultDal
    {
	}
		
	public partial class Chronic_disease_Comm_HumorQuJianDal:BaseDal<Chronic_disease_Comm_HumorQuJian>,IChronic_disease_Comm_HumorQuJianDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_BMCDal:BaseDal<Chronic_disease_Comm_Testing_BMC>,IChronic_disease_Comm_Testing_BMCDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_BMCAddDal:BaseDal<Chronic_disease_Comm_Testing_BMCAdd>,IChronic_disease_Comm_Testing_BMCAddDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_GeneDetection_AddDal:BaseDal<Chronic_disease_Comm_Testing_GeneDetection_Add>,IChronic_disease_Comm_Testing_GeneDetection_AddDal
    {
	}
		
	public partial class Chronic_disease_Comm_Testing_GeneDetectionDal:BaseDal<Chronic_disease_Comm_Testing_GeneDetection>,IChronic_disease_Comm_Testing_GeneDetectionDal
    {
	}
		
	public partial class ICD_9_oldDal:BaseDal<ICD_9_old>,IICD_9_oldDal
    {
	}
		
	public partial class Chronic_disease_Comm_OperationDal:BaseDal<Chronic_disease_Comm_Operation>,IChronic_disease_Comm_OperationDal
    {
	}
		
	public partial class Chronic_disease_Comm_OperationAddDal:BaseDal<Chronic_disease_Comm_OperationAdd>,IChronic_disease_Comm_OperationAddDal
    {
	}
		
	public partial class Chronic_disease_Supplementary_Examination_CTDal:BaseDal<Chronic_disease_Supplementary_Examination_CT>,IChronic_disease_Supplementary_Examination_CTDal
    {
	}
		
	public partial class Chronic_disease_Supplementary_Examination_XDal:BaseDal<Chronic_disease_Supplementary_Examination_X>,IChronic_disease_Supplementary_Examination_XDal
    {
	}
		
	public partial class Chronic_disease_Supplementary_Examination_USDal:BaseDal<Chronic_disease_Supplementary_Examination_US>,IChronic_disease_Supplementary_Examination_USDal
    {
	}
		
	public partial class Chronic_disease_Supplementary_Examination_StomachDal:BaseDal<Chronic_disease_Supplementary_Examination_Stomach>,IChronic_disease_Supplementary_Examination_StomachDal
    {
	}
		
	public partial class Chronic_disease_Supplementary_Examination_MRIDal:BaseDal<Chronic_disease_Supplementary_Examination_MRI>,IChronic_disease_Supplementary_Examination_MRIDal
    {
	}
		
	public partial class Chronic_disease_Supplementary_Examination_HeartDal:BaseDal<Chronic_disease_Supplementary_Examination_Heart>,IChronic_disease_Supplementary_Examination_HeartDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungProjectNamesDal:BaseDal<Chronic_disease_Comm_LungProjectNames>,IChronic_disease_Comm_LungProjectNamesDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungQuJianDal:BaseDal<Chronic_disease_Comm_LungQuJian>,IChronic_disease_Comm_LungQuJianDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungSexQuJianDal:BaseDal<Chronic_disease_Comm_LungSexQuJian>,IChronic_disease_Comm_LungSexQuJianDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungTitleDal:BaseDal<Chronic_disease_Comm_LungTitle>,IChronic_disease_Comm_LungTitleDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungUnitDal:BaseDal<Chronic_disease_Comm_LungUnit>,IChronic_disease_Comm_LungUnitDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungDal:BaseDal<Chronic_disease_Comm_Lung>,IChronic_disease_Comm_LungDal
    {
	}
		
	public partial class Chronic_disease_Comm_LungAddDal:BaseDal<Chronic_disease_Comm_LungAdd>,IChronic_disease_Comm_LungAddDal
    {
	}
		
	public partial class TestDal:BaseDal<Test>,ITestDal
    {
	}
		
	public partial class Chronic_disease_BloodPressureDal:BaseDal<Chronic_disease_BloodPressure>,IChronic_disease_BloodPressureDal
    {
	}
		
	public partial class Chronic_disease_BloodPressure_AddDal:BaseDal<Chronic_disease_BloodPressure_Add>,IChronic_disease_BloodPressure_AddDal
    {
	}
		
	public partial class Chronic_disease_BloodGlucoseDal:BaseDal<Chronic_disease_BloodGlucose>,IChronic_disease_BloodGlucoseDal
    {
	}
		
	public partial class Chronic_disease_BloodGlucose_AddDal:BaseDal<Chronic_disease_BloodGlucose_Add>,IChronic_disease_BloodGlucose_AddDal
    {
	}
		
	public partial class Chronic_disease_ConstitutionDal:BaseDal<Chronic_disease_Constitution>,IChronic_disease_ConstitutionDal
    {
	}
		
	public partial class MT_BC_SelfCheckDal:BaseDal<MT_BC_SelfCheck>,IMT_BC_SelfCheckDal
    {
	}
		
	public partial class MT_BC_FollowupDal:BaseDal<MT_BC_Followup>,IMT_BC_FollowupDal
    {
	}
		
	public partial class MT_BC_Followup_DoseDal:BaseDal<MT_BC_Followup_Dose>,IMT_BC_Followup_DoseDal
    {
	}
		
	public partial class MT_Comm_Adults_Health_Examination_NewDal:BaseDal<MT_Comm_Adults_Health_Examination_New>,IMT_Comm_Adults_Health_Examination_NewDal
    {
	}
		
	public partial class ErrorLogDal:BaseDal<ErrorLog>,IErrorLogDal
    {
	}
		
	public partial class UserLogDal:BaseDal<UserLog>,IUserLogDal
    {
	}
		
	public partial class MT_BC_ClinicalExaminationDal:BaseDal<MT_BC_ClinicalExamination>,IMT_BC_ClinicalExaminationDal
    {
	}
		
	public partial class MT_BC_MammographyDal:BaseDal<MT_BC_Mammography>,IMT_BC_MammographyDal
    {
	}
		
	public partial class MT_BC_UltrasonographyDal:BaseDal<MT_BC_Ultrasonography>,IMT_BC_UltrasonographyDal
    {
	}
		
	public partial class MT_BC_PathologicalDiagnosisDal:BaseDal<MT_BC_PathologicalDiagnosis>,IMT_BC_PathologicalDiagnosisDal
    {
	}
		
	public partial class MT_BC_OperativeTreatmentDal:BaseDal<MT_BC_OperativeTreatment>,IMT_BC_OperativeTreatmentDal
    {
	}
		
	public partial class MT_BC_RadiotherapyDal:BaseDal<MT_BC_Radiotherapy>,IMT_BC_RadiotherapyDal
    {
	}
		
	public partial class MT_BC_EndocrinotherapyDal:BaseDal<MT_BC_Endocrinotherapy>,IMT_BC_EndocrinotherapyDal
    {
	}
		
	public partial class MT_BC_ChemicalTreatmentDal:BaseDal<MT_BC_ChemicalTreatment>,IMT_BC_ChemicalTreatmentDal
    {
	}
		
	public partial class MT_BC_TCMTreatmentDal:BaseDal<MT_BC_TCMTreatment>,IMT_BC_TCMTreatmentDal
    {
	}
		
	public partial class MT_BC_21GenesDal:BaseDal<MT_BC_21Genes>,IMT_BC_21GenesDal
    {
	}
}